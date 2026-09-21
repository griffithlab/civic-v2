# Paste this entire file into a CIViC Rails console, or run:
#   load Rails.root.join("misc_scripts/supplemental_entity_counts.rb").to_s
#   bin/rails runner misc_scripts/supplemental_entity_counts.rb
#
# Counts reflect current submitted/accepted EIDs and AIDs, without a date cutoff
# or additional deprecated/deleted filters. Each entity is counted once by ID.
# Features are the Variants' owning Features; fusion partner Genes are not
# inferred as additional Features. All Source types are included.
#
# ActiveRecord queries run in a repeatable-read transaction for one consistent
# PostgreSQL snapshot. Run outside an existing transaction (a regular console,
# not bin/rails console --sandbox). The queries change no database records.
# Output: Markdown and TSV in the console, plus an HTML table in Rails.root/tmp.
# Open the HTML in a browser and copy the rendered table into Google Docs.
# If Rails runs on another host, copy the HTML file to your computer first.
begin
  require "cgi"
  require "fileutils"
  require "active_support/number_helper"

  civic_supplemental_started_at = Time.current.utc.iso8601
  civic_supplemental_counts = ActiveRecord::Base.transaction(isolation: :repeatable_read) do
    eligible_eids = EvidenceItem.where(status: %w[submitted accepted])
    eligible_aids = Assertion.where(status: %w[submitted accepted])

    qualifying_mps = MolecularProfile
      .where(id: eligible_eids.select(:molecular_profile_id))
      .or(MolecularProfile.where(id: eligible_aids.select(:molecular_profile_id)))

    qualifying_variants = Variant
      .joins(:molecular_profiles)
      .where(molecular_profiles: { id: qualifying_mps.select(:id) })
      .distinct

    qualifying_features = Feature.where(id: qualifying_variants.select(:feature_id))
    features_by_type = qualifying_features.group(:feature_instance_type).count
    feature_count = features_by_type.values.sum
    gene_count = features_by_type.fetch("Features::Gene", 0)

    # Assertions reference Sources through Evidence Items. After excluding
    # rejected EIDs, their Sources already qualify through eligible_eids.
    # Sources cited only in Feature/MP descriptions or suggestions do not qualify.
    qualifying_sources = Source.where(id: eligible_eids.select(:source_id))

    qualifying_diseases = Disease
      .where(id: eligible_eids.select(:disease_id))
      .or(Disease.where(id: eligible_aids.select(:disease_id)))

    {
      "evidence_items" => eligible_eids.count,
      "assertions" => eligible_aids.count,
      "features" => feature_count,
      "gene_features" => gene_count,
      "non_gene_features" => feature_count - gene_count,
      "variants" => qualifying_variants.count(:id),
      "molecular_profiles" => qualifying_mps.count,
      "sources" => qualifying_sources.count,
      "diseases" => qualifying_diseases.count,
    }
  end

  civic_supplemental_labels = {
    "evidence_items" => "Evidence Items (EIDs), total",
    "assertions" => "Assertions (AIDs), total",
    "features" => "Features, total",
    "gene_features" => "Gene features (subset of total)",
    "non_gene_features" => "Non-Gene features (subset of total)",
    "variants" => "Distinct variants in qualifying molecular profiles",
    "molecular_profiles" => "Distinct molecular profiles",
    "sources" => "Distinct sources/publications",
    "diseases" => "Distinct diseases",
  }
  civic_supplemental_title = "Supplementary Table. CIViC Evidence Items, Assertions, and associated entities"
  civic_supplemental_note = "Counts are distinct database records. Evidence Item (EID) and Assertion (AID) totals include submitted and accepted records only. Features and variants qualify through membership in a molecular profile with at least one submitted or accepted EID or AID. Gene and non-Gene features partition the feature total. Sources include all source types and qualify through submitted or accepted EIDs; Assertions reference sources through their EIDs. Diseases qualify through a direct EID or AID association. Rejected EIDs and AIDs are excluded. No additional date, deprecation, or deletion filters are applied."
  civic_supplemental_rows = civic_supplemental_labels.map do |key, label|
    [ label, civic_supplemental_counts.fetch(key) ]
  end
  civic_supplemental_display_rows = civic_supplemental_rows.map do |label, count|
    [ label, ActiveSupport::NumberHelper.number_to_delimited(count) ]
  end

  puts "\n#{civic_supplemental_title}"
  puts "Report started: #{civic_supplemental_started_at}; Rails environment: #{Rails.env}"
  puts "\n| Measure | Count |\n| --- | ---: |"
  civic_supplemental_display_rows.each { |label, count| puts "| #{label} | #{count} |" }
  puts "\n#{civic_supplemental_note}"
  puts "\nTab-separated table (paste into Google Sheets, then copy cells into Google Docs):"
  puts [ [ "Measure", "Count" ], *civic_supplemental_rows ].map { |row| row.join("\t") }.join("\n")

  civic_supplemental_html_rows = civic_supplemental_display_rows.map do |label, count|
    "<tr><td>#{CGI.escapeHTML(label)}</td><td style=\"text-align: right\">#{CGI.escapeHTML(count)}</td></tr>"
  end.join("\n")
  civic_supplemental_html = <<~HTML
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>CIViC supplementary entity counts</title>
      <style>
        body { max-width: 850px; margin: 48px auto; padding: 0 24px; font: 12pt/1.45 Arial, sans-serif; color: #111; }
        h1 { font-size: 14pt; line-height: 1.4; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        th, td { border: 1px solid #aaa; padding: 9px 12px; text-align: left; }
        th { background: #eee; }
        .note, .metadata { font-size: 10pt; }
      </style>
    </head>
    <body>
      <h1>#{CGI.escapeHTML(civic_supplemental_title)}</h1>
      <p class="metadata">Report started: #{CGI.escapeHTML(civic_supplemental_started_at)}; Rails environment: #{CGI.escapeHTML(Rails.env.to_s)}</p>
      <table aria-label="CIViC entity counts">
        <thead><tr><th scope="col">Measure</th><th scope="col" style="text-align: right">Count</th></tr></thead>
        <tbody>#{civic_supplemental_html_rows}</tbody>
      </table>
      <p class="note">#{CGI.escapeHTML(civic_supplemental_note)}</p>
    </body>
    </html>
  HTML
  civic_supplemental_output_dir = Rails.root.join("tmp")
  FileUtils.mkdir_p(civic_supplemental_output_dir)
  civic_supplemental_html_path = civic_supplemental_output_dir.join("civic_supplemental_counts_#{Time.now.utc.strftime('%Y%m%dT%H%M%S%6N')}.html")
  File.write(civic_supplemental_html_path, civic_supplemental_html)
  puts "\nGoogle Docs table: #{civic_supplemental_html_path}"
  puts "Open that file in a browser and copy the rendered table into Google Docs."
  nil
end

class GenerateNightlyUniprotFile < ApplicationJob
  FILENAME = "uniprot-civic-nightly.tsv"

  HEADERS = [
    "UniProt",
    "Entrez ID",
    "Info",
  ]

  def perform
    begin
      tmp_file = Tempfile.new(FILENAME, File.join(Rails.root, "tmp"))
      downloads_dir = File.join(Rails.root, "public", "downloads", "nightly")
      FileUtils.mkdir_p(downloads_dir)
      public_path = File.join(downloads_dir, FILENAME)

      tmp_file.puts CSV.generate_line(HEADERS, col_sep: "\t")
      genes_to_process.each do |gene|
        gene.uniprot_ids.each do |uniprot_id|
          cols = [
            uniprot_id,
            gene.entrez_id,
            generate_info_field(gene),
          ]
          tmp_file.puts CSV.generate_line(cols, col_sep: "\t")
        end
      end

      FileUtils.cp(tmp_file.path, public_path)
      File.chmod(0644, public_path)
    ensure
      tmp_file.unlink
    end
  end

  private
  def generate_info_field(gene)
    evidence_item_count = gene.variants.where(deprecated: false)
      .flat_map { |v| v.molecular_profiles.where(deprecated: false) }
      .flat_map { |mp| mp.evidence_items.where.not(status: "rejected").count }
      .sum

    assertion_count = gene.variants.where(deprecated: false)
      .flat_map { |v| v.molecular_profiles.where(deprecated: false) }
      .flat_map { |mp| mp.assertions.where.not(status: "rejected").count }
      .sum

    mp_count = gene.variants.where(deprecated: false)
      .flat_map { |v| v.molecular_profiles.where(deprecated: false).count }
      .sum

    item_pluralized = "item".pluralize(evidence_item_count)
    mp_pluralized = "profile".pluralize(mp_count)

    info_string = "#{evidence_item_count} evidence #{item_pluralized} across #{mp_count} molecular #{mp_pluralized}"
    if assertion_count > 0
      assertion_pluralized = "assertion".pluralize(assertion_count)
      "#{assertion_count} clinical #{assertion_pluralized} and #{info_string}"
    else
      info_string
    end
  end

  def genes_to_process
    Enumerator.new do |e|
      feature_query.find_each do |feature|
        gene = feature.feature_instance
        if gene.uniprot_ids.blank?
          sleep 0.5
          populate_uniprot(gene)
        end

        if gene.uniprot_ids.present?
          e << gene
        end
      end
    end
  end

  def feature_query
    Feature.joins(variants: { molecular_profiles: [ :evidence_items ] })
          .where(deprecated: false, feature_instance_type: "Features::Gene")
          .where.not(evidence_items: { status: "rejected" })
          .includes(:feature_instance)
          .distinct
  end

  def populate_uniprot(gene)
    resp = MyGeneInfo.get_by_gene_id(gene.id)
    if resp.present?
      data = JSON.parse(resp)
      gene.uniprot_ids = Array(data.dig("uniprot", "Swiss-Prot"))
      gene.save
    end
  end
end

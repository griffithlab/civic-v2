#run after backfill variant coords
require 'net/http'
require 'json'
require 'uri'

def create_exon_coords(variant, relation_name, coordinate_type, exon)
  if variant.send(relation_name).present?
    return
  end

  strand = if exon['strand'] == -1
             'negative'
           else
             'positive'
           end

  transcript_name = if coordinate_type =~ /Five Prime/
                      :representative_transcript
                    else
                      :representative_transcript2
                    end

  coord = ExonCoordinate.where(
    chromosome: exon['seq_region_name'],
    exon: exon['rank'],
    strand: strand,
    start: exon['start'],
    stop: exon['end'],
    ensembl_id: exon['id'],
    ensembl_version: variant.ensembl_version,
    representative_transcript: variant.send(transcript_name),
    reference_build: variant.reference_build,
    coordinate_type: coordinate_type,
    variant_id: variant.id
  ).first_or_create

  rel = "#{relation_name}="
  variant.send(rel, coord)
rescue => e
  binding.pry
end

fusion_variants = VariantType.where(name: 'transcript_fusion').first.variants.where(deprecated: false).all
missense_variants = VariantType.where(name: ['missense_variant', 'deletion', 'insertion', 'transcript_regulatory_region_fusion']).flat_map do |vt|
  vt.variants.where(deprecated: false).all
end

#fusions = fusion_variants - missense_variants
fusions = Array(Variant.find(503))
suspected_mps = fusion_variants.to_a.intersection(missense_variants)

suspected_mps_report = File.open("fusions_that_are_mps.tsv", 'w')
suspected_mps_report.puts [
  "id",
  "current_name",
  "link"
].join("\t")

suspected_mps.each do |f|
  suspected_mps_report.puts [
    f.id,
    f.name,
    "https://civicdb.org#{f.link}"
  ].join("\t")
end

matched_coordinates_report = File.open("matched_coordinates.tsv", 'w')
matched_coordinates_report.puts [
  "id",
  "current_name",
  "link",
  "five_prime_end_exon",
  "three_prime_start_exon"
].join("\t")

puts("Fusion count: #{fusions.size}")
@cache = {}

unmatched_coordinates_report = File.open("fusions.tsv", "w")

header = [
  "id",
  "current_name",
  "link",
  "error",
  "warning"
]

unmatched_coordinates_report.puts header.join("\t")

def call_api(url)
  if @cache.has_key?(url)
    @cache[url]
  else
    resp = Scrapers::Util.make_get_request(url)
    data = JSON.parse(resp)
    @cache[url] = data
  end
end

#hgnc symbol?
# def get_ensembl_id(gene_symbol)
#   key =  "#{gene_symbol}:ensembl_id"
#   url ="https://grch37.rest.ensembl.org/xrefs/symbol/human/#{gene_symbol}?object_type=gene;content-type=application/json"
#   data = call_api(url, key)
#   ensembl_candidates = data.select { |gene| gene["id"] =~ /^ENSG/ }
#   if ensembl_candidates.size > 1
#     binding.irb
#     raise StandardError.new("More than one match found for #{gene_symbol}")
#   elsif ensembl_candidates.size == 0
#     raise StandardError.new("No matches found for #{gene_symbol}")
#   end
#
#   ensembl_candidates.first['id']
# end

# def get_exons_for_region(region)
#   key = "#{region}::exons"
#   url = "https://grch37.rest.ensembl.org/overlap/region/human/#{region}?feature=exon;content-type=application/json" 
#   data = call_api(url, key)
#   data.sort_by { |exon| exon['start'] }
# end

#exon vs cds?
def get_exons_for_ensembl_id(ensembl_id, variant, warning = nil)
  t = ensembl_id.split('.').first
  url = "https://grch37.rest.ensembl.org/overlap/id/#{ensembl_id}?content-type=application/json;feature=exon"
  begin
    data = call_api(url)
  rescue StandardError => e
    error_message = JSON.parse(e.message)['error']
    if error_message == "No object found for ID #{ensembl_id}"
      t = ensembl_id.split('.').first
      (data, err, warning) = get_exons_for_ensembl_id(t, variant, "Transcript ID Version not found in GRCh37: #{ensembl_id}")
      if err
        return [nil, err, warning]
      end
    elsif error_message == "ID '#{ensembl_id}' not found"
      return [nil, "Transcript doesnt exist in GRCh37 at any version: #{ensembl_id}", warning]
    else
      binding.irb
      return [nil, nil, warning]
    end
  end
  [data.sort_by { |exon| exon['start'] }, nil, warning]
end

#returns [val, err, warning]
def get_fusion_exon(transcript, position, position_type, variant)
  (exons, err, warning) = get_exons_for_ensembl_id(transcript, variant)

  if exons.nil?
    return [nil, err, warning]
  end
  t = transcript.split('.').first
  e = exons.select{ |e| e['Parent'] == t && e[position_type] == position }

  if e.size > 1
    return [nil, "More than one exon match found", warning]
  elsif e.size == 0
    return [nil, "No exon matches found.", warning]
  end

  [e.first, nil, warning]
end

def port_variant_to_fusion(variant)
  feature_name, possible_exons = variant.name.split(" ")
  five_prime_gene_name, three_prime_gene_name = feature_name.split("::")
  if five_prime_gene_name == 'v'
    five_prime_partner_status = 'multiple'
    five_prime_gene_id = nil
  elsif five_prime_gene_name == '?'
    five_prime_partner_status = 'unknown'
    five_prime_gene_id = nil
  else
    five_prime_partner_status = 'known'
    five_prime_gene_id = Features::Gene.find_by(name: five_prime_gene_name)&.id
    if five_prime_gene_id.nil?
      return [nil, nil]
    end
  end
  if three_prime_gene_name == 'v'
    three_prime_partner_status = 'multiple'
    three_prime_gene_id = nil
  elsif three_prime_gene_name == '?'
    three_prime_partner_status = 'unknown'
    three_prime_gene_id = nil
  else
    three_prime_partner_status = 'known'
    three_prime_gene_id = Features::Gene.find_by(name: three_prime_gene_name)&.id
    if three_prime_gene_id.nil?
      return [nil, nil]
    end
  end

  feature = nil
  existing_feature_instance = Features::Fusion
    .find_by(
      five_prime_gene_id: five_prime_gene_id,
      three_prime_gene_id: three_prime_gene_id,
      five_prime_partner_status: five_prime_partner_status,
      three_prime_partner_status: three_prime_partner_status,
    )

  if existing_feature_instance.present?
    feature = existing_feature_instance.feature
  else
    variant_creation_activity = variant.creation_activity
    if variant_creation_activity.nil?
      originating_user = User.find(Constants::CIVICBOT_USER_ID)
      organization_id = nil
    else
      originating_user = variant_creation_activity.user
      organization_id = variant_creation_activity.organization_id
      #TODO - handle users with multiple orgs and variant_creation_activity org id being nil
    end
    cmd = Activities::CreateFusionFeature.new(
      five_prime_gene_id: five_prime_gene_id,
      three_prime_gene_id: three_prime_gene_id,
      five_prime_partner_status: five_prime_partner_status,
      three_prime_partner_status: three_prime_partner_status,
      originating_user: originating_user,
      organization_id: organization_id,
      create_variant: false,
    )
    res = cmd.perform

    if res.succeeded?
        feature = res.feature
        #not sure if this is necessary - this would put the creation date at the time of the variant creation
        if variant_creation_activity.present?
          a = feature.creation_activity
          a.created_at = variant_creation_activity.created_at
          a.save!
          a.events.each do |e|
            e.created_at = variant_creation_activity.created_at
            e.save!
          end
        end
    else
      binding.irb
    end
  end

  variant.type = "Variants::FusionVariant"
  variant.feature_id = feature.id
  if possible_exons.nil?
    variant.name = 'Fusion'
  else
    regex = Regexp.new(/^e(?<five_prime_exon>\d+)-e(?<three_prime_exon>\d+)$/)
    if match = possible_exons.match(regex)
      binding.irb
      variant.name = "e.#{match[:five_prime_exon]}-e.#{match[:three_prime_exon]}"
      #TODO - create matching exon and variant coordinate entries
    else
      #TODO - create a file to investigate what these should be named
      variant.name = possible_exons
    end
  end
  variant.save(validate: false)

  [five_prime_partner_status, three_prime_partner_status]
end

def update_variant_coordinates(variant, five_prime_partner_status, three_prime_partner_status)
  if five_prime_partner_status == 'known'
    five_prime_coordinate = variant.variant_coordinates.first
    five_prime_coordinate.coordinate_type = "Five Prime Fusion Coordinate"
    five_prime_coordinate.save
    if three_prime_partner_status == 'known'
      coord = VariantCoordinate.where(
        variant: variant,
        reference_build: variant.reference_build,
        coordinate_type: "Three Prime Fusion Coordinate",
        chromosome: variant.chromosome2,
        start: variant.start2,
        stop: variant.stop2,
        representative_transcript: variant.representative_transcript2,
        ensembl_version: variant.ensembl_version
      ).first_or_create
    end
  elsif three_prime_partner_status == 'known'
    three_prime_coordinate = variant.variant_coordinates.first
    three_prime_coordinate.coordinate_type = "Three Prime Fusion Coordinate"
    three_prime_coordinate.chromosome =  variant.chromosome2
    three_prime_coordinate.start = variant.start2
    three_prime_coordinate.stop = variant.stop2
    three_prime_coordinate.representative_transcript = variant.representative_transcript2
    three_prime_coordinate.save
  end
end

begin
  fusions.each do |variant|
    row = [
      variant.id,
      variant.name,
      "https://civicdb.org#{variant.link}"
    ]
    five_prime_stop_exon = nil
    five_prime_start_exon = nil
    three_prime_stop_exon = nil
    three_prime_start_exon = nil

    sleep 0.1
    if variant.representative_transcript.blank? && variant.representative_transcript2.blank?
      row << "No Coordinates"
      pending_revisions = variant.revisions
        .where(
          status: 'new',
          field_name: ["chromosome", "start", "stop", "representative_transcript", "chromosome2" "start2", "stop2", "representative_transcript2"]
        ).any?
      if pending_revisions
        row << "Has Pending Coordinate Revisions"
      end

      unmatched_coordinates_report.puts row.join("\t")
      if variant.name.include?("::")
        (five_prime_partner_status, three_prime_partner_status) = port_variant_to_fusion(variant)
        if five_prime_partner_status.nil? && three_prime_partner_status.nil?
          #TODO: capture these in a file
          next
        end
        update_variant_coordinates(variant, five_prime_partner_status, three_prime_partner_status)
        #TODO set vicc compatible name?
      end
      next
    end

    if variant.representative_transcript.blank?
      row << "Transcript 2 present, but not Transcript 1"
      row << "Possible 3' specified, 5' unknown/multiple?"
      unmatched_coordinates_report.puts row.join("\t")
      next
    else
      (five_prime_exons, err, warning) = get_exons_for_ensembl_id(variant.representative_transcript, variant)
      five_prime_strand = five_prime_exons&.first&.fetch('strand')
      if five_prime_strand.nil?
        row << err
        row << warning
        unmatched_coordinates_report.puts row.join("\t")
        next
      end


      if five_prime_strand == '-1'
        #<--transcript direction<----
        #stop exon-e-e-e-start_exon
        #stop_exon_start_position nnnnnnnn stop_exon_end_position-e-e-e-start_exon_start_position nnnn start_exon_end_position
        #the civic stop position is for the start exon end position
        (five_prime_start_exon, err, warn) = get_fusion_exon(variant.representative_transcript, variant.stop, 'end', variant)
        if err || warn
          row << err
          row << warn
          unmatched_coordinates_report.puts row.join("\t")
          next
        end
        #the civic start position is for the stop exon start position
        (five_prime_stop_exon, err2, warn2) = get_fusion_exon(variant.representative_transcript, variant.start, 'start', variant)
        if err2 || warn2
          row << err2
          row << warn2
          unmatched_coordinates_report.puts row.join("\t")
          next
        end
      else
        #-->transcript direction---->
        #start_exon-e-e-e-stop_exon
        #start_exon_start_position nnnnnnnn start_exon_end_position-e-e-e-stop_exon_start_position nnnn stop_exon_end_position
        #the civic start2 position is for the start exon start position
        (five_prime_start_exon, err, warn) = get_fusion_exon(variant.representative_transcript, variant.start, 'start', variant)
        if err || warn
          row << err
          row << warn
          unmatched_coordinates_report.puts row.join("\t")
          next
        end
        #the civic stop2 position is for the stop exon end position
        (five_prime_stop_exon, err2, warn2) = get_fusion_exon(variant.representative_transcript, variant.stop, 'end', variant)
        if err2 || warn2
          row << err2
          row << warn2
          unmatched_coordinates_report.puts row.join("\t")
          next
        end
      end
    end

    if variant.representative_transcript2.blank?
      row << "Transcript 1 present, but not Transcript 2"
      row << "Possible 5' specified, 3' unknown/multiple?"
      unmatched_coordinates_report.puts row.join("\t")
      next
    else
      (three_prime_exons, err, warning) = get_exons_for_ensembl_id(variant.representative_transcript2, variant)
      three_prime_strand = three_prime_exons&.first&.fetch('strand')
      if three_prime_strand.nil?
        row << err
        row << warning
        unmatched_coordinates_report.puts row.join("\t")
        next
      end

      if three_prime_strand == '-1'
        #<--transcript direction<----
        #stop exon-e-e-e-start_exon
        #stop_exon_start_position nnnnnnnn stop_exon_end_position-e-e-e-start_exon_start_position nnnn start_exon_end_position
        #the civic stop2 position is for the start exon end position
        (three_prime_start_exon, err, warn) = get_fusion_exon(variant.representative_transcript2, variant.stop2, 'end', variant)
        if err || warn
          row << err
          row << warn
          unmatched_coordinates_report.puts row.join("\t")
          next
        end
        #the civic start2 position is for the stop exon start position
        (three_prime_stop_exon, err2, warn2) = get_fusion_exon(variant.representative_transcript2, variant.start2, 'start', variant)
        if err2 || warn2
          row << err2
          row << warn2
          unmatched_coordinates_report.puts row.join("\t")
          next
        end
      else
        #-->transcript direction---->
        #start_exon-e-e-e-stop_exon
        #start_exon_start_position nnnnnnnn start_exon_end_position-e-e-e-stop_exon_start_position nnnn stop_exon_end_position
        #the civic start2 position is for the start exon start position
        (three_prime_start_exon, err, warn) = get_fusion_exon(variant.representative_transcript2, variant.start2, 'start', variant)
        if err || warn
          row << err
          row << warn
          unmatched_coordinates_report.puts row.join("\t")
          next
        end
        #the civic stop2 position is for the stop exon end position
        (three_prime_stop_exon, err2, warn2) = get_fusion_exon(variant.representative_transcript2, variant.stop2, 'end', variant)
        if err2 || warn2
          row << err2
          row << warn2
          unmatched_coordinates_report.puts row.join("\t")
          next
        end
      end
    end

    if variant.type == "Variants::GeneVariant"
      (five_prime_partner_status, three_prime_partner_status) = port_variant_to_fusion(variant)
      if five_prime_partner_status.nil? && three_prime_partner_status.nil?
        #TODO: capture these in a file
        next
      end
    end

    #reload doesn't seem to work after changing variant type so this hard-refetches the variant
    variant = Variant.find(variant.id)

    update_variant_coordinates(variant, five_prime_partner_status, three_prime_partner_status)

    if five_prime_start_exon
      create_exon_coords(variant, :five_prime_start_exon_coordinates, 'Five Prime Start Exon Coordinate', five_prime_start_exon)
    end
    if five_prime_stop_exon
      create_exon_coords(variant, :five_prime_end_exon_coordinates, 'Five Prime End Exon Coordinate', five_prime_stop_exon)
    end
    if three_prime_start_exon
      create_exon_coords(variant, :three_prime_start_exon_coordinates, 'Three Prime Start Exon Coordinate', three_prime_start_exon)
    end
    if three_prime_stop_exon
      create_exon_coords(variant, :three_prime_end_exon_coordinates, 'Three Prime End Exon Coordinate', three_prime_stop_exon)
    end
    variant.vicc_compliant_name = variant.generate_vicc_name

    begin
      variant.save!
    rescue StandardError => e
      binding.irb
    end

    row << five_prime_stop_exon['rank']
    row << three_prime_start_exon['rank']
    matched_coordinates_report.puts row.join("\t")
  end
rescue StandardError => e
  binding.irb
ensure
  unmatched_coordinates_report.close
  matched_coordinates_report.close
  suspected_mps_report.close
end

class HgvsDescription < ActiveRecord::Base
  has_and_belongs_to_many :variants

  def display_name
    description
  end

  def self.my_gene_info_hgvs(variant)
    hgvs(variant, "my_gene_info")
  end

  def self.allele_registry_hgvs(variant)
    hgvs(variant, "allele_registry")
  end

  def self.hgvs(variant, type)
    valid_for_query = variant.type == "Variants::GeneVariant" && [
      variant.coordinates.chromosome.nil?,
      variant.coordinates.start.nil?,
    ].none?

    coordinates = variant.coordinates

    if valid_for_query
      start = coordinates.start
      ref = coordinates.reference_bases
      alt = coordinates.variant_bases
      stop = coordinates.stop
      if type == "my_gene_info"
        if coordinates.reference_build == "GRCh38"
          coords = get_build_37_coords(variant)
          return unless coords
          start = coords["coordinates"].first["start"]
          ref = coords["coordinates"].first["referenceAllele"]
          alt = coords["coordinates"].first["allele"]
          stop = coords["coordinates"].first["end"]
          start = convert_zero_to_one_based(start, ref, alt)
          chromosome = "chr#{coordinates.chromosome}"
        elsif coordinates.reference_build == "GRCh37"
          chromosome = "chr#{coordinates.chromosome}"
        end
      elsif type == "allele_registry"
        if coordinates.reference_build == "GRCh38"
          chromosome = refseq_sequence_b38(coordinates.chromosome)
        elsif coordinates.reference_build == "GRCh37"
          chromosome = refseq_sequence_b37(coordinates.chromosome)
        else
          return
        end
      end
      base_hgvs = "#{chromosome}:g.#{start}"
      case variant_type(coordinates)
      when :deletion
        if ref.size > 1
          "#{base_hgvs}_#{stop}del"
        else
          "#{base_hgvs}del"
        end
      when :substitution
        "#{base_hgvs}#{ref}>#{alt}"
      when :insertion
        "#{base_hgvs}_#{stop.to_i}ins#{alt}"
      when :indel
        if ref.size > 1
          "#{base_hgvs}_#{stop}delins#{alt}"
        else
          "#{base_hgvs}delins#{alt}"
        end
      else
        nil
      end
    else
      nil
    end
  end

  def self.variant_type(coordinates)
    if coordinates.reference_bases.blank? && coordinates.variant_bases.blank?
      nil
    elsif coordinates.reference_bases.present? && coordinates.variant_bases.blank?
      :deletion
    elsif coordinates.reference_bases.blank? && coordinates.variant_bases.present?
      :insertion
    elsif coordinates.reference_bases.size == 1 && coordinates.variant_bases.size == 1
      :substitution
    elsif coordinates.reference_bases.size >= 1 && coordinates.variant_bases.size >= 1
      :indel
    else
      nil
    end
  end

  def self.get_build_37_coords(variant)
    resp = make_request(variant)
    coords = resp["genomicAlleles"]

    if coords
      coords.select { |coords| coords["referenceGenome"] == "GRCh37" }.first
    else
      nil
    end
  end

  def self.make_request(variant)
    res = Scrapers::Util.make_get_request(make_allele_registry_url(variant))
    JSON.parse(res)
  rescue StandardError
    {}
  end

  def self.make_allele_registry_url(variant)
    "https://reg.genome.network/allele/#{variant.allele_registry_id}"
  end

  def self.convert_zero_to_one_based(start, ref, alt)
    if ref.size == alt.size # SNV
      start.to_i + 1
    elsif ref.size > alt.size # DEL
      start.to_i + 1
    else # INS
      start
    end
  end

  def self.refseq_sequence_b38(chromosome)
    sequences = {
      "1" => "NC_000001.11",
      "2" => "NC_000002.12",
      "3" => "NC_000003.12",
      "4" => "NC_000004.12",
      "5" => "NC_000005.10",
      "6" => "NC_000006.12",
      "7" => "NC_000007.14",
      "8" => "NC_000008.11",
      "9" => "NC_000009.12",
      "10" => "NC_000010.11",
      "11" => "NC_000011.10",
      "12" => "NC_000012.12",
      "13" => "NC_000013.11",
      "14" => "NC_000014.9",
      "15" => "NC_000015.10",
      "16" => "NC_000016.10",
      "17" => "NC_000017.11",
      "18" => "NC_000018.10",
      "19" => "NC_000019.10",
      "20" => "NC_000020.11",
      "21" => "NC_000021.9",
      "22" => "NC_000022.11",
      "X" => "NC_000023.11",
      "Y" => "NC_000024.10",
    }
    sequences[chromosome]
  end

  def self.refseq_sequence_b37(chromosome)
    sequences = {
      "1" =>  "NC_000001.10",
      "2" =>  "NC_000002.11",
      "3" =>  "NC_000003.11",
      "4" =>  "NC_000004.11",
      "5" =>  "NC_000005.9",
      "6" =>  "NC_000006.11",
      "7" =>  "NC_000007.13",
      "8" =>  "NC_000008.10",
      "9" =>  "NC_000009.11",
      "10" => "NC_000010.10",
      "11" => "NC_000011.9",
      "12" => "NC_000012.11",
      "13" => "NC_000013.10",
      "14" => "NC_000014.8",
      "15" => "NC_000015.9",
      "16" => "NC_000016.9",
      "17" => "NC_000017.10",
      "18" => "NC_000018.9",
      "19" => "NC_000019.9",
      "20" => "NC_000020.10",
      "21" => "NC_000021.8",
      "22" => "NC_000022.10",
      "X" =>  "NC_000023.10",
      "Y" =>  "NC_000024.9",
    }
    sequences[chromosome]
  end
end

class GenerateOpenCravatLink < ApplicationJob
  def perform(variant)
    return if variant.allele_registry_id.nil? || variant.allele_registry_id == "unregistered"

    coords = get_build_38_coords(variant)

    return unless coords

    open_cravat_url = make_open_cravat_url(coords)

    variant.open_cravat_url = open_cravat_url
    variant.save!
  end


  private
  def get_build_38_coords(variant)
    resp = make_request(variant)
    coords = resp["genomicAlleles"]

    if coords
      coords.select { |coords| coords["referenceGenome"] == "GRCh38" }.first
    else
      nil
    end
  end

  def make_request(variant)
    res = Scrapers::Util.make_get_request(make_allele_registry_url(variant))
    JSON.parse(res)
  rescue StandardError
    {}
  end

  def make_allele_registry_url(variant)
    "https://reg.genome.network/allele/#{variant.allele_registry_id}"
  end

  def make_open_cravat_url(coords)
    base_url = "https://run.opencravat.org/webapps/variantreport/index.html?"

    start = coords["coordinates"].first["start"]
    ref = coords["coordinates"].first["referenceAllele"]
    alt = coords["coordinates"].first["allele"]

    new_start = convert_zero_to_one_based(start, ref, alt)

    if ref.blank?
      ref = "-"
    end

    if alt.blank?
      alt = "-"
    end

    query_params = {
      chrom: "chr#{coords["chromosome"]}",
      pos: new_start,
      ref_base: ref,
      alt_base: alt,
    }.to_query

    base_url + query_params
  end

  # https://www.biostars.org/p/84686/
  def convert_zero_to_one_based(start, ref, alt)
    if ref.size == alt.size # SNV
      start.to_i + 1
    elsif ref.size > alt.size # DEL
      start.to_i + 1
    else # INS
      start
    end
  end
end

class GenerateOpenCravatLink < ApplicationJob
  def perform(variant)
    return if variant.allele_registry_id.nil? || variant.allele_registry_id == 'unregistered'

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
    #TODO how do we want to handle potentially multiple coordinates, this returns an array
    query_params = {
      chrom: "chr#{coords["chromosome"]}",
      pos: coords["coordinates"].first["start"],
      ref_base: coords["coordinates"].first["referenceAllele"],
      alt_base: coords["coordinates"].first["allele"],
    }.to_query

    base_url + query_params
  end
end

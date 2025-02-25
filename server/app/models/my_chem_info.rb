class MyChemInfo
  attr_reader :therapy

  def initialize(therapy)
    @therapy = therapy
  end

  def response
    Rails.cache.fetch(cache_key(therapy), expires_in: 24.hours) do
      if therapy.ncit_id.present?
        resp = make_request(therapy)
        parse_response(resp)
      else
        nil
      end
    end
    rescue StandardError
      nil
  end


  def parse_response(resp)
    p = JSON.parse(resp)
    if p["hits"] && p["hits"].size > 1
      return nil # it was ambiguous somehow, shouldn't happen with a NCIT
    end

    if p["hits"] && p["hits"].size == 1
      data = p["hits"][0]

      return {
        'chebi_id': data.dig("chebi", "id"),
        'chebi_definition': data.dig("chebi", "definition"),
        'fda_epc_codes': handle_fda_codes(data.dig("drugcentral", "pharmacology_class", "fda_epc")),
        'fda_moa_codes': handle_fda_codes(data.dig("drugcentral", "pharmacology_class", "fda_moa")),
        'first_approval': data.dig("chembl", "first_approval"),
        'chembl_molecule_type': data.dig("chembl", "molecule_type"),
        'chembl_id': data.dig("chembl", "molecule_chembl_id"),
        'pubchem_cid': data.dig("pubchem", "cid"),
        'pharmgkb_id': data.dig("pharmgkb", "id"),
        'rxnorm': (data.dig("pharmgkb", "xrefs") || {})["rxnorm"],
        'inchikey': data.dig("unii", "inchikey"),
        'drugbank_id': data.dig("drugbank", "id"),
        'indications': (data.dig("chembl", "drug_indications") || []).map { |i| i["mesh_heading"] }
      }
    end

    nil
  end

  def handle_fda_codes(data)
    if data.is_a?(Hash)
      [ data ]
    else
      Array(data)
    end
  end

  def fields
    [
      "chebi.id",
      "chebi.definition",
      "drugcentral.pharmacology_class.fda_epc",
      "drugcentral.pharmacology_class.fda_moa",
      "chembl.drug_mechanisms",
      "chembl.drug_indications.mesh_heading",
      "chembl.first_approval",
      "chembl.molecule_type",
      "chembl.molecule_chembl_id",
      "pubchem.cid",
      "pharmgkb.id",
      "unii.inchikey",
      "drugbank.id",
      "pharmgkb.xrefs.rxnorm"

    ]
  end

  def make_request(therapy)
    query_fields = fields.join(",")
    url="https://mychem.info/v1/query?q=unii.ncit:\"#{therapy.ncit_id}\"&fields=#{query_fields}"
    Scrapers::Util.make_get_request(url)
  end

  def cache_key(therapy)
    "my_chem_info#{therapy.id}_#{therapy.updated_at}"
  end

  def process_mondo_def(p)
    if md = p["hits"][0].dig("mondo", "definition")
      md.gsub(/\[(.+)\]/, "").strip
    else
      nil
    end
  end

  def process_do_def(string)
    if match = string.match(/"(.+)" *\[(.+)\]/)
      def_text, urls = match.captures
      processed_urls = urls.split(",").map(&:strip).map { |x| x.split(":", 2)[1].gsub("\\", "") } rescue []
      [ def_text, processed_urls ]
    else
      [ string, [] ]
    end
  end
end

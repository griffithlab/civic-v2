module AdvancedSearches
  class MyChemInfo < AdvancedSearches::Base
    def base_query
      ::MyChemInfo
    end

    def resolve_search_fields(node)
      [
        resolve_chebi_definition_filter(node),
        resolve_chebi_id_filter(node),
        resolve_chembl_id_filter(node),
        resolve_chembl_molecule_type_filter(node),
        resolve_drug_bank_id_filter(node),
        resolve_first_approval_filter(node),
        resolve_inchikey_filter(node),
        resolve_pharmgkb_id_filter(node),
        resolve_pubchem_cid_filter(node),
        resolve_rxnorm_filter(node),
        resolve_fda_epc_codes_filter(node),
        resolve_fda_moa_codes_filter(node)
      ]
    end

    def resolve_chebi_definition_filter(node)
      return nil if node.chebi_definition.nil?
      clause, value = node.chebi_definition.resolve_query_for_type("my_chem_infos.chebi_definition")
      base_query.where(clause, value)
    end

    def resolve_chebi_id_filter(node)
      return nil if node.chebi_id.nil?
      clause, value = node.chebi_id.resolve_query_for_type("my_chem_infos.chebi_id")
      base_query.where(clause, value)
    end

    def resolve_chembl_id_filter(node)
      return nil if node.chembl_id.nil?
      clause, value = node.chembl_id.resolve_query_for_type("my_chem_infos.chembl_id")
      base_query.where(clause, value)
    end

    def resolve_chembl_molecule_type_filter(node)
      return nil if node.chembl_molecule_type.nil?
      clause, value = node.chembl_molecule_type.resolve_query_for_type("my_chem_infos.chembl_molecule_type")
      base_query.where(clause, value)
    end

    def resolve_drug_bank_id_filter(node)
      return nil if node.drug_bank_id.nil?
      clause, value = node.drug_bank_id.resolve_query_for_type("my_chem_infos.drug_bank_id")
      base_query.where(clause, value)
    end

    def resolve_first_approval_filter(node)
      return nil if node.first_approval.nil?
      clause, value = node.first_approval.resolve_query_for_type("my_chem_infos.first_approval")
      base_query.where(clause, value)
    end

    def resolve_inchikey_filter(node)
      return nil if node.inchikey.nil?
      clause, value = node.inchikey.resolve_query_for_type("my_chem_infos.inchikey")
      base_query.where(clause, value)
    end

    def resolve_pharmgkb_id_filter(node)
      return nil if node.pharmgkb_id.nil?
      clause, value = node.pharmgkb_id.resolve_query_for_type("my_chem_infos.pharmgkb_id")
      base_query.where(clause, value)
    end

    def resolve_pubchem_cid_filter(node)
      return nil if node.pubchem_cid.nil?
      clause, value = node.pubchem_cid.resolve_query_for_type("my_chem_infos.pubchem_cid")
      base_query.where(clause, value)
    end

    def resolve_rxnorm_filter(node)
      return nil if node.rxnorm.nil?
      clause, value = node.rxnorm.resolve_query_for_type("my_chem_infos.rxnorm")
      base_query.where(clause, value)
    end

    def resolve_fda_epc_codes_filter(node)
      return nil if node.fda_epc_codes.nil?
      chem_info_code = ::AdvancedSearches::FDACode.new(query: node.fda_epc_codes).results
      fda_codes = ::EvidenceItem.joins(:fda_epc_codes).where(fda_epc_codes: {id: chem_info_code}).select(:id)

      base_query.where(id: fda_codes)
    end

    def resolve_fda_moa_codes_filter(node)
      return nil if node.fda_moa_codes.nil?
      chem_info_code = ::AdvancedSearches::FDACode.new(query: node.fda_epc_codes).results
      fda_codes = ::EvidenceItem.joins(:fda_moa_codes).where(fda_moa_codes: {id: chem_info_code}).select(:id)

      base_query.where(id: fda_codes)
    end
  end
end

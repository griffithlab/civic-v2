module Types
    module AdvancedSearch
        class MyChemInfoSearchFilterType < Types::BaseInputObject
            argument :sub_filters, [ Types::AdvancedSearch::MyChemInfoSearchFilterType ], required: false
            argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
            argument :chebi_definition, Types::AdvancedSearch::StringSearchInput, required: false
            argument :chebi_id, Types::AdvancedSearch::StringSearchInput, required: false
            argument :chembl_id, Types::AdvancedSearch::StringSearchInput, required: false
            argument :chembl_molecule_type, Types::AdvancedSearch::StringSearchInput, required: false
            argument :drug_bank_id, Types::AdvancedSearch::StringSearchInput, required: false
            # argument :fda_epc_codes, Types::AdvancedSearch::FDACodeSearchFilterType, required: false
            # argument :fda_moa_codes, Types::AdvancedSearch::FDACodeSearchFilterType, required: false
            argument :first_approval, Types::AdvancedSearch::DateSearchInput, required: false
            argument :inchikey, Types::AdvancedSearch::StringSearchInput, required: false
            argument :pharmgkb_id, Types::AdvancedSearch::StringSearchInput, required: false
            argument :pubchem_cid, Types::AdvancedSearch::StringSearchInput, required: false
            argument :rxnorm, Types::AdvancedSearch::StringSearchInput, required: false
        end
    end
end
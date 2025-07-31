module Types
    module AdvancedSearch
        class MyDiseaseInfoSearchFilterType < Types::BaseInputObject
            argument :sub_filters, [ Types::AdvancedSearch::MyDiseaseInfoSearchFilterType ], required: false
            argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
            argument :disease_ontology_exact_synonyms, Types::AdvancedSearch::StringSearchInput, required: false
            argument :disease_ontology_related_synonyms, Types::AdvancedSearch::StringSearchInput, required: false
            argument :do_def, Types::AdvancedSearch::StringSearchInput, required: false
            argument :do_def_citations, Types::AdvancedSearch::StringSearchInput, required: false
            argument :icd10, Types::AdvancedSearch::StringSearchInput, required: false
            argument :icdo, Types::AdvancedSearch::StringSearchInput, required: false
            argument :mesh, Types::AdvancedSearch::StringSearchInput, required: false
            argument :mono_def, Types::AdvancedSearch::StringSearchInput, required: false
            argument :mono_id, Types::AdvancedSearch::StringSearchInput, required: false
            argument :ncit, Types::AdvancedSearch::StringSearchInput, required: false
            argument :omim, Types::AdvancedSearch::StringSearchInput, required: false
        end
    end
end
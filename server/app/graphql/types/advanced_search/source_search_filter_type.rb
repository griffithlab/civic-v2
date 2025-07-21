module Types
    module AdvancedSearch
        class SourceSearchFilterType < Types::BaseInputObject
            argument :id, Types::AdvancedSearch::IntSearchInput, required: false
            argument :abstract, Types::AdvancedSearch::StringSearchInput, required: false
            # argument :source_type, Types::AdvancedSearch::EnumSearchInput.for(Types::SourceSourceType), required: false
            # Source type gives an invalid input syntax error, not sure how to fix it:
            # "PG::InvalidTextRepresentation: ERROR:  invalid input syntax for type integer: \"ASCO\"\nCONTEXT:  unnamed portal parameter $1 = '...'\n",
            argument :journal, Types::AdvancedSearch::StringSearchInput, required: false
            argument :citation, Types::AdvancedSearch::StringSearchInput, required: false
            argument :publication_date, Types::AdvancedSearch::DateSearchInput, required: false
            argument :sub_filters, [ Types::AdvancedSearch::SourceSearchFilterType ], required: false
            argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
        end
    end
end

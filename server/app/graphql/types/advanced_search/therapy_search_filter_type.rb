module Types
  module AdvancedSearch
    class TherapySearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::TherapySearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :deprecated, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :name, Types::AdvancedSearch::StringSearchInput, required: false
      argument :ncit_id, Types::AdvancedSearch::OntologyTermSearchInput, required: false
      argument :therapy_aliases, Types::AdvancedSearch::StringSearchInput, required: false
      argument :has_assertion, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :assertion, Types::AdvancedSearch::AssertionSearchFilterType, required: false
      argument :has_evidence_item, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :evidence_items, Types::AdvancedSearch::EvidenceItemSearchFilterType, required: false
    end
  end
end

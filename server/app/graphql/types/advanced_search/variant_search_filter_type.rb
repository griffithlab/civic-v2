module Types
  module AdvancedSearch
    class VariantSearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::VariantSearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :comment, Types::AdvancedSearch::CommentSearchFilterType, required: false
      argument :is_deprecated, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :deprecation_reason, Types::AdvancedSearch::EnumSearchInput.for(Types::VariantDeprecationReasonType, is_activerecord_enum: true), required: false
      argument :feature, Types::AdvancedSearch::FeatureSearchFilterType, required: false
      argument :flagged, Types::AdvancedSearch::BooleanSearchInput, required: false
      argument :id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :molecular_profile, Types::AdvancedSearch::MolecularProfileSearchFilterType, required: false
      argument :name, Types::AdvancedSearch::StringSearchInput, required: false
      argument :open_revision_count, Types::AdvancedSearch::IntSearchInput, required: false
      argument :single_variant_molecular_profile, Types::AdvancedSearch::MolecularProfileSearchFilterType, required: false
      argument :variant_alias, Types::AdvancedSearch::StringSearchInput, required: false
      argument :variant_type, Types::AdvancedSearch::VariantTypeSearchFilterType, required: false
    end
  end
end

module Types
  module AdvancedSearch
    class RevisionSearchFilterType < Types::BaseInputObject
      argument :sub_filters, [ Types::AdvancedSearch::RevisionSearchFilterType ], required: false
      argument :boolean_operator, Types::AdvancedSearch::BooleanOperator, required: false
      argument :created_at, Types::AdvancedSearch::DateSearchInput, required: false
      argument :subject_type, Types::AdvancedSearch::EnumSearchInput.for(Types::Revisions::ModeratedEntitiesType), required: false
      argument :subject_id, Types::AdvancedSearch::IntSearchInput, required: false
      argument :status, Types::AdvancedSearch::EnumSearchInput.for(Types::Revisions::RevisionStatus), required: false
      argument :field_name, Types::AdvancedSearch::StringSearchInput, required: false
      argument :creating_user, Types::AdvancedSearch::UserSearchFilterType, required: false
      argument :moderating_user, Types::AdvancedSearch::UserSearchFilterType, required: false
    end
  end
end

module Types::Internal
  class SpecificationAssessmentGroupType < Types::BaseObject
    field :name, String, null: false
    field :description, String, null: false
    field :specification_criteria, [ Types::Entities::SpecificationCriterionType ], null: false
  end
end

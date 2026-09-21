module Types::Internal
  class SpecificationAssessmentGroupType < Types::BaseObject
    field :name, String, null: false
    field :description, String, null: false
    field :specification_criterium, [ Types::Entities::SpecificationCriteriumType ], null: false
  end
end

module Types::Entities
  class AssessmentGroupType < Types::BaseObject
    field :group, String, null: false
    field :description, String, null: false
  end
end

module Types
  class ClinicalSignificanceCountsType < Types::BaseObject
    field :type, AssertionTypeType, null: false
    field :direction, AssertionDirectionType, null: false
    field :significance, AssertionSignificanceType, null: false
    field :disease, Types::Entities::DiseaseType, null: true
    field :therapies, [ Types::Entities::TherapyType ], null: true
    field :therapy_interaction_type, TherapyInteractionType, null: true
    field :assertions, [ Types::Entities::AssertionType ], null: false
    field :count, Int, null: false
  end
end

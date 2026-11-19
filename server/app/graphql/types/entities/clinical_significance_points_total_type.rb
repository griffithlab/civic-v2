module Types::Entities
  class ClinicalSignificancePointsTotalType < Types::BaseObject
    field :points, Integer, null: false
    field :clinical_significance, Types::AssertionSignificanceType, null: false
  end
end

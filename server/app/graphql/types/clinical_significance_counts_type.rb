module Types
  class ClinicalSignificanceCountsType < Types::BaseObject
    field :type, AssertionTypeType, null: false
    field :direction, AssertionDirectionType, null: false
    field :significance, AssertionSignificanceType, null: false
    field :assertions, [ Types::Entities::AssertionType ], null: false
    field :count, Int, null: false
  end
end

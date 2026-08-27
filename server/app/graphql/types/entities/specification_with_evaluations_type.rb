module Types::Entities
  class SpecificationWithEvaluationsType < Types::BaseObject
    field :specification, Types::Entities::SpecificationType, null: false
    field :evaluations, [ Types::Entities::SpecificationEvaluationType ], null: false
  end
end

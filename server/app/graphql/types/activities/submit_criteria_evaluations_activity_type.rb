module Types::Activities
  class SubmitCriteriaEvaluationsActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :specification_evaluations, [ Types::Entities::SpecificationEvaluationType ], null: false
    field :specification, Types::Entities::SpecificationType, null: false

    def specification_evaluations
      Loaders::AssociationLoader.for(SubmitCriteriaEvaluationsActivity, :linked_specification_evaluations).load(object)
    end

    def specification
      Loaders::AssociationLoader.for(SubmitCriteriaEvaluationsActivity, :linked_specification).load(object)
    end
  end
end

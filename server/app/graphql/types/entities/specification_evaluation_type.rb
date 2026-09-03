module Types::Entities
  class SpecificationEvaluationStatus < Types::BaseEnum
    value "MET", value: "met"
    value "NOT_MET", value: "not_met"
    value "NOT_EVALUATED", value: "not_evaluated"
  end

  class SpecificationEvaluationType < Types::BaseObject
    field :id, Int, null: false
    field :justification, String, null: true
    field :modifier, String, null: true
    field :code, String, null: false
    field :evaluation, SpecificationEvaluationStatus, null: false
    field :assertion, Types::Entities::AssertionType, null: false
    field :specification_criterium, Types::Entities::SpecificationCriteriumType, null: false
    field :evidence_items, [ Types::Entities::EvidenceItemType ], null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: true

    def code
      specification_criterium.then do |sc|
        sc.criterium
      end
    end

    def assertion
      Loaders::AssociationLoader.for(SpecificationEvaluation, :assertion).load(object)
    end

    def specification_criterium
      Loaders::AssociationLoader.for(SpecificationEvaluation, :specification_criterium).load(object)
    end

    def evidence_items
      Loaders::AssociationLoader.for(SpecificationEvaluation, :evidence_items).load(object)
    end
  end
end

module Types::Entities
  class SpecificationCriteriumType < Types::BaseObject
    field :id, Int, null: false
    field :criterium, String, null: false
    field :description, String, null: false
    field :exclusive, Boolean, null: false
    field :point_value, Int, null: true
    field :modifiers, [ String ], null: false
    field :mutually_exclusive_codes, [ String ], null: false
    field :specification, Types::Entities::SpecificationType, null: false
    field :assessment_group, String, null: true
    field :order_within_assessment_group, Int, null: false

    def exclusive
      object.specification.specification_type == "clingen_codes" && object.criterium == "N/A"
    end

    def specification
      Loaders::AssociationLoader.for(SpecificationCriterium, :specification).load(object)
    end

    def modifiers
      object.modifiers.keys
    end
  end
end

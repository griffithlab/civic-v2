module Types::Entities
  class SpecificationCriterionModifierType < Types::BaseObject
    field :modifier, String, null: false
    field :adjustment, Int, null: false
  end

  class SpecificationCriterionType < Types::BaseObject
    field :id, Int, null: false
    field :criterion, String, null: false
    field :description, String, null: false
    field :exclusive, Boolean, null: false
    field :point_value, Int, null: true
    field :modifiers, [ Types::Entities::SpecificationCriterionModifierType ], null: false
    field :mutually_exclusive_codes, [ String ], null: false
    field :specification, Types::Entities::SpecificationType, null: false
    field :assessment_group, String, null: true
    field :position_within_assessment_group, Int, null: false

    def exclusive
      object.specification.specification_type == "clingen_codes" && object.criterion == "N/A"
    end

    def specification
      Loaders::AssociationLoader.for(SpecificationCriterion, :specification).load(object)
    end

    def modifiers
      object.modifiers.map do |modifier, adjustment|
        {
          modifier: modifier,
          adjustment: adjustment,
        }
      end
    end
  end
end

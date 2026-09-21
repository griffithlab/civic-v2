module Types::Internal
  class SpecificationFormConfigType < Types::BaseObject
    field :specification, Types::Entities::SpecificationType, null: false
    field :assessment_groups, [ Types::Internal::SpecificationAssessmentGroupType ], null: false

    def specification
      object
    end

    def assessment_groups
      object.assessment_group_order.map do |group_name|
        {
          name: group_name,
          description: object.assessment_groups[group_name],
          specification_criterium: criteria_for_group(group_name),
        }
      end
    end

    def criteria_for_group(group_name)
      object.specification_criterium.where(assessment_group: group_name)
        .order("position_within_assessment_group ASC")
        .all
    end
  end
end

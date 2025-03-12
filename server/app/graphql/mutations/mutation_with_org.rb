module Mutations
  class MutationWithOrg < Mutations::BaseMutation
    argument :organization_id, Int, required: false,
      description: <<~DOC.strip
        The ID of the organization to credit the user's contributions to.
        If the user belongs to a single organization or no organizations, this field is not required.
        This field is required if the user belongs to more than one organization.
        The user must belong to the organization provided.
      DOC

    def validate_user_org(organization_id)
      if organization_id.present? && !Organization.where(id: organization_id).exists?
        raise GraphQL::ExecutionError, "Organization with id #{organization_id} doesn't exist."
      elsif organization_id.nil? && context[:current_user].organization_ids.size > 1
        raise GraphQL::ExecutionError, "User #{context[:current_user].id} belongs to multiple orgs but none specified."
      end
    end

    def validate_user_acting_as_org(user:, organization_id:)
      if !user.can_act_for_org?(organization_id: organization_id)
        raise GraphQL::ExecutionError, "User cannot perform actions on behalf of organization ##{organization_id}"
      end
    end

    def validate_user_endorsing_as_org(user:, organization_id:)
      if !user.can_endorse_for_org?(organization_id: organization_id)
        raise GraphQL::ExecutionError, "User cannot manage endorsements on behalf of organization ##{organization_id}"
      end
    end
  end
end

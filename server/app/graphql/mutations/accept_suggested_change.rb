class Mutations::AcceptSuggestedChange < Mutations::MutationWithOrg
  argument :id, Int, required: true

  field :suggested_change, Types::SuggestedChanges::SuggestedChangeType, null: false

  attr_reader :suggested_change

  def ready?(organization_id: nil, id:)
    validate_user_logged_in
    validate_user_org(organization_id)
    suggested_change = V2SuggestedChange.find_by(id: id)
    if suggested_change.nil?
      raise GraphQL::ExecutionError, "Suggested Change with id #{id} doesn't exist."
    elsif suggested_change.status != 'new'
      raise GraphQL::ExecutionError, "Suggested Change with id #{id} is already #{suggested_change.status}."
    end
    @suggested_change = suggested_change
    return true
  end

  def authorized?(organization_id: nil, id:, **_)
    current_user = context[:current_user]
    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    if !Role.user_is_at_least_a?(current_user, :editor)
      raise GraphQL::ExecutionError, 'User must be an editor in order to reject this change.'
    elsif !current_user.has_valid_coi_statement?
      raise GraphQL::ExecutionError, 'User must have a valid conflict of interest statement on file.'
    elsif suggested_change.suggesting_user == current_user
      raise GraphQL::ExecutionError, 'User may not accept their own suggested change.'
    else
      return true
    end
  end

  def resolve(organization_id: nil, **_)
    cmd = Actions::AcceptSuggestedChange.new(
      suggested_change: suggested_change,
      accepting_user: context[:current_user],
      organization_id: organization_id
    )

    res = cmd.perform

    if res.succeeded?
      {
        suggested_change: res.suggested_change
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end

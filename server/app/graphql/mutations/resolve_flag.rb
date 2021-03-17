class Mutations::ResolveFlag < Mutations::MutationWithOrg
  argument :id, Int, required: true
  argument :comment, String, required: true, validates: { length: { minimum: 10 } }

  field :flag, Types::Entities::FlagType, null: true

  attr_reader :flag

  def ready?(organization_id: nil, id:, **_)
    validate_user_logged_in
    validate_user_org(organization_id)

    flag = Flag.find_by(id: id)
    if flag.nil?
      raise GraphQL::ExecutionError, "Flag with id #{id} doesn't exist."
    elsif flag.state != 'open'
      raise GraphQL::ExecutionError, "Flag with id #{id} is already #{flag.state}."
    end

    @flag = flag
    return true
  end

  def authorized?(organization_id: nil, **_)
    current_user = context[:current_user]
    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    if flag.flagging_user == current_user
      return true
    elsif !Role.user_is_at_least_a?(current_user, :editor)
      raise GraphQL::ExecutionError, 'User must be an editor to resolve this flag.'
    elsif !current_user.has_valid_coi_statement?
      raise GraphQL::ExecutionError, 'User must have a valid conflict of interest statement on file.'
    else
      return true
    end
  end

  def resolve(organization_id: nil, comment:,  **_)
    cmd = Actions::ResolveFlag.new(
      flag: flag,
      resolving_user: context[:current_user],
      organization_id: organization_id,
      comment: comment
    )

    res = cmd.perform

    if res.succeeded?
      {
        flag: res.flag,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end

class Mutations::AcceptRevision < Mutations::MutationWithOrg
  argument :id, Int, required: true
  argument :comment, String, required: false, validates: {length: { minimum: 10 } }

  field :revision, Types::Revisions::RevisionType, null: false
  field :superseded_revisions, [Types::Revisions::RevisionType], null: false

  attr_reader :revision

  def ready?(organization_id: nil, id:, **_)
    validate_user_logged_in
    validate_user_org(organization_id)
    revision = Revision.find_by(id: id)
    if revision.nil?
      raise GraphQL::ExecutionError, "Revision with id #{id} doesn't exist."
    elsif revision.status != 'new'
      raise GraphQL::ExecutionError, "Revision with id #{id} is already #{revision.status}."
    end
    @revision = revision
    return true
  end

  def authorized?(organization_id: nil, id:, **_)
    current_user = context[:current_user]
    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    if !Role.user_is_at_least_a?(current_user, :editor)
      raise GraphQL::ExecutionError, 'User must be an editor in order to reject this revision.'
    elsif !current_user.has_valid_coi_statement?
      raise GraphQL::ExecutionError, 'User must have a valid conflict of interest statement on file.'
    elsif revision.suggesting_user == current_user
      raise GraphQL::ExecutionError, 'User may not accept their own suggested revision.'
    else
      return true
    end
  end

  def resolve(organization_id: nil, comment: nil, **_)
    cmd = Actions::AcceptRevision.new(
      revision: revision,
      accepting_user: context[:current_user],
      organization_id: organization_id,
      comment: comment
    )

    res = cmd.perform

    if res.succeeded?
      {
        revision: res.revision,
        superseded_revisions: res.superseded_revisions
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end

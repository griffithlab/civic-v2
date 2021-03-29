class Mutations::RejectRevision < Mutations::MutationWithOrg
  description 'Reject a revision by ID. Any user may reject a Revision that they submitted themselves. Otherwise, the rejecting user must be an editor with valid conflict of interest statement on file.'

  argument :id, Int, required: true,
    description: 'The ID of the Revision to reject.'
  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: 'Text explaining the reasoning for rejecting this Revision. Will be attached as a comment.'

  field :revision, Types::Revisions::RevisionType, null: false,
    description: 'The rejected Revision.'

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

    if revision.suggesting_user == current_user
      return true
    elsif !Role.user_is_at_least_a?(current_user, :editor)
      raise GraphQL::ExecutionError, 'User must be an editor in order to reject this revision.'
    elsif !current_user.has_valid_coi_statement?
      raise GraphQL::ExecutionError, 'User must have a valid conflict of interest statement on file.'
    else
      return true
    end
  end

  def resolve(organization_id: nil, comment:,  **_)
    cmd = Actions::RejectRevision.new(
      revision: revision,
      rejecting_user: context[:current_user],
      organization_id: organization_id,
      comment: comment
    )

    res = cmd.perform

    if res.succeeded?
      {
        revision: res.revision
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end

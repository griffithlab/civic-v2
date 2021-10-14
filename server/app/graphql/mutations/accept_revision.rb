class Mutations::AcceptRevision < Mutations::MutationWithOrg
  description 'Accept a revision by ID. The accepting user must be an editor with a valid conflict of interest statement on file and the revision must not be their own.'

  argument :id, Int, required: true,
    description: 'The ID of the Revision to accept.'

  argument :comment, String, required: false,
    validates: {length: { minimum: 10 } },
    description: 'Body of an optional comment to attach to the revision on acceptance.'

  field :revision, Types::Revisions::RevisionType, null: false,
    description: 'The newly accepted Revision.'

  field :superseded_revisions, [Types::Revisions::RevisionType], null: false,
    description: 'A list of any revisions that were superseded by the acceptance of this one.'

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
    elsif revision.revisor == current_user
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

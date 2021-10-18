class Mutations::RejectRevisions < Mutations::MutationWithOrg
  description 'Reject one or more revisions by ID or revision set ID. Any user may reject a Revision that they submitted themselves. Otherwise, the rejecting user must be an editor with valid conflict of interest statement on file.'

  argument :ids, [Int], required: false,
    description: 'A list of IDs of the Revisions to reject.'

  argument :revision_set_id, ID, required: false,
    description: 'The ID of a revision set.'

  validates required: {
    one_of: [:ids, :revision_set_id],
    message: "Must specify either a list of revision ids or a revisions_set_id, but not both."
  }

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: 'Text explaining the reasoning for rejecting this Revision. Will be attached as a comment.'

  field :revisions, [Types::Revisions::RevisionType], null: false,
    description: 'The rejected Revisions.'

  attr_reader :revisions

  def ready?(organization_id: nil, ids: nil, revision_set_id: nil, **_)
    validate_user_logged_in
    validate_user_org(organization_id)

    if !ids.nil?
      @revisions = ids.map do |id|
        revision = Revision.find_by(id: id)
        if revision.nil?
          raise GraphQL::ExecutionError, "Revision with id #{id} doesn't exist."
        elsif revision.status != 'new'
          raise GraphQL::ExecutionError, "Revision with id #{id} is already #{revision.status}."
        end
        revision
      end
    elsif !revision_set_id.nil?
      @revisions = Revision.where(revisionset_id: revision_set_id, status: 'new')
      if revisions.count == 0
        raise GraphQL::ExecutionError, "Revisions with status 'new' in revision_set_id #{revision_set_id} don't exist."
      else
      end

      return true
    end
  end

  def authorized?(organization_id: nil, **_)
    current_user = context[:current_user]
    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    permissions = revisions.map do |revision|
      if revision.revisor == current_user
        true
      elsif !Role.user_is_at_least_a?(current_user, :editor)
        raise GraphQL::ExecutionError, 'User must be an editor in order to reject this revision.'
      elsif !current_user.has_valid_coi_statement?
        raise GraphQL::ExecutionError, 'User must have a valid conflict of interest statement on file.'
      else
        true
      end
    end
    return permissions.all?
  end

  def resolve(organization_id: nil, comment:,  **_)
    cmd = Actions::RejectRevisions.new(
      revisions: revisions,
      rejecting_user: context[:current_user],
      organization_id: organization_id,
      comment: comment
    )

    res = cmd.perform

    if res.succeeded?
      {
        revisions: res.revisions
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end

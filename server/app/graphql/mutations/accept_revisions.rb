class Mutations::AcceptRevisions < Mutations::MutationWithOrg
  description "Accept multiple revisions by ID. The accepting user must be an editor with a valid conflict of interest statement on file and the revisions must not be their own. The revisions must be for the same subject. The revisions may not conflict, i.e. be for the same field."

  argument :ids, [ Int ], required: false,
    description: "A list of IDs of the Revisions to accept."

  argument :revision_set_id, Int, required: false,
    description: "The ID of a revision set."

  validates required: {
    one_of: [ :ids, :revision_set_id ],
    message: "Must specify either a list of revision ids or a revisions_set_id, but not both."
  }

  argument :comment, String, required: false,
    validates: { length: { minimum: 10 } },
    description: "Body of an optional comment to attach to the revision on acceptance."

  field :revisions, [ Types::Revisions::RevisionType ], null: false,
    description: "A list of  newly accepted Revisions."

  field :superseded_revisions, [ Types::Revisions::RevisionType ], null: false,
    description: "A list of any revisions that were superseded by the acceptance of this one."

  attr_reader :revisions

  def ready?(organization_id: nil, ids: nil, revision_set_id: nil, **_)
    validate_user_logged_in
    validate_user_org(organization_id)

    if !ids.nil?
      @revisions = ids.map do |id|
        revision = Revision.find_by(id: id)
        if revision.nil?
          raise GraphQL::ExecutionError, "Revision with id #{id} doesn't exist."
        elsif revision.status != "new"
          raise GraphQL::ExecutionError, "Revision with id #{id} is already #{revision.status}."
        end
        revision
      end
    elsif !revision_set_id.nil?
      @revisions = Revision.where(revision_set_id: revision_set_id)
      if revisions.count == 0
        raise GraphQL::ExecutionError, "Revisions with revision_set_id #{revision_set_id} don't exist."
      else
        revisions.each do |revision|
          if revision.status != "new"
            raise GraphQL::ExecutionError, "Revision with id #{revision.id} from revision set #{revision_set_id} is already #{revision.status}."
          end
        end
      end
    end

    subjects = revisions.map(&:subject).uniq
    if subjects.size > 1
      raise GraphQL::ExecutionError, "Revisions span multiple subjects"
    end

    revisions.group_by { |r| r.field_name }.each do |field_name, rs|
      if rs.size > 1
        raise GraphQL::ExecutionError, "Multiple revisions with the same field_name #{field_name}: #{rs.map(&:id).join(', ')}"
      end
    end
    true
  end

  def authorized?(organization_id: nil, **_)
    current_user = context[:current_user]
    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    if revisions.first.subject.respond_to?(:submitter)
      user_editing_their_own_submission = [
        revisions.first.subject&.submitter == current_user,
        revisions.first.subject&.status == "submitted"
      ].all?

      if user_editing_their_own_submission
        return true
      end
    end

    if !Role.user_is_at_least_a?(current_user, :editor)
      raise GraphQL::ExecutionError, "User must be an editor in order to reject this revision."
    elsif !current_user.has_valid_coi_statement?
      raise GraphQL::ExecutionError, "User must have a valid conflict of interest statement on file."
    else
      revisions.each do |revision|
        if revision.revisor == current_user
          raise GraphQL::ExecutionError, "User may not accept their own suggested revision."
        end
      end
    end

    true
  end

  def resolve(organization_id: nil, comment: nil, **_)
    cmd = Activities::AcceptRevisions.new(
      revisions: revisions,
      accepting_user: context[:current_user],
      organization_id: organization_id,
      note: comment
    )

    res = cmd.perform

    if res.succeeded?
      {
        revisions: res.revisions,
        superseded_revisions: res.superseded_revisions
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end

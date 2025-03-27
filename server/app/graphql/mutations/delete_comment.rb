class Mutations::DeleteComment < Mutations::MutationWithOrg
  description "Mark a comment as deleted. You can only delete your own comments."

  argument :comment_id, Int, required: true,
    description: "The ID of the comment to delete."

  field :comment, Types::Entities::CommentType, null: true,
    description: "The deleted comment."

  attr_reader :comment

  def ready?(organization_id: nil, comment_id:)
    validate_user_logged_in
    validate_user_org(organization_id)

    @comment = Comment.find_by(id: comment_id)

    if @comment.blank?
      raise GraphQL::ExecutionError, "Comment with id #{comment_id} doesn't exist."
    end

    if @comment.deleted?
      raise GraphQL::ExecutionError, "Comment with id #{comment_id} has already been deleted."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    current_user = context[:current_user]

    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    unless current_user == comment.user
      raise GraphQL::ExecutionError, "You may only delete your own comments."
    end

    return true
  end

  def resolve(organization_id: nil, **kwargs)
    cmd = Activities::DeleteComment.new(
      comment: comment,
      originating_user: context[:current_user],
      organization_id: organization_id
    )

    res = cmd.perform

    if res.succeeded?
      {
        comment: res.comment,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end

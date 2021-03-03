class Mutations::AddComment < Mutations::MutationWithOrg
  argument :title, String, required: false
  argument :body, String, required: true, validates: { length: { minimum: 10 } }
  argument :subject, Types::Commentable::CommentableInput, required: true

  field :comment, Types::Entities::CommentType, null: true

  def ready?(organization_id: nil, subject:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    if subject.nil?
      raise GraphQL::ExecutionError, "Subject with the given ID doesn't exist"
    end
    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(title: nil, body:, subject:, organization_id: nil)
    res = Comment.add(
      title,
      body,
      context[:current_user],
      subject,
      organization_id
    )
    if res.succeeded?
      {
        comment: res.comment,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end

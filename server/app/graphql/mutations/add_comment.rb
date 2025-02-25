class Mutations::AddComment < Mutations::MutationWithOrg
  description "Add a comment to any commentable entity."

  argument :title, String, required: false,
    description: "Optional title for the comment."

  argument :body, String, required: true,
    validates: { length: { minimum: 10 } },
    description: "Text of the comment."

  argument :subject, Types::Commentable::CommentableInput, required: true,
    description: "The commentable to attach the comment to. Specified by ID and Type."

  field :comment, Types::Entities::CommentType, null: true,
    description: "The newly created comment."

  def ready?(organization_id: nil, subject:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    if subject.nil?
      raise GraphQL::ExecutionError, "Subject with the given ID doesn't exist"
    end
    true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    true
  end

  def resolve(title: nil, body:, subject:, organization_id: nil)
    cmd = Activities::AddComment.new(
      title: title,
      body: body,
      originating_user: context[:current_user],
      subject: subject,
      organization_id: organization_id
    )

    res = cmd.perform

    if res.succeeded?
      {
        comment: res.comment
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end

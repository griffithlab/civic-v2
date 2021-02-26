class Mutations::AddComment < Mutations::BaseMutation
  argument :title, String, required: false
  argument :body, String, required: true
  argument :subject, Types::Commentable::CommentableInput, required: true
  argument :organization_id, Int, required: false

  field :comment, Types::Entities::CommentType, null: true

  def authorized?(organization_id: nil, **kwargs)
    if context[:current_user].nil?
      raise GraphQL::ExecutionError, 'You must be logged in to perform that action.'
    elsif ! PolicyHelpers.can_act_for_org?( user: context[:current_user], organization_id: organization_id)
      raise GraphQL::ExecutionError, "User cannot comment on behalf of organization ##{organization_id}" 
    else
      return true
    end
  end

  def resolve(title: nil, body:, subject:, organization_id: nil)
    if subject.present?
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
    else
      raise GraphQL::ExecutionError, 'Subject not found.'
    end
  end
end
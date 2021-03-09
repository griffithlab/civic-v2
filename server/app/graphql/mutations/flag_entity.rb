class Mutations::FlagEntity < Mutations::MutationWithOrg
  argument :subject, Types::Flaggable::FlaggableInput, required: true
  argument :comment, String, required: true, validates: { length: { minimum: 10 } }

  field :flag, Types::Entities::FlagType, null: true

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

  def resolve(subject:, organization_id: nil, comment:)
    cmd = Actions::FlagEntity.new(
      flagging_user: context[:current_user],
      flaggable: subject,
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

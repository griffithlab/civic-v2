class Mutations::ModerateAssertion < Mutations::MutationWithOrg
  description "Perform moderation actions on an assertion such as accepting, rejecting, or reverting."

  argument :assertion_id, Int, required: true,
    description: "ID of the Assertion to moderate"

  argument :new_status, Types::EvidenceStatusType, required: true,
    description: "The desired status of the Assertion"

  argument :comment, String, required: false,
    description: "Comment explaining the moderation action. Required when rejecting."

  field :assertion, Types::Entities::AssertionType, null: false,
    description: "The moderated Assertion"

  attr_reader :assertion

  def ready?(organization_id: nil, assertion_id:, new_status:, comment: nil)
    validate_user_logged_in
    validate_user_org(organization_id)

    @assertion = Assertion.find_by(id: assertion_id)
    if @assertion.blank?
      raise GraphQL::ExecutionError, "Assertion with id #{assertion_id} doesn't exist."
    end

    if @assertion.status == new_status
      raise GraphQL::ExecutionError, "Assertion already has status #{new_status}."
    end

    if (new_status == "rejected" || new_status == "submitted") && comment.blank?
      raise GraphQL::ExecutionError, "A comment is required when rejecting or reverting an Assertion."
    end

    if new_status == "accepted" && comment.present?
      raise GraphQL::ExecutionError, "Do not supply a comment when accepting an Assertion."
    end

    return true
  end

  def authorized?(organization_id: nil, new_status:,  **_)
    current_user = context[:current_user]

    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    # users may reject their own assertions
    if new_status == "rejected" && assertion.submitter == current_user
      return true
    end

    if new_status == "accepted" && assertion.submitter == current_user
      raise GraphQL::ExecutionError, "Users may not accept their own submitted Assertions."
    end

    if !Role.user_is_at_least_a?(current_user, :editor)
      raise GraphQL::ExecutionError, "User must be an editor in order to moderate Assertions."
    end

    return true
  end

  def resolve(organization_id: nil, new_status:, comment: nil, **_)
    cmd = Activities::ModerateAssertion.new(
      assertion: assertion,
      originating_user: context[:current_user],
      organization_id: organization_id,
      new_status: new_status,
      note: comment
    )

    res = cmd.perform

    if res.succeeded?
      {
        assertion: assertion,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end

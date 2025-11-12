class Mutations::ApproveAssertion < Mutations::MutationWithOrg
  description "Approve an Assertion on behalf of an Organization"

  argument :assertion_id, Int, required: true,
    description: "ID of the Assertion to moderate"

  field :assertion, Types::Entities::AssertionType, null: false,
    description: "The approved Assertion"

  attr_reader :assertion

  def ready?(organization_id: nil, assertion_id:)
    validate_user_logged_in
    validate_user_org(organization_id)

    @assertion = Assertion.find_by(id: assertion_id)
    if @assertion.blank?
      raise GraphQL::ExecutionError, "Assertion with id #{assertion_id} doesn't exist."
    end
    if @assertion.status != "accepted"
      raise GraphQL::ExecutionError, "Assertion #{assertion_id} has not been accepted."
    end
    if @assertion.flagged
      raise GraphQL::ExecutionError, "Assertion #{assertion_id} is flagged."
    end

    existing_approval = Approval.where(
      status: "active",
      assertion: assertion,
      organization_id: organization_id
    ).first

    if existing_approval
      raise GraphQL::ExecutionError, "Assertion with id #{assertion_id} has already been approved on behalf of this organization by #{existing_approval.user.display_name}."
    end

    return true
  end

  def authorized?(organization_id: nil, **_)
    validate_user_approving_as_org(user: context[:current_user],  organization_id: organization_id)
    return true
  end

  def resolve(organization_id: nil, **_)
    cmd = Activities::ApproveAssertion.new(
      assertion: assertion,
      originating_user: context[:current_user],
      organization_id: organization_id,
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

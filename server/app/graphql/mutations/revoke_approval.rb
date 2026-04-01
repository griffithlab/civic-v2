class Mutations::RevokeApproval < Mutations::MutationWithOrg
  description "Revoke an approval of an Assertion on behalf of an Organization"

  argument :assertion_id, Int, required: true,
    description: "ID of the Assertion"

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: "Text describing the reason for revoking this Approval."

  field :assertion, Types::Entities::AssertionType, null: false,
    description: "The newly unapproved Assertion"

  attr_reader :assertion, :existing_approval

  def ready?(organization_id: nil, assertion_id:, **_)
    validate_user_logged_in
    validate_user_org(organization_id)

    @assertion = Assertion.find_by(id: assertion_id)
    if @assertion.blank?
      raise GraphQL::ExecutionError, "Assertion with id #{assertion_id} doesn't exist."
    end

    existing_approvals = Approval.where(
      status: [ "active", "requires_review" ],
      assertion: assertion,
      organization_id: organization_id
    )

    if existing_approvals.size > 1
      raise GraphQL::ExecutionError, "Assertion with id #{assertion_id} has multiple active approvals from this organization."
    elsif existing_approvals.size == 0
      raise GraphQL::ExecutionError, "Assertion with id #{assertion_id} has no active approvals from this organization."
    end

    @existing_approval = existing_approvals.first

    return true
  end

  def authorized?(organization_id: nil, **_)
    validate_user_approving_as_org(user: context[:current_user],  organization_id: organization_id)
    return true
  end

  def resolve(comment:, organization_id: nil, **_)
    cmd = Activities::RevokeApproval.new(
      approval: existing_approval,
      originating_user: context[:current_user],
      organization_id: organization_id,
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

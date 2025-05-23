class Mutations::ModerateEvidenceItem < Mutations::MutationWithOrg
  description "Perform moderation actions on an evidence item such as accepting, rejecting, or reverting."

  argument :evidence_item_id, Int, required: true,
    description: "ID of the Evidence Item to moderate"

  argument :new_status, Types::EvidenceStatusType, required: true,
    description: "The desired status of the Evidence Item"

  field :evidence_item, Types::Entities::EvidenceItemType, null: false,
    description: "The moderated Evidence Item"

  argument :comment, String, required: false,
    description: "Optional comment explaining the moderation action. Required if the new status is 'rejected'."

  attr_reader :evidence_item

  def ready?(organization_id: nil, evidence_item_id:, new_status:, comment: nil)
    validate_user_logged_in
    validate_user_org(organization_id)

    @evidence_item = EvidenceItem.find_by(id: evidence_item_id)
    if @evidence_item.blank?
      raise GraphQL::ExecutionError, "EvidenceItem with id #{evidence_item_id} doesn't exist."
    end

    if @evidence_item.status == new_status
      raise GraphQL::ExecutionError, "EvidenceItem already has status #{new_stats}."
    end

    if (new_status == "rejected" || new_status == "submitted") && comment.blank?
      raise GraphQL::ExecutionError, "A comment is required when rejecting or reverting an Evidence Item."
    end

    if new_status == "accepted" && comment.present?
      raise GraphQL::ExecutionError, "Do not supply a comment when accepting an Evidence Item"
    end

    return true
  end

  def authorized?(organization_id: nil, new_status:,  **_)
    current_user = context[:current_user]

    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    # users may reject their own eids
    if new_status == "rejected" && evidence_item.submitter == current_user
      return true
    end

    if new_status == "accepted" && evidence_item.submitter == current_user
      raise GraphQL::ExecutionError, "Users may not accept their own submitted evidence."
    end

    if !Role.user_is_at_least_a?(current_user, :editor)
      raise GraphQL::ExecutionError, "User must be an editor in order to moderate Evidence."
    end

    return true
  end

  def resolve(organization_id: nil, new_status:, comment: nil, **_)
    cmd = Activities::ModerateEvidenceItem.new(
      evidence_item: evidence_item,
      originating_user: context[:current_user],
      organization_id: organization_id,
      new_status: new_status,
      note: comment
    )

    res = cmd.perform

    if res.succeeded?
      {
        evidence_item: evidence_item,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end

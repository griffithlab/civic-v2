class Approval < ApplicationRecord
  belongs_to :organization
  belongs_to :user
  belongs_to :assertion

  has_many :activities_linked_entities,
    ->() { where(entity_type: "Approval") },
    foreign_key: :entity_id,
    class_name: "ActivityLinkedEntity"
  has_many :activities, through: :activities_linked_entities

  has_one :revocation_activity_link,
    ->() { where(entity_type: "Approval").eager_load(:activity).where("activities.type = 'RevokeApprovalActivity'").order("activities.created_at desc") },
    foreign_key: :entity_id,
    class_name: "ActivityLinkedEntity"
  has_one :revocation_activity, through: :revocation_activity_link, source: :activity

  has_one :approval_activity_link,
    ->() { where(entity_type: "Approval").eager_load(:activity).where("activities.type = 'ApproveAssertionActivity'").order("activities.created_at desc") },
    foreign_key: :entity_id,
    class_name: "ActivityLinkedEntity"
  has_one :approval_activity, through: :approval_activity_link, source: :activity

  enum :status, Constants::APPROVAL_STATUSES

  def ready_for_clinvar_submission?
    return false unless self.status == "active"
    return false unless self.organization.clinvar_api_key.present?
    return false unless self.organization.can_approve?

    existing_batch_entries = ClinvarBatchEntry.where(approval_id: self.id)

    if existing_batch_entries.size == 0
      # no previous submissions, okay to to submit
      return true
    elsif existing_batch_entries.any? { |be| be.approval.last_reviewed == self.last_reviewed && be.status != "error" }
      # we have a batch entry that corresponds to this approval,
      # and it already was succesfully submitted or is pending
      return false
    elsif existing_batch_entries.all? { |be| be.approval_last_reviewed < self.last_reviewed }
      # previous submissions exist (error or success) but the approval has been re-reviewed since then
      # TODO: do we need to validate that anything else has actually changed? or is merely updating the last reviewed timestamp in clinvar fine?
      return true
    else
      # TODO are there any other cases we need to cover?
      return true
    end
  end
end

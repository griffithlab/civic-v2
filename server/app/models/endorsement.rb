class Endorsement < ApplicationRecord
  belongs_to :organization
  belongs_to :user
  belongs_to :assertion

  has_many :activities_linked_entities,
    ->() { where(entity_type: "Endorsement") },
    foreign_key: :entity_id,
    class_name: "ActivityLinkedEntity"
  has_many :activities, through: :activities_linked_entities

  has_one :revocation_activity_link,
    ->() { where(entity_type: "Endorsement").eager_load(:activity).where("activities.type = 'RevokeEndorsementActivity'").order("activities.created_at desc") },
    foreign_key: :entity_id,
    class_name: "ActivityLinkedEntity"
  has_one :revocation_activity, through: :revocation_activity_link, source: :activity

  has_one :endorsement_activity_link,
    ->() { where(entity_type: "Endorsement").eager_load(:activity).where("activities.type = 'EndorseAssertionActivity'").order("activities.created_at desc") },
    foreign_key: :entity_id,
    class_name: "ActivityLinkedEntity"
  has_one :endorsement_activity, through: :endorsement_activity_link, source: :activity

  enum :status, Constants::ENDORSEMENT_STATUSES

  def ready_for_clinvar_submission?
    return false unless self.status == "active"

    api_key = ClinvarApiKey.where(organization_id: self.organization_id, active: true).first
    return false unless api_key

    existing_batch_entry = ClinvarBatchEntry.joins(:clinvar_batch_submission).where(
      clinvar_batch_submissions: { clinvar_api_key_id: api_key.id },
      asssertion_id: self.assertion_id
    ).exists?
    if existing_batch_entry
      return  false
    end

    true
  end
end

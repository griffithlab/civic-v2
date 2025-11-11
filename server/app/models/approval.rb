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
end

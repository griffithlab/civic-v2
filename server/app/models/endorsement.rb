class Endorsement < ApplicationRecord
  belongs_to :organization
  belongs_to :user
  belongs_to :assertion

  has_many :endorsement_logs
  has_many :activities_linked_entities,
    ->() { where(entity_type: "Endorsement") },
    foreign_key: :entity_id,
    class_name: "ActivityLinkedEntity"
  has_many :activities, through: :activities_linked_entities

  enum :status, Constants::ENDORSEMENT_STATUSES
end

class Endorsement < ApplicationRecord
  belongs_to :organization
  belongs_to :user
  belongs_to :assertion

  has_many :endorsement_logs

  enum :status, Constants::ENDORSEMENT_STATUSES
end

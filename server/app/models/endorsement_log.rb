class EndorsementLog < ApplicationRecord
  enum :old_status, Constants::ENDORSEMENT_STATUSES, prefix: true
  enum :new_status, Constants::ENDORSEMENT_STATUSES, prefix: true

  belongs_to :endorsement
end

class ClinvarBatchEntry < ApplicationRecord
  belongs_to :clinvar_batch_submission
  belongs_to :assertion

  validates :status, presence: true
end

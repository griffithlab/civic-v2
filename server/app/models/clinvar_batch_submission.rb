class ClinvarBatchSubmission < ApplicationRecord
  belongs_to :clinvar_api_key
  belongs_to :organization
  has_many :clinvar_submission_responses
  has_many :clinvar_batch_entries

  validates :status, presence: true
  validates :submitted_at, presence: true
end

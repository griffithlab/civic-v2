class ClinvarBatchEntry < ApplicationRecord
  belongs_to :clinvar_batch_submission
  belongs_to :assertion

  validates :status, presence: true

  # NOTE: date_last_evaluated will be the last_review_date of the endorsement
  # backing this entry at the time of the submission.
  # From the ClinVar docs: "The date that the classification was last evaluated by the submitter"
end

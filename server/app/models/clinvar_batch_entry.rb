class ClinvarBatchEntry < ApplicationRecord
  belongs_to :clinvar_batch_submission
  belongs_to :assertion
  belongs_to :approval

  validates :status, presence: true

  validates :assertion_id, uniqueness: { scope: :clinvar_batch_submission_id }

  # NOTE: date_last_evaluated will be the last_review_date of the Approval
  # backing this entry at the time of the submission.
  # From the ClinVar docs: "The date that the classification was last evaluated by the submitter"
end

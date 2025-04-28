class ClinvarApiKey < ApplicationRecord
  belongs_to :organization
  has_many :clinvar_batch_submissions

  validates :api_key, presence: true, uniqueness: true
end

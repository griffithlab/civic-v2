class ClinvarAccession < ApplicationRecord
  belongs_to :assertion
  belongs_to :organization

  validates :clinvar_accession, presence: true, uniqueness: true
end

class ClinvarApiKey < ApplicationRecord
  belongs_to :organization
  has_many :clinvar_batch_submissions

  validates :api_key, presence: true, uniqueness: true
  validate :only_one_active_key
  validate :organization_can_endorse

  private
  def only_one_active_key
    possibly_existing_key = ClinvarApiKey.where(organization_id: self.organization_id, active: true)
    if possibly_existing_key.exists? && possibly_existing_key.first != self
      self.errors.add(:active, "Only one API Key may be marked active at once. Please deactivate the currently active key.")
    end
  end

  def organization_can_endorse
    if !self.organization.can_endorse?
      self.errors.add(:organization, "API Keys can only be supplied for organizations with endorsement abilities.")
    end
  end
end

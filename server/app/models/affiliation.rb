class Affiliation < ActiveRecord::Base
  belongs_to :organization
  belongs_to :user

  validate :organization_can_endorse

  def organization_can_endorse
    if self.can_endorse? && !self.organization.can_endorse?
      self.errors.add(:can_endorse, "cannot be set because #{self.organization.name} is not permitted to endorse.")
    end
  end
end

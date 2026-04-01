class Affiliation < ActiveRecord::Base
  belongs_to :organization
  belongs_to :user

  validate :organization_can_approve

  def organization_can_approve
    if self.can_approve? && !self.organization.can_approve?
      self.errors.add(:can_approve, "cannot be set because #{self.organization.name} is not permitted to approve.")
    end
  end
end

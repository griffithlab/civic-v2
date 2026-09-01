class SpecificationCriterium < ApplicationRecord
  belongs_to :specification

  validate :assessment_group_is_valid

  private
  def assessment_group_is_valid
  return if self.specification.assessment_groups.empty?

  valid_groups = self.specification.assessment_groups.keys
    unless valid_groups.include?(self.assessment_group)
      self.errors.add(:assessment_group, "Assessment Group: #{self.assessment_group} not included in #{valid_groups.join(", ")}")
    end
  end
end

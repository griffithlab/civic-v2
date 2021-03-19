class Revision < ApplicationRecord
  include Commentable
  include Subscribable

  belongs_to :subject, polymorphic: true
  #TODO - validate field name is allowed for  subject object

  validates :status, inclusion: {
    in: ['accepted', 'rejected', 'superseded', 'new'],
    message: "%{value} is not a valid revision status"
  },
  allow_blank: false

  validate :both_current_and_suggested_cannot_be_null
  validate :values_must_be_different

  def revisor
    originator_events
      .where(action: 'revision suggested')
      .first
      .originating_user
  end

  def both_current_and_suggested_cannot_be_null
    if self.current_value.nil? && self.suggested_value.blank?
      self.errors.add(:suggested_value, "Both suggested and current value may not be null.")
    end
  end

  def values_must_be_different
    err_string = "Suggested value cannot equal the current value."
    if self.current_value == self.suggested_value
      self.errors.add(:suggested_value, err_string)
    elsif self.current_value.is_a?(Array)
      if self.current_value.sort == self.suggested_value.sort
        self.errors.add(:suggested_value, err_string)
      end
    end
  end
end

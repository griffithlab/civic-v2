class Revision < ApplicationRecord
  include Commentable
  include Subscribable
  include WithTimepointCounts

  belongs_to :subject, polymorphic: true
  #TODO: will we want a mixin someday?
  has_many :events, as: :originating_object
  has_many :comment_mentions, foreign_key: :comment_id, class_name: 'EntityMention'

  has_one :creation_event,
    ->() { where(action: 'revision suggested') },
    as: :originating_object,
    class_name: 'Event'

  has_one :resolving_event,
    ->() { where("events.action = 'revision rejected' OR events.action = 'revision accepted' OR events.action = 'revision superseded'") },
    as: :originating_object,
    class_name: 'Event'

  validates :status, inclusion: {
    in: ['accepted', 'rejected', 'superseded', 'new'],
    message: "%{value} is not a valid revision status"
  },
  allow_blank: false

  validate :both_current_and_suggested_cannot_be_null
  validate :values_must_be_different

  searchkick highlight: [:id], callbacks: :async

  def revisor
    creation_event.originating_user
  end

  def resolver
    resolving_event&.originating_user
  end

  def search_data
    {
      id: name
    }
  end

  def name
    "RID#{self.id}"
  end

  def link
    "/#{Constants::DB_TYPE_TO_PATH_SEGMENT[self.subject_type]}/#{self.subject_id}/revisions"
  end

  def self.timepoint_query
    ->(x) {
      Event.where(action: 'revision accepted')
        .where('created_at >= ?', x)
    }
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

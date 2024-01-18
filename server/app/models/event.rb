class Event < ActiveRecord::Base
  belongs_to :subject, polymorphic: true
  belongs_to :originating_user, foreign_key: :originating_user_id, class_name: 'User'
  belongs_to :organization, required: false
  belongs_to :originating_object, polymorphic: true

  has_many  :notifications

  belongs_to :activity

  validates :originating_object, :originating_user, :subject, :action, { presence: true }
  validate :subject_is_subscribable

  before_create :capture_user_role

  after_commit :queue_feed_updates, on: [:create]
  after_commit :update_most_recent_org, on: [:create]

  #TODO actions as an enum rather than freetext

  def capture_user_role
    self.user_role = self.originating_user.role
  end

  private
  def subject_is_subscribable
    unless subject.is_a?(Subscribable)
      errors.add(:subject, 'Subject must be a Subscribable object')
    end
  end

  def queue_feed_updates
    NotifySubscribers.perform_later(self)
  end

  def update_most_recent_org
    if self.organization_id
      self.originating_user.most_recent_organization_id = self.organization_id
      self.originating_user.save!
    end
  end
end

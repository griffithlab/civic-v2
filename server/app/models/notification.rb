class Notification < ActiveRecord::Base
  self.inheritance_column = :_unused
  belongs_to :notified_user, class_name: 'User'
  belongs_to :originating_user, class_name: 'User'
  belongs_to :event
  belongs_to :subscription

  enum type: [:subscribed_event, :mention]

  def self.unread_count_for_user(user)
    where(notified_user: user, seen: false).count
  end

  def self.unread_count_for_user_by_type(user)
    counts = Notification.types.keys.each_with_object({}) { |k, h| h[k.pluralize] = 0 }
    where(notified_user: user, seen: false)
      .group(:type)
      .count.each_with_object(counts) do |(k, count), h|
        h[k.pluralize] = count
      end
  end

  def acknowledge!
    self.seen = true
    self.save
  end
end
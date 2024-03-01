class Subscription < ActiveRecord::Base
  validates_presence_of :user

  belongs_to :user
  belongs_to :subscribable, polymorphic: true

  has_many :notifications, dependent: :destroy

  def send_notification(event)
    raise 'Implement in subclass!'
  end
end

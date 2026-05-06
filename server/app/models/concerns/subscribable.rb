module Subscribable
  extend ActiveSupport::Concern

  included do
    has_many :subscriptions, as: :subscribable
    has_many :events, as: :subject
    # TODO make a final decision on delete strategy
    # after_save :sweep_unlinkable_events_for_soft_delete
    # before_destroy :sweep_unlinkable_events_for_hard_delete
  end

  def subscribe_user(user, subscription_type: OnSiteSubscription, subscribe_to_children: false)
    subscribables = EventHierarchy.self_with_direct_relations(self)
    if subscribe_to_children
      subscribables.concat(EventHierarchy.self_with_children(self))
    end
    subscribables.uniq.flat_map do |s|
      subscription_type.where(subscribable: s, user: user).first_or_create!
    end
  end

  def unsubscribe_user(user, unsubscribe_from_children: false)
    subscribables =  EventHierarchy.self_with_direct_relations(self)
    if unsubscribe_from_children
      subscribables.concat(EventHierarchy.self_with_children(self))
    end
    Subscription.where(subscribable: subscribables, user: user).each do |s|
      Notification.where(subscription: s).each do |n|
        n.subscription_id = nil
        n.save!
      end
      s.destroy!
    end
    subscribables
  end

  def subscribable_name
    if self.respond_to?(:display_name)
      display_name
    elsif self.respond_to?(:name)
      name
    else
      ""
    end
  end
end

class SubscribeUser < ApplicationJob
  def perform(subscribable, user, subscription_type: OnSiteSubscription, subscribe_to_children: false)
    subscribable.subscribe_user(user, subscription_type: subscription_type, subscribe_to_children: subscribe_to_children)
  end
end

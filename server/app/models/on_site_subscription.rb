class OnSiteSubscription < Subscription
  def send_notification(event)
    conditions = {
      type: :subscribed_event,
      originating_user: event.originating_user,
      notified_user: self.user,
      event: event,
      seen: false,
    }

    if !Notification.where(conditions).exists?
      Notification.create!(conditions.merge(subscription: self))
    end
  end
end

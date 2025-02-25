class NotifySubscribers < ApplicationJob
  def perform(event)
    event.subject.subscriptions.find_each do |s|
      s.send_notification(event) unless s.user == event.originating_user
    end
  end
end

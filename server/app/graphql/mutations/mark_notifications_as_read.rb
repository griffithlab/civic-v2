class Mutations::MarkNotificationsAsRead < Mutations::BaseMutation
  argument :ids, [Int], required: true

  field :notifications, [Types::Entities::NotificationType], null: false

  attr_reader :notifications

  def ready?(ids:)
    validate_user_logged_in

    @notifications = ids.map do |id|
      notification = Notification.find_by(id: id)
      if notification.nil?
        raise GraphQL::ExecutionError, "Notification with id #{id} doesn't exist."
      end
      notification
    end

    return true
  end

  def authorized?(**_)
    notifications.each do |notification|
      if notification.notified_user != context[:current_user]
        raise GraphQL::ExecutionError, "You are only allowed to mark your own notifications as read."
      end
    end

    return true
  end

  def resolve(**_)
    notifications.map do |notification|
      notification.seen = true
      notification.save
    end

    {
      notifications: notifications
    }
  end
end

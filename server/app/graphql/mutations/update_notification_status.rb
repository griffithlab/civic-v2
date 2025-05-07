class Mutations::UpdateNotificationStatus < Mutations::BaseMutation
  description "Mark one or more notifications as read/unread. The notification IDs provided must belong to the requesting user."
  argument :ids, [ Int ], required: true,
    description: "A list of one or more Notification IDs."

  argument :new_status, Types::ReadStatus, required: true,
    description: "The new status of the selected notifications."

  field :notifications, [ Types::Entities::NotificationType ],
    null: false,
    description: "A list of the notifications in their new state."

  attr_reader :notifications

  def ready?(ids:, **_)
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

  def resolve(new_status:, **_)
    notifications.map do |notification|
      notification.seen = new_status
      notification.save!
    end

    {
      notifications: notifications,
    }
  end
end

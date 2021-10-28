module Types::Connections
  class NotificationsConnection < Types::BaseConnection
    description 'Connection type for notifications including additional metadata.'

    field :mentioning_users, [Types::Entities::UserType], null: false,
      description: 'Users who have mentioned you.'

    field :originating_users, [Types::Entities::UserType], null: false,
      description: 'Users who have performed an action (other than a mention) that created a notification.'

    field :event_types, [Types::Events::EventActionType], null: false,
      description: 'List of event types that have occured on this entity.'

    field :organizations, [Types::Entities::OrganizationType], null: false,
      description: 'List of all organizations who are involved in this notification stream.'

    field :notification_subjects, [Types::Interfaces::EventSubject], null: false,
      description: 'List of subjects of the notifications in the stream'


    def mentioning_users
       User.where(
         id: Notification.where(
           notified_user: notified_user,
           type: 'mention'
         ).distinct.pluck(:originating_user_id),
       )
    end

    def originating_users
       User.where(
         id: Notification.where(
           notified_user: notified_user,
           type: 'subscribed_event'
         ).distinct.pluck(:originating_user_id),
       )
    end

    def event_types
       Event.where( id: event_ids).distinct.pluck(:action)
    end

    def organizations
        Organization.where(
          id: Event.where(id: event_ids).distinct.pluck(:organization_id)
        ).distinct
    end

    def notification_subjects
      Event.where(id: event_ids).includes(:subject).map(&:subject).uniq
    end

    private
    def notified_user
      @notified_user || context[:current_user]
    end

    def event_ids
      Notification.where(notified_user_id: notified_user).distinct.pluck(:event_id)
    end
  end
end

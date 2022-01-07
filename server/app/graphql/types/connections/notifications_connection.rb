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

    field :notification_subjects, [Types::Events::EventSubjectWithCount], null: false,
      description: 'List of subjects of the notifications in the stream'

    field :unread_count, Int, null: false,
      description: 'Count of unread notifications'


    def mentioning_users
       User.where(
         id: Notification.where(
           notified_user: notified_user,
           type: 'mention',
           seen: false
         ).distinct.select(:originating_user_id),
       ).sort_by{|u| u.display_name}
    end

    def originating_users
       User.where(
         id: Notification.where(
           notified_user: notified_user,
           type: 'subscribed_event',
           seen: false
         ).distinct.select(:originating_user_id),
       ).sort_by{|u| u.display_name}
    end

    def event_types
      Event.where(id: unscoped_event_ids).distinct.pluck(:action).sort
    end

    def organizations
        Organization.where(
          id: Event.where(id: unscoped_event_ids).distinct.select(:organization_id)
        ).distinct.sort_by{|s| s.name}
    end

    def notification_subjects
      Event.where(id: unscoped_event_ids)
        .group(:subject_type, :subject_id)
        .reorder(nil)
        .includes(:subject)
        .select("events.subject_id, events.subject_type, count(distinct(events.id)) as occurance_count")
        .map {|e|  { subject: e.subject, occurance_count: e.occurance_count } }
        .sort_by {|s| -s[:occurance_count] }
    end

    def unread_count
      Notification.where(
        notified_user: notified_user,
        seen: false
      ).count
    end

    private
    def notified_user
      @notified_user || context[:current_user]
    end

    def event_ids
      Notification.where(
        id: object.items.reorder(nil).distinct.select(:id)
      ).distinct.select(:event_id)
    end

    def unscoped_event_ids
      Notification.where(notified_user: notified_user, seen: false).distinct.select(:event_id)
    end
  end
end

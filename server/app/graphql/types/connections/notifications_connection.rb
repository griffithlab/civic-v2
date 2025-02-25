module Types::Connections
  class NotificationsConnection < Types::BaseConnection
    description "Connection type for notifications including additional metadata."

    field :mentioning_users, [ Types::Entities::UserType ], null: false,
      description: "Users who have mentioned you."

    field :originating_users, [ Types::Entities::UserType ], null: false,
      description: "Users who have performed an action (other than a mention) that created a notification."

    field :event_types, [ Types::Events::EventActionType ], null: false,
      description: "List of event types that have occurred on this entity."

    field :organizations, [ Types::Entities::OrganizationType ], null: false,
      description: "List of all organizations who are involved in this notification stream."

    field :notification_subjects, [ Types::Events::EventSubjectWithCount ], null: false,
      description: "List of subjects of the notifications in the stream"

    field :unread_count, Int, null: false,
      description: "Count of unread notifications"


    def mentioning_users
      User.where(
        id: Notification.where(
          notified_user: notified_user,
          type: "mention",
          seen: false
        ).distinct.select(:originating_user_id),
      ).sort_by { |u| u.display_name }
    end

    def originating_users
      popular_user_ids = Notification.where(notified_user: notified_user, seen: false)
        .group(:originating_user_id)
        .reorder(nil)
        .select("notifications.originating_user_id")
        .order(Arel.sql("count(distinct(notifications.id)) DESC"))
        .limit(10)

      User.where(id: popular_user_ids).distinct
    end

    def event_types
      Event.where(id: unscoped_event_ids).distinct.pluck(:action).sort
    end

    def organizations
      popular_org_ids = Notification
        .where(notified_user: notified_user, seen: false)
        .joins(:event)
        .where.not(events: { organization_id: nil })
        .group("events.organization_id")
        .reorder(nil)
        .select("events.organization_id")
        .order(Arel.sql("count(distinct(notifications.id)) DESC"))
        .limit(10)


      Organization.where(id: popular_org_ids).distinct
    end

    def notification_subjects
      Event.where(id: unscoped_event_ids)
        .group(:subject_type, :subject_id)
        .reorder(nil)
        .includes(:subject)
        .select("events.subject_id, events.subject_type, count(distinct(events.id)) as occurance_count")
        .order("occurance_count DESC")
        .limit(10)
        .map { |e|  { subject: e.subject, occurance_count: e.occurance_count } }
        .reject { |e| e[:subject].nil? }
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

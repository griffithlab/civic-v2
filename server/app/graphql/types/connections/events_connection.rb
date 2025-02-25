module Types::Connections
  class EventsConnection < Types::BaseConnection
    description "Connection type for objects that can have events including additional metadata."

    field :unique_participants, [ Types::Entities::UserType ], null: false,
      description: "List of all users that have generated an event on the subject entity."

    field :event_types, [ Types::Events::EventActionType ], null: false,
      description: "List of event types that have occurred on this entity."

    field :participating_organizations, [ Types::Entities::OrganizationType ], null: false,
      description: "List of all organizations who are involved in this event stream."

    field :unfiltered_count, Int, null: false,
      description: "When filtered on a subject, user, or organization, the total number of events for that subject/user/organization, irregardless of other filters. Returns null when there is no subject, user, or organization."

    def unique_participants
      # Users who's originating ids appear in the events query,
      # joined to events table, limited to only events in the events query
      # select the user id and the time of the newest relevant event
      ranked_user_ids = User.where(id: unscoped_events_base_query.select(:originating_user_id))
        .joins(:events)
        .where(events: { id: unscoped_events_base_query.select(:id) })
        .select("users.id as user_id, max(events.created_at) newest_event_timestamp")
        .group("users.id")


      # users, ranked by most recent relevant event
      User.joins("INNER JOIN (#{ranked_user_ids.to_sql}) ordered ON ordered.user_id = users.id")
        .order("ordered.newest_event_timestamp desc")
        .limit(15)
    end

    def event_types
      unscoped_events_base_query.distinct.pluck(:action)
    end

    def participating_organizations
      Organization.where(id:
                         unscoped_events_base_query.select(:organization_id)
                        ).distinct
    end

    def unfiltered_count
      unscoped_events_base_query.distinct.count
    end

    private
    def unscoped_events_base_query
      @unscoped_base ||= unscoped_events
    end

    def unscoped_events
      # this handles both cases where events are accessed at the root query
      # as well as cases where its accessed as a child of an entity
      # furthermore when accessed at the root, the user can supply a "mode"
      # this mode will be treated as if it _were_ the parent

      if parent
        # { user(id: 1) { events { id} } }
        return parent.events
      end

      if feed_mode = object.arguments[:mode]
        if feed_mode == :user
          if !object.arguments[:originating_user_id]
            raise GraphQL::ExecutionError, "Must provide an originating user when event feed is in User mode."
          end
          return Event.where(originating_user_id: object.arguments[:originating_user_id])
        elsif feed_mode == :organization
          if !object.arguments[:organization_id]
            raise GraphQL::ExecutionError, "Must provide an organization id when event feed is in Organization mode."
          end
          return Event.where(organization_id: object.arguments[:organization_id])
        elsif feed_mode == :unscoped
          Event.all
        # subject mode
        else
          if !object.arguments[:subject]
            raise GraphQL::ExecutionError, "Must provide a subject when event feed is in Subject mode."
          end
          return Event.where(subject: object.arguments[:subject])
        end
      end

      # no mode,no parent, unscoped
      Event.all
    end
  end
end

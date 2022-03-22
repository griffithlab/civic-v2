module Types::Connections
  class EventsConnection < Types::BaseConnection
    description 'Connection type for objects that can have events including additional metadata.'

    field :unique_participants, [Types::Entities::UserType], null: false,
      description: 'List of all users that have generated an event on the subject entity.'

    field :event_types, [Types::Events::EventActionType], null: false,
      description: 'List of event types that have occured on this entity.'

    field :participating_organizations, [Types::Entities::OrganizationType], null: false,
      description: 'List of all organizations who are involved in this event stream.'

    field :unfiltered_count, Int, null: true,
      description: 'When filtered on a subject, user, or organization, the total number of events for that subject/user/organization, irregardless of other filters. Returns null when there is no subject, user, or organization.'

    def unique_participants
      if event_subject
        User.where(id:
                   Event.where(subject: event_subject).select(:originating_user_id)
                  ).distinct
      else
        User.where(id: object.items.except(:order).select(:originating_user_id)).distinct
      end
    end

    def event_types
      if event_subject
        Event.where(subject: event_subject)
          .distinct
          .pluck(:action)
      else
        object.items.except(:order).distinct.pluck(:action)
      end
    end

    def participating_organizations
      if event_subject
        Organization.where(id:
                   Event.where(subject: event_subject).select(:organization_id)
                  ).distinct
      else
        Organization.where(id: object.items.except(:order).select(:organization_id)).distinct
      end
    end

    def unfiltered_count
      @comment_subject ||= object.arguments[:subject]
      if comment_subject
        subject = comment_subject
      else
        subject = parent
      end

      if subject
        Comment.where(commentable: subject).count
      else
        nil
      end
    end

    private
    def event_subject
      @event_subject ||= object.arguments[:subject]
    end
  end
end

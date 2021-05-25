module Types::Connections
  class EventsConnection < Types::BaseConnection
    description 'Connection type for objects that can have events including additional metadata.'

    field :unique_participants, [Types::Entities::UserType], null: false,
      description: 'List of all users that have generated an event on the subject entity.'

    field :event_types, [Types::Events::EventActionType], null: false,
      description: 'List of event types that have occured on this entity.'

    def unique_participants
       User.where(id:
            Event.where(subject: parent).select(:originating_user_id)
       ).distinct
    end

    def event_types
        Event.where(subject: parent)
          .distinct
          .pluck(:action)
    end

  end
end
module Types::Entities
  class EventType < Types::BaseObject
    connection_type_class Types::Connections::EventsConnection

    field :id, Int, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :originating_user, Types::Entities::UserType, null: false
    field :organization, Types::Entities::OrganizationType, null: true
    field :action, Types::Events::EventActionType, null: false
    field :subject, Types::Interfaces::EventSubject, null: true
    # TODO - can this ever be null?
    field :originating_object, Types::Interfaces::EventOriginObject, null: true

    def originating_user
      Loaders::RecordLoader.for(User).load(object.originating_user_id)
    end

    def organization
      Loaders::RecordLoader.for(Organization).load(object.organization_id)
    end

    def subject
      Loaders::AssociationLoader.for(Event, :subject).load(object)
    end
  end
end

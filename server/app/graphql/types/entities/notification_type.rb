module Types::Entities
  class NotificationType < Types::BaseObject
    connection_type_class Types::Connections::NotificationsConnection

    field :id, Int, null: false
    field :notified_user, Types::Entities::UserType, null: false
    field :originating_user, Types::Entities::UserType, null: false
    field :event, Types::Entities::EventType, null: false
    field :subscription, Types::Subscribable::SubscriptionType, null: true
    field :seen, Boolean, null: false
    field :type, Types::NotificationReasonType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def originating_user
      Loaders::AssociationLoader.for(Notification, :originating_user).load(object)
    end

    def notified_user
      Loaders::AssociationLoader.for(Notification, :notified_user).load(object)
    end

    def subscription
      Loaders::AssociationLoader.for(Notification, :subscription).load(object)
    end

    def event
      Loaders::AssociationLoader.for(Notification, :event).load(object)
    end
  end
end

module Types::Entities
  class NotificationType < Types::BaseObject
    field :id, Int, null: false
    field :notified_user, Types::Entities::UserType, null: false
    field :originating_user, Types::Entities::UserType, null: false
    field :event, Types::Entities::EventType, null: false
    field :subscription, Types::SubscriptionType, null: false
    field :seen, Boolean, null: false
    field :type, String, null: false #TODO this should be an enum type
    field :description, String, null: false
  end
end

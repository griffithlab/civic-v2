module Types::Subscribable
  class SubscriptionType < Types::BaseObject
    field :id, Int, null: false
    field :subscribable, Types::Entities::SubscribableType, null: false
  end
end

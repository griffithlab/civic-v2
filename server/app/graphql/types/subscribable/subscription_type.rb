module Types::Subscribable
  class SubscriptionType < Types::BaseObject
    field :id, Int, null: false
    field :subscribable, Types::Interfaces::EventSubject, null: false
  end
end

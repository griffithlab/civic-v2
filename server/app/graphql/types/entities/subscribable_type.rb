module Types::Entities
  class SubscribableType < Types::BaseObject
    field :id, Int, null: false
    field :entity_type, Types::Subscribable::SubscribableEntitiesType, null: false
  end
end

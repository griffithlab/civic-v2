module Types
  class SubscribableType < Types::BaseObject
    field :id, Int, null: false
    field :entity_type, Types::SubscribableEntitiesType, null: false
  end
end

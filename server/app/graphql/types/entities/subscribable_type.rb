module Types::Entities
  class SubscribableType < Types::BaseObject
    field :id, Int, null: false
    field :entity_type, Types::Subscribable::SubscribableEntitiesType, null: false

    def entity_type
      object.class.name
    end
  end
end

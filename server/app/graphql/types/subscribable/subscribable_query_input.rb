module Types::Subscribable
  class SubscribableQueryInput < Types::BaseInputObject
    description "Entity to subscribe to."

    argument :id, Int, required: true,
      description: "ID of subscribable entity."

    argument :entity_type, Types::Subscribable::SubscribableEntitiesType, required: true,
      description: "Type of subscribable entity."

    argument :include_children, Boolean, required: false, default_value: false,
      description: "Include child entities of the requested subscribable"

    def prepare
      subscribable = entity_type.constantize.find(id)
      if include_children
        return EventHierarchy.self_with_children(subscribable)
      else
        return subscribable
      end
    end
  end
end

module Types
  class SubscribableInput < Types::BaseInputObject
    description 'Entity to subscribe to.'

    argument :id, Int, required: true,
      description: 'ID of subscribable entity.'

    argument :entity_type, Types::SubscribableEntitiesType, required: true,
      description: 'Type of subscribable entity.'

    def prepare
      entity_type.downcase.classify.constantize.find(id)
    end
  end
end

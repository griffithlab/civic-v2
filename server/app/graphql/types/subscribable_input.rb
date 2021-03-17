module Types
  class SubscribableInput < Types::BaseInputObject
    description 'Entity to subscribe to'

    argument :id, Int, required: true
    argument :entity_type, Types::SubscribableEntitiesType, required: true

    def prepare
      entity_type.downcase.classify.constantize.find(id)
    end
  end
end

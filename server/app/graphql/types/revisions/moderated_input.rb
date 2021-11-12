module Types::Revisions
  class ModeratedInput < Types::BaseInputObject
    description 'Entity to moderate.'

    argument :id, Int, required: true,
      description: 'ID of moderated entity.'

    argument :entity_type, Types::Revisions::ModeratedEntitiesType, required: true,
      description: 'Type of moderated entity.'

    def prepare
      entity_type.constantize.find(id)
    end
  end
end

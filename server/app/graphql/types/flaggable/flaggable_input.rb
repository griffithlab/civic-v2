module Types::Flaggable
  class FlaggableInput < Types::BaseInputObject
    description 'Entity to flag'

    argument :id, Int, required: true,
      description: 'The ID of the entity'

    argument :entity_type, Types::Flaggable::FlaggableEntitiesType,
      required: true,
      description: 'The type of the entity to flag.'

    def prepare
      const = case entity_type
      when 'GENE'
        Gene
      else
        raise 'Unknown Enum Value'
      end

      const.find_by(id: id)
    end
  end
end

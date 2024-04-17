module Types::Revisions
  class ModeratedInput < Types::BaseInputObject
    description 'Entity to moderate.'

    argument :id, Int, required: true,
      description: 'ID of moderated entity.'

    argument :entity_type, Types::Revisions::ModeratedEntitiesType, required: true,
      description: 'Type of moderated entity.'

    argument :coordinate_type, Types::Revisions::VariantCoordinateTypesType, required: false,
      description: 'If the moderated is a variant, and you want coordinate revisons, specify the type'

    def prepare
      if coordinate_type && entity_type != "Variant"
        raise GraphQL::ExecutionError.new("Coordinate Type input can only be specified when the moderated is a variant")
      end

      moderated = entity_type.constantize.find(id)
      if coordinate_type
        moderated.variant_coordinates.where(coordinate_type: coordinate_type).first
      else
        moderated
      end
    end
  end
end

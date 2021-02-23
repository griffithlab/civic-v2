module Types::Commentable
  class CommentableInput < Types::BaseInputObject
    description 'Entity to comment on'

    argument :id, Int, required: true
    argument :entity_type, Types::Commentable::CommentableEntitiesType, required: true

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
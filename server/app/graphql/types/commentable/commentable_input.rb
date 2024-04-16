module Types::Commentable
  class CommentableInput < Types::BaseInputObject
    description 'Entity to comment on'

    argument :id, Int, required: true,
      description: 'ID of the entity to comment on.'
    argument :entity_type, Types::Commentable::CommentableEntitiesType, required: true,
      description: 'The type of the entity to comment on.'

    def prepare
      const = case entity_type
      when 'FEATURE'
        Feature
      when 'VARIANT'
        Variant
      when 'EVIDENCE_ITEM'
        EvidenceItem
      when 'ASSERTION'
        Assertion
      when 'VARIANT_GROUP'
        VariantGroup
      when 'SOURCE'
        Source
      when 'MOLECULAR_PROFILE'
        MolecularProfile
      else
        raise 'Unknown Enum Value'
      end

      const.find_by(id: id)
    end
  end
end

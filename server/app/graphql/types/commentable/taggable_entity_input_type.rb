module Types::Commentable
  class TaggableEntityInputType < Types::BaseInputObject
    description 'Mentioned entity to filter comments on.'

    argument :id, Int, required: true,
      description: 'ID of the mentioned entity'
    argument :entity_type, Types::Commentable::TaggableEntity, required: true,
      description: 'The type of the entity'

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
      when 'REVISION'
        Revision
      when 'MOLECULAR_PROFILE'
        MolecularProfile
      else
        #it was a role
        nil
      end

      if const
        const.find_by(id: id)
      else
        nil
      end
    end
  end
end

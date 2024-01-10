module Types::Flaggable
  class FlaggableEntitiesType < Types::BaseEnum
    description 'Enumeration of all entities in CIViC that can be flagged.'
    value 'FEATURE'
    value 'VARIANT'
    value 'EVIDENCE_ITEM'
    value 'ASSERTION'
    value 'VARIANT_GROUP'
    value 'MOLECULAR_PROFILE'
  end
end

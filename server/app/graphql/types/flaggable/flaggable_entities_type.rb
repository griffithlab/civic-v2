module Types::Flaggable
  class FlaggableEntitiesType < Types::BaseEnum
    description 'Enumeration of all entities in CIViC that can be flagged.'
    value 'GENE'
    value 'VARIANT'
  end
end

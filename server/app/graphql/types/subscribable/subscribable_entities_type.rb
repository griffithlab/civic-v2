module Types::Subscribable
  class SubscribableEntitiesType < Types::BaseEnum
    description 'Enumeration of all subscribable CIViC entities.'
    value 'GENE'
    value 'VARIANT'
    value 'EVIDENCE_ITEM'
    value 'ASSERTION'
    value 'REVISION'
    value 'VARIANT_GROUP'
    value 'SOURCE_SUGGESTION'
  end
end

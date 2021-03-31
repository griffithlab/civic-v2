module Types
  class SubscribableEntitiesType < Types::BaseEnum
    description 'Enumeration of all subscribable CIViC entities.'
    value 'GENE'
    value 'VARIANT'
    value 'EVIDENCE_ITEM'
    value 'ASSERTION'
    value 'REVISION'
  end
end

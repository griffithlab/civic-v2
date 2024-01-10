module Types::Subscribable
  class SubscribableEntitiesType < Types::BaseEnum
    description 'Enumeration of all subscribable CIViC entities.'
    value 'FEATURE', value: 'Feature'
    value 'VARIANT', value: 'Variant'
    value 'EVIDENCE_ITEM', value: 'EvidenceItem'
    value 'ASSERTION', value: 'Assertion'
    value 'REVISION', value: 'Revision'
    value 'VARIANT_GROUP', value: 'VariantGroup'
    value 'SOURCE_SUGGESTION', value: 'SourceSuggestion'
    value 'MOLECULAR_PROFILE', value: 'MolecularProfile'
  end
end

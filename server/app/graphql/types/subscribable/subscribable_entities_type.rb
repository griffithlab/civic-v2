module Types::Subscribable
  class SubscribableEntitiesType < Types::BaseEnum
    description 'Enumeration of all subscribable CIViC entities.'
    value 'ASSERTION', value: 'Assertion'
    value 'EVIDENCE_ITEM', value: 'EvidenceItem'
    value 'GENE', value: 'Gene'
    value 'MOLECULAR_PROFILE', value: 'MolecularProfile'
    value 'REVISION', value: 'Revision'
    value 'SOURCE', value: 'Source'
    value 'SOURCE_SUGGESTION', value: 'SourceSuggestion'
    value 'VARIANT', value: 'Variant'
    value 'VARIANT_GROUP', value: 'VariantGroup'
  end
end

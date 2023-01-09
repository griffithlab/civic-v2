module Types::Revisions
  class ModeratedEntitiesType < Types::BaseEnum
    description 'Enumeration of all moderated CIViC entities.'
    value 'GENE', value: 'Gene'
    value 'VARIANT', value: 'Variant'
    value 'EVIDENCE_ITEM', value: 'EvidenceItem'
    value 'ASSERTION', value: 'Assertion'
    value 'VARIANT_GROUP', value: 'VariantGroup'
    value 'MOLECULAR_PROFILE', value: 'MolecularProfile'
  end
end

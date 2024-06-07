module Types::Quicksearch
  class SearchableEntities < Types::BaseEnum
    value 'FEATURE', value: Feature
    value 'VARIANT', value: Variant
    value 'EVIDENCE_ITEM', value: EvidenceItem
    value 'ASSERTION', value: Assertion
    value 'VARIANT_GROUP', value: VariantGroup
    value 'REVISION', value: Revision
    value 'MOLECULAR_PROFILE', value: MolecularProfile
    value 'THERAPY', value: Therapy
    value 'DISEASE', value: Disease
  end
end

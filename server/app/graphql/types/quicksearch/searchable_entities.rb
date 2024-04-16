module Types::Quicksearch
  class SearchableEntities < Types::BaseEnum
    value 'FEATURE', value: Feature
    value 'VARIANT', value: Variant
    value 'EVIDENCE_ITEM', value: EvidenceItem
    value 'ASSERTION', value: Assertion
    value 'VARIANT_GROUP', value: VariantGroup
    value 'REVISION', value: Revision
    value 'MOLECULAR_PROFILE', value: MolecularProfile
  end
end

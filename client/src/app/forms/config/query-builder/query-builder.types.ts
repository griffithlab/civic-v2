import {
  AssertionSearchFilter,
  DiseaseSearchFilter,
  EvidenceItemSearchFilter,
  FeatureSearchFilter,
  MolecularProfileSearchFilter,
  PhenotypeSearchFilter,
  SourceSearchFilter,
  TherapySearchFilter,
  UserSearchFilter,
  VariantSearchFilter,
  VariantTypeSearchFilter,
} from '@app/generated/civic.apollo'

export type AdvancedSearchFilter =
  | AssertionSearchFilter
  | DiseaseSearchFilter
  | EvidenceItemSearchFilter
  | FeatureSearchFilter
  | MolecularProfileSearchFilter
  | PhenotypeSearchFilter
  | SourceSearchFilter
  | TherapySearchFilter
  | UserSearchFilter
  | VariantSearchFilter
  | VariantTypeSearchFilter

export type QueryBuilderFormModel = {
  query: AdvancedSearchFilter
  createPermalink: boolean
}

export type QueryBuilderSearchEndpoint =
  | 'searchAssertions'
  | 'searchDiseases'
  | 'searchEvidenceItems'
  | 'searchFeatures'
  | 'searchMolecularProfiles'
  | 'searchPhenotypes'
  | 'searchSources'
  | 'searchTherapies'
  | 'searchUsers'
  | 'searchVariants'
  | 'searchVariantTypes'

export type QueryBuilderFieldOption = {
  key: string
  label: string
}

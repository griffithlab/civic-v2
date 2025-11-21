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
import { FormlyFieldConfig } from '@ngx-formly/core'
import { $enum } from 'ts-enum-util'

export type AdvancedSearchFilterKey = keyof AdvancedSearchFilter
export enum AdvancedSearchRecursiveFilterKey {
  assertion = 'assertion',
  disease = 'disease',
  evidenceItem = 'evidenceItem',
  feature = 'feature',
  molecularProfile = 'molecularProfile',
  phenotype = 'phenotype',
  source = 'source',
  therapy = 'therapy',
  user = 'user',
  variant = 'variant',
  variantType = 'variantType',
}

export function isRecursiveFilterKey(value: string): boolean {
  return $enum(AdvancedSearchRecursiveFilterKey)
    .getValues()
    .includes(value as AdvancedSearchRecursiveFilterKey)
}

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

export type QueryBuilderFilterOption = {
  key: string
  label: string
  fieldConfig: FormlyFieldConfig[]
}

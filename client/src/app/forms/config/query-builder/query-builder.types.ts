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
import { ADVANCED_SEARCH_ENDPOINTS } from './query-builder.registry'
import { Observable } from 'rxjs'
import { QueryRef } from 'apollo-angular'

export type AdvancedSearchEndpoint = keyof typeof ADVANCED_SEARCH_ENDPOINTS

// attribute string per endpoint
export type AdvancedSearchAttribute<
  E extends AdvancedSearchEndpoint = AdvancedSearchEndpoint,
> = (typeof ADVANCED_SEARCH_ENDPOINTS)[E]['attribute']

// map endpoint → *filter* type (this is the one extra place you must touch)
interface EndpointFilterTypes {
  searchAssertions: AssertionSearchFilter
  searchDiseases: DiseaseSearchFilter
  searchEvidenceItems: EvidenceItemSearchFilter
  searchFeatures: FeatureSearchFilter
  searchMolecularProfiles: MolecularProfileSearchFilter
  searchPhenotypes: PhenotypeSearchFilter
  searchSources: SourceSearchFilter
  searchTherapies: TherapySearchFilter
  searchUsers: UserSearchFilter
  searchVariants: VariantSearchFilter
  searchVariantTypes: VariantTypeSearchFilter
}

export type AdvancedSearchFilter<
  E extends AdvancedSearchEndpoint = AdvancedSearchEndpoint,
> = EndpointFilterTypes[E]

export interface AdvancedSearchService {
  fetch(variables?: any, options?: any): Observable<any>
  watch(variables?: any, options?: any): QueryRef<any, any>
}
export type AdvancedSearchQueryGQL = AdvancedSearchService

// TODO: AdvSearchRecursiveFilterKey is an old type, refactor to use AdvancedSearchAttribute
export type AdvancedSearchRecursiveFilterKey = AdvancedSearchAttribute

export type QueryBuilderFormModel = {
  query: AdvancedSearchFilter
  createPermalink?: boolean
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

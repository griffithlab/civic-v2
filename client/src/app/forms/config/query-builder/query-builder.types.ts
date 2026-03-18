import {
  AssertionSearchFilter,
  DiseaseSearchFilter,
  EvidenceItemSearchFilter,
  FeatureSearchFilter,
  MolecularProfileSearchFilter,
  PhenotypeSearchFilter,
  RevisionSearchFilter,
  SourceSearchFilter,
  TherapySearchFilter,
  UserSearchFilter,
  VariantSearchFilter,
  VariantTypeSearchFilter,
} from '@app/generated/civic.apollo'
import { ADVANCED_SEARCH_ENDPOINTS } from './query-builder.registry'
import { Observable } from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { ApolloError } from '@apollo/client/core'

export type AdvancedSearchEndpoint = keyof typeof ADVANCED_SEARCH_ENDPOINTS

// attribute string per endpoint
export type AdvancedSearchAttribute<
  E extends AdvancedSearchEndpoint = AdvancedSearchEndpoint,
> = (typeof ADVANCED_SEARCH_ENDPOINTS)[E]['attribute']

interface EndpointFilterTypes {
  searchAssertions: AssertionSearchFilter
  searchComments: AssertionSearchFilter
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
  searchRevisions: RevisionSearchFilter
}

export type AdvancedSearchFilter<
  E extends AdvancedSearchEndpoint = AdvancedSearchEndpoint,
> = EndpointFilterTypes[E]

// generic interface for all adv. search's Apollo GQL services
export interface AdvancedSearchService {
  fetch(variables?: any, options?: any): Observable<any>
  watch(variables?: any, options?: any): QueryRef<any, any>
}

export type QueryBuilderFormModel = {
  query: AdvancedSearchFilter
  createPermalink?: boolean
}

export type QueryBuilderResult =
  | {
      status: 'ok'
      endpoint: AdvancedSearchEndpoint
      resultIds: number[]
      permalinkId?: string
    }
  | {
      status: 'empty'
      endpoint: AdvancedSearchEndpoint
      permalinkId?: string
    }
  | {
      status: 'error'
      error: ApolloError
    }

export type QueryBuilderResultStatus = QueryBuilderResult['status']

import type { Type } from '@angular/core'
import {
  SearchAssertionsGQL,
  SearchDiseasesGQL,
  SearchEvidenceItemsGQL,
  SearchFeaturesGQL,
  SearchMolecularProfilesGQL,
  SearchPhenotypesGQL,
  SearchSourcesGQL,
  SearchTherapiesGQL,
  SearchUsersGQL,
  SearchVariantsGQL,
  SearchVariantTypesGQL,
} from '@app/generated/civic.apollo'
import { AdvancedSearchService } from './query-builder.types'

export const ADVANCED_SEARCH_ENDPOINTS = {
  searchAssertions: {
    attribute: 'assertion',
    token: SearchAssertionsGQL as Type<AdvancedSearchService>,
  },
  searchDiseases: {
    attribute: 'disease',
    token: SearchDiseasesGQL as Type<AdvancedSearchService>,
  },
  searchEvidenceItems: {
    attribute: 'evidenceItem',
    token: SearchEvidenceItemsGQL as Type<AdvancedSearchService>,
  },
  searchFeatures: {
    attribute: 'feature',
    token: SearchFeaturesGQL as Type<AdvancedSearchService>,
  },
  searchMolecularProfiles: {
    attribute: 'molecularProfile',
    token: SearchMolecularProfilesGQL as Type<AdvancedSearchService>,
  },
  searchPhenotypes: {
    attribute: 'phenotype',
    token: SearchPhenotypesGQL as Type<AdvancedSearchService>,
  },
  searchSources: {
    attribute: 'source',
    token: SearchSourcesGQL as Type<AdvancedSearchService>,
  },
  searchTherapies: {
    attribute: 'therapy',
    token: SearchTherapiesGQL as Type<AdvancedSearchService>,
  },
  searchUsers: {
    attribute: 'user',
    token: SearchUsersGQL as Type<AdvancedSearchService>,
  },
  searchVariants: {
    attribute: 'variant',
    token: SearchVariantsGQL as Type<AdvancedSearchService>,
  },
  searchVariantTypes: {
    attribute: 'variantType',
    token: SearchVariantTypesGQL as Type<AdvancedSearchService>,
  },
} as const

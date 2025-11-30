// map endpoints to GQL query service
import {
  AdvancedSearchEndpoint,
  AdvancedSearchQueryGQL,
} from './query-builder.types'
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
} from '@generated/civic.apollo'

export const ADVANCED_SEARCH_GQL: Record<
  AdvancedSearchEndpoint,
  AdvancedSearchQueryGQL
> = {
  searchAssertions: SearchAssertionsGQL,
  searchDiseases: SearchDiseasesGQL,
  searchEvidenceItems: SearchEvidenceItemsGQL,
  searchFeatures: SearchFeaturesGQL,
  searchMolecularProfiles: SearchMolecularProfilesGQL,
  searchPhenotypes: SearchPhenotypesGQL,
  searchSources: SearchSourcesGQL,
  searchTherapies: SearchTherapiesGQL,
  searchUsers: SearchUsersGQL,
  searchVariants: SearchVariantsGQL,
  searchVariantTypes: SearchVariantTypesGQL,
}

import { QuerySearchPageTab } from '@app/views/search/query-search/query-search.types'
import { AdvancedSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'

export const queryBuilderTabs: QuerySearchPageTab[] = [
  { label: 'Assertions', searchEndpoint: 'searchAssertions' },
  { label: 'Evidence', searchEndpoint: 'searchEvidenceItems' },
  { label: 'Features', searchEndpoint: 'searchFeatures' },
  { label: 'Molecular Profiles', searchEndpoint: 'searchMolecularProfiles' },
  { label: 'Variants', searchEndpoint: 'searchVariants' },
  { label: 'Diseases', searchEndpoint: 'searchDiseases' },
  { label: 'Therapies', searchEndpoint: 'searchTherapies' },
  { label: 'Phenotypes', searchEndpoint: 'searchPhenotypes' },
  { label: 'Sources', searchEndpoint: 'searchSources' },
  { label: 'Variant Types', searchEndpoint: 'searchVariantTypes' },
  { label: 'Revisions', searchEndpoint: 'searchRevisions' },
  { label: 'Comments', searchEndpoint: 'searchComments' },
  { label: 'Users', searchEndpoint: 'searchUsers' },
]

export function getTabIndexFromSearchEndpoint(searchEndpoint: string): number {
  return queryBuilderTabs.findIndex(
    (tab) => tab.searchEndpoint === searchEndpoint
  )
}

export function getSearchEndpointFromTabIndex(
  tabIndex: number
): AdvancedSearchEndpoint {
  return queryBuilderTabs[tabIndex].searchEndpoint
}

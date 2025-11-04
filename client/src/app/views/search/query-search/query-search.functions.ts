import { QuerySearchPageTab } from '@app/views/search/query-search/query-search.types'

export const queryBuilderTabs: QuerySearchPageTab[] = [
  { label: 'Assertions', searchEndpoint: 'searchAssertions' },
  { label: 'Evidence', searchEndpoint: 'searchEvidenceItems' },
  { label: 'Features', searchEndpoint: 'searchFeatures' },
  { label: 'Molecular Profiles', searchEndpoint: 'searchMolecularProfiles' },
  { label: 'Variants', searchEndpoint: 'searchVariants' },
  { label: 'Diseases', searchEndpoint: 'searchDiseases' },
  { label: 'Therapies', searchEndpoint: 'searchTherapies' },
  { label: 'Sources', searchEndpoint: 'searchSources' },
  { label: 'Phenotypes', searchEndpoint: 'searchPhenotypes' },
  { label: 'Variant Types', searchEndpoint: 'searchVariantTypes' },
  { label: 'Users', searchEndpoint: 'searchUsers' },
  { label: 'Organizations', searchEndpoint: 'searchOrganizations' },
]

export function getTabIndexFromSearchEndpoint(searchEndpoint: string): number {
  return queryBuilderTabs.findIndex(
    (tab) => tab.searchEndpoint === searchEndpoint
  )
}

export function getSearchEndpointFromTabIndex(tabIndex: number): string {
  return queryBuilderTabs[tabIndex].searchEndpoint
}

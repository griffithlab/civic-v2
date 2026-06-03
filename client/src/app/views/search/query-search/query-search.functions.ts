import { QuerySearchPageTab } from '@app/views/search/query-search/query-search.types'
import { AdvancedSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'
import { getEntityColor } from '@app/core/utilities/get-entity-color'

// Derive the singular __typename used by getEntityColor from a search endpoint,
// Irregular plurals and the users -> curator mapping are handled explicitly.
export function entityNameFromSearchEndpoint(searchEndpoint: string): string {
  const entity = searchEndpoint.replace(/^search/, '')
  switch (entity) {
    case 'Users':
      return 'Curator'
    case 'Therapies':
      return 'Therapy'
    default:
      return entity.replace(/s$/, '')
  }
}

export const queryBuilderTabConfig: Omit<QuerySearchPageTab, 'iconColor'>[] = [
  {
    label: 'Assertions',
    searchEndpoint: 'searchAssertions',
    icon: 'civic-assertion',
  },
  {
    label: 'Evidence',
    searchEndpoint: 'searchEvidenceItems',
    icon: 'civic-evidence',
  },
  {
    label: 'Features',
    searchEndpoint: 'searchFeatures',
    icon: 'civic-feature',
  },
  {
    label: 'Molecular Profiles',
    searchEndpoint: 'searchMolecularProfiles',
    icon: 'civic-molecularprofile',
  },
  {
    label: 'Variants',
    searchEndpoint: 'searchVariants',
    icon: 'civic-variant',
  },
  {
    label: 'Diseases',
    searchEndpoint: 'searchDiseases',
    icon: 'civic-disease',
  },
  {
    label: 'Therapies',
    searchEndpoint: 'searchTherapies',
    icon: 'civic-therapy',
  },
  {
    label: 'Phenotypes',
    searchEndpoint: 'searchPhenotypes',
    icon: 'civic-phenotype',
  },
  { label: 'Sources', searchEndpoint: 'searchSources', icon: 'civic-source' },
  {
    label: 'Variant Types',
    searchEndpoint: 'searchVariantTypes',
    icon: 'civic-varianttype',
  },
  {
    label: 'Revisions',
    searchEndpoint: 'searchRevisions',
    icon: 'civic-revision',
  },
  {
    label: 'Comments',
    searchEndpoint: 'searchComments',
    icon: 'civic-comment',
  },
  { label: 'Users', searchEndpoint: 'searchUsers', icon: 'civic-curator' },
]

export const queryBuilderTabs: QuerySearchPageTab[] = queryBuilderTabConfig.map(
  (tab) => ({
    ...tab,
    iconColor: getEntityColor(entityNameFromSearchEndpoint(tab.searchEndpoint)),
  })
)

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

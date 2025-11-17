import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'

/**
 * Metadata for a single filter option
 * Describes what type of input is needed without generating the actual field config
 */
export type FilterMetadata = {
  key: string
  label: string
  filterType: 'simple' | 'recursive'
  inputType?: keyof typeof INPUT_FIELD_CONFIG
  recursiveEndpoint?: QueryBuilderSearchEndpoint
  recursiveTitle?: string
}

// Helpers to avoid repeating filterType and to keep arrays tidy
const withSimple = <T extends Omit<FilterMetadata, 'filterType'>>(
  items: T[]
): FilterMetadata[] => items.map((i) => ({ ...i, filterType: 'simple' }))

const withRecursive = <T extends Omit<FilterMetadata, 'filterType'>>(
  items: T[]
): FilterMetadata[] => items.map((i) => ({ ...i, filterType: 'recursive' }))

const sortByKey = (items: FilterMetadata[]): FilterMetadata[] =>
  [...items].sort((a, b) => a.key.localeCompare(b.key))

const sortByLabel = (items: FilterMetadata[]): FilterMetadata[] =>
  [...items].sort((a, b) => a.key.localeCompare(b.label))
/**
 * Metadata for all available filters for each search endpoint
 */
export const FILTER_METADATA: Record<
  QueryBuilderSearchEndpoint,
  FilterMetadata[]
> = {
  searchDiseases: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
      {
        key: 'diseaseAliases',
        label: 'Aliases',
        inputType: 'StringSearchInput',
      },
      { key: 'id', label: 'ID', inputType: 'IntSearchInput' },
      {
        key: 'doid',
        label: 'Disease Ontology ID',
        inputType: 'OntologyTermSearchInput',
      },
      {
        key: 'deprecated',
        label: 'Deprecation Status',
        inputType: 'BooleanSearchInput',
      },
    ]),
  ]),
  searchEvidenceItems: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
      {
        key: 'description',
        label: 'Description',
        inputType: 'StringSearchInput',
      },
      { key: 'id', label: 'ID', inputType: 'IntSearchInput' },
      {
        key: 'evidenceRating',
        label: 'Evidence Rating',
        inputType: 'IntSearchInput',
      },
      {
        key: 'isFlagged',
        label: 'Is Flagged',
        inputType: 'BooleanSearchInput',
      },
      {
        key: 'openRevisionCount',
        label: 'Open Revision Count',
        inputType: 'IntSearchInput',
      },
    ]),
    ...withRecursive([
      {
        key: 'disease',
        label: 'Disease',
        recursiveEndpoint: 'searchDiseases',
        recursiveTitle: 'Disease Filter',
      },
      {
        key: 'assertion',
        label: 'Assertion',
        recursiveEndpoint: 'searchAssertions',
        recursiveTitle: 'Assertion Filter',
      },
      {
        key: 'molecularProfile',
        label: 'Molecular Profile',
        recursiveEndpoint: 'searchMolecularProfiles',
        recursiveTitle: 'Molecular Profile Filter',
      },
      {
        key: 'source',
        label: 'Source',
        recursiveEndpoint: 'searchSources',
        recursiveTitle: 'Source Filter',
      },
      {
        key: 'creatingUser',
        label: 'Creating User',
        recursiveEndpoint: 'searchUsers',
        recursiveTitle: 'Creating User Filter',
      },
      {
        key: 'moderatingUser',
        label: 'Moderating User',
        recursiveEndpoint: 'searchUsers',
        recursiveTitle: 'Moderating User Filter',
      },
      {
        key: 'phenotypes',
        label: 'Phenotypes',
        recursiveEndpoint: 'searchPhenotypes',
        recursiveTitle: 'Phenotypes Filter',
      },
      {
        key: 'therapies',
        label: 'Therapies',
        recursiveEndpoint: 'searchTherapies',
        recursiveTitle: 'Therapies Filter',
      },
    ]),
  ]),
  searchAssertions: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
    ]),
  ]),
  searchFeatures: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
    ]),
  ]),
  searchMolecularProfiles: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
    ]),
  ]),
  searchPhenotypes: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
    ]),
  ]),
  searchSources: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
    ]),
  ]),
  searchTherapies: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
    ]),
  ]),
  searchUsers: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
    ]),
  ]),
  searchVariants: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
    ]),
  ]),
  searchVariantTypes: sortByLabel([
    ...withSimple([
      { key: 'name', label: 'Name', inputType: 'StringSearchInput' },
    ]),
  ]),
}

/**
 * Get filter metadata for a specific endpoint
 */
export function getFilterMetadata(
  endpoint: QueryBuilderSearchEndpoint
): FilterMetadata[] {
  const metadata = FILTER_METADATA[endpoint]
  if (!metadata) {
    console.warn(
      `Unknown searchEndpoint provided to getFilterMetadata: "${endpoint}".`
    )
    return []
  }
  return metadata
}

/**
 * Get a specific filter's metadata by key and endpoint
 */
export function getFilterMetadataByKey(
  endpoint: QueryBuilderSearchEndpoint,
  key: string
): FilterMetadata | undefined {
  const metadata = getFilterMetadata(endpoint)
  return metadata.find((m) => m.key === key)
}

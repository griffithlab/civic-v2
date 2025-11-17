import { FormlyFieldConfig } from '@ngx-formly/core'
import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'
import {
  FilterMetadata,
  getFilterMetadataByKey,
} from '@app/forms/config/query-builder/field-config/filter-metadata.config'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import { getSelectOptions } from '@app/forms/config/query-builder/field-config/functions/get-select-options'
import { getSearchQuery } from '@app/forms/config/query-builder/field-config/functions/get-search-query'

/**
 * Generates a FormlyFieldConfig at runtime for a selected filter key.
 * This replaces the need to pre-generate all possible field configs recursively.
 *
 * For simple filters: Returns a fieldGroup with operator + value inputs
 * For recursive filters: Returns a full nested subfilter structure with its own
 *                       booleanOperator, query-subfilters-card wrapper, and empty subFilters
 */
export function generateRuntimeFieldConfig(
  selectedKey: string,
  parentEndpoint: QueryBuilderSearchEndpoint
): FormlyFieldConfig | undefined {
  const metadata = getFilterMetadataByKey(parentEndpoint, selectedKey)

  if (!metadata) {
    console.warn(
      `No filter metadata found for key "${selectedKey}" in endpoint "${parentEndpoint}"`
    )
    return undefined
  }

  if (metadata.filterType === 'simple') {
    return generateSimpleFilterConfig(metadata)
  } else if (metadata.filterType === 'recursive') {
    return generateRecursiveFilterConfig(metadata)
  }

  return undefined
}

/**
 * Generates a simple filter field config with operator and value inputs
 */
function generateSimpleFilterConfig(
  metadata: FilterMetadata
): FormlyFieldConfig {
  if (!metadata.inputType) {
    throw new Error(
      `Simple filter "${metadata.key}" missing inputType in metadata`
    )
  }

  const inputFields = INPUT_FIELD_CONFIG[metadata.inputType]

  if (!inputFields) {
    throw new Error(`Unknown inputType "${metadata.inputType}" in metadata`)
  }

  return {
    key: metadata.key,
    type: 'formly-group',
    wrappers: ['form-row'],
    props: {
      label: metadata.label,
      formRowOptions: { span: 12 },
    },
    fieldGroup: inputFields,
  }
}

/**
 * Generates a recursive filter field config with full nested subfilter structure.
 * This includes:
 * - The entity key (e.g., 'disease', 'assertion')
 * - query-subfilters-card wrapper
 * - booleanOperator field
 * - subFilters array (initially empty, will be populated when user adds filters)
 */
function generateRecursiveFilterConfig(
  metadata: FilterMetadata
): FormlyFieldConfig {
  if (!metadata.recursiveEndpoint) {
    throw new Error(
      `Recursive filter "${metadata.key}" missing recursiveEndpoint in metadata`
    )
  }

  const title = metadata.recursiveTitle || metadata.label

  return {
    key: metadata.key,
    wrappers: ['query-subfilters-card'],
    props: {
      formCardOptions: { title: title },
      searchQuery: getSearchQuery(metadata.recursiveEndpoint),
    },
    fieldGroup: [
      {
        key: 'booleanOperator',
        type: 'base-radio',
        wrappers: [],
        props: {
          required: true,
          size: 'small',
          type: 'button',
          options: getSelectOptions('BooleanOperator'),
        },
      },
      {
        key: 'subFilters',
        type: 'query-subfilters',
        wrappers: [],
        fieldArray: {
          type: 'query-filter',
          resetOnHide: false,
          props: {
            selectedKey: undefined,
            parentEndpoint: metadata.recursiveEndpoint,
          },
          // Empty fieldGroup - will be populated dynamically when user selects a filter
          fieldGroup: [],
        },
      },
    ],
  }
}

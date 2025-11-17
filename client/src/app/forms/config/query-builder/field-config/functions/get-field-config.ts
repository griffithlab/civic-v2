import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { BooleanOperator } from '@app/generated/civic.apollo'
import { getSelectOptions } from '@app/forms/config/query-builder/field-config/functions/get-select-options'
import { getSearchQuery } from '@app/forms/config/query-builder/field-config/functions/get-search-query'

export type QueryBuilderWrapper = 'query-builder-card' | 'query-subfilter-card'

export function getFieldConfig(
  key: string = 'query',
  endpoint: QueryBuilderSearchEndpoint,
  wrapper: QueryBuilderWrapper,
  title: string
): FormlyFieldConfig[] {
  return [
    {
      key: `${key}`, // root: 'query', nested:  'assertion', 'variant'
      wrappers: [`${wrapper}`], // query-builder-card or query-subfilter-card
      props: {
        formCardOptions: { title: `${title}` },
        searchQuery: getSearchQuery(endpoint), // Apollo GQL service
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
              parentEndpoint: endpoint, // Pass endpoint so query-filter knows which metadata to use
            },
            // Empty fieldGroup, populated dynamically by query-filter.type
            // when user selects a filter key. This prevents recursive config generation.
            fieldGroup: [],
          },
        },
        {
          key: 'createPermalink',
          wrappers: [],
        },
      ],
    },
  ]
}

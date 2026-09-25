import { AdvancedSearchEndpoint } from '../../query-builder.types'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { getSelectOptions } from './get-select-options'
import { BooleanOperator } from '@app/generated/civic.apollo.types'

/**
 * Rows are built by the `query-subfilters` type's `fieldArray` default (see
 * `query-subfilters.module.ts`), not here — this module must not import
 * `getFieldOptions`, which imports every `search-*.config`, each of which calls
 * this function.
 */
export function getQueryFieldConfig(
  key: 'query' | string = 'query',
  endpoint: AdvancedSearchEndpoint,
  title?: string
): FormlyFieldConfig[] {
  // generate root query field config
  if (key === 'query') {
    return [
      {
        // NOTE: field type added in entity config with config helper function
        key: `${key}`,
        wrappers: [`query-builder-card`],
        props: {
          formCardOptions: {
            title: title,
            size: 'small',
            searchEndpoint: endpoint,
          },
        },
        fieldGroup: [
          {
            key: 'booleanOperator',
            type: 'base-radio',
            wrappers: [],
            props: {
              required: true,
              type: 'button',
              options: getSelectOptions('BooleanOperator'),
            },
          },
          {
            key: 'subFilters',
            type: 'query-subfilters',
            wrappers: [],
            props: {
              filterEndpoint: endpoint,
              isRootFilter: true,
            },
          },
        ],
      },
      {
        key: 'createPermalink',
        defaultValue: true,
      },
    ]
  } else {
    // generate subfilter field config
    return [
      {
        // NOTE: field type added in entity config with config helper function
        key: `${key}`,
        wrappers: ['query-subfilters-card'],
        props: {
          label: `${title}`,
          formCardOptions: { title: title, size: 'small' },
        },
        fieldGroup: [
          {
            key: 'booleanOperator',
            type: 'base-radio',
            defaultValue: 'AND',
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
            props: {
              filterEndpoint: endpoint,
              isRootFilter: false,
            },
          },
        ],
      },
    ]
  }
}

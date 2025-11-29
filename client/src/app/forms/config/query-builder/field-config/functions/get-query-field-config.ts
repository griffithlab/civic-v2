import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { BooleanOperator } from '@app/generated/civic.apollo'
import { getSelectOptions } from '@app/forms/config/query-builder/field-config/functions/get-select-options'
import { getFieldOptions } from '@app/forms/config/query-builder/field-config/functions/get-field-options'
import { getSearchQuery } from '@app/forms/config/query-builder/field-config/functions/get-search-query'

export type QueryBuilderWrapper = 'query-builder-card' | 'query-subfilter-card'

export function getQueryFieldConfig(
  key: 'query' | string = 'query',
  endpoint: QueryBuilderSearchEndpoint,
  title?: string
): FormlyFieldConfig[] {
  if (key === 'query') {
    return [
      {
        key: `${key}`,
        wrappers: [`query-builder-card`],
        props: {
          formCardOptions: { title: title, size: 'default' },
          formSearchQuery: getSearchQuery(endpoint),
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
            fieldArray: {
              type: 'query-filter',
              resetOnHide: true,
              props: {
                selectedKey: undefined,
                size: 'default',
                isRootFilter: true,
                options: getFieldOptions(endpoint).map((opt) => ({
                  label: opt.props?.label,
                  value: opt.key,
                })),
              },
              fieldGroup: getFieldOptions(endpoint),
            },
          },
          // NOTE: createPermalink has no field type bc its value
          // is managed by a reactive checkbox control & effect()
          // in query-builder-card.wrapper
          {
            key: 'createPermalink',
            wrappers: [],
          },
        ],
      },
    ]
  } else {
    return [
      {
        key: `${key}`,
        wrappers: ['query-subfilters-card'],
        props: {
          formCardOptions: { title: title, size: 'small' },
          label: `${title}`,
          // formSearchQuery: getSearchQuery(endpoint),
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
            props: {
              filterEndpoint: endpoint,
            },
            fieldArray: (field) => {
              // console.log('fieldArray fn called', field)
              return {
                type: 'query-filter',
                resetOnHide: true,
                props: {
                  selectedKey: undefined,
                  isRootFilter: false,
                  options: getFieldOptions(endpoint).map((opt) => ({
                    label: opt.props?.label,
                    value: opt.key,
                  })),
                },
                fieldGroup: getFieldOptions(field.props!.filterEndpoint),
              }
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
}

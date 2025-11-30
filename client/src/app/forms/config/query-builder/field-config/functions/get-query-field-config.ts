import { AdvancedSearchEndpoint } from '../../query-builder.types'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { getSelectOptions } from './get-select-options'
import { getFieldOptions } from './get-field-options'

export function getQueryFieldConfig(
  key: 'query' | string = 'query',
  endpoint: AdvancedSearchEndpoint,
  title?: string
): FormlyFieldConfig[] {
  if (key === 'query') {
    return [
      {
        key: `${key}`,
        wrappers: [`query-builder-card`],
        props: {
          formCardOptions: { title: title, size: 'small' },
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
        ],
      },
      // NOTE: createPermalink hides its field bc its value
      // is managed by a reactive checkbox control in
      // query-builder-card.wrapper
      {
        key: 'createPermalink',
        type: 'checkbox',
        hide: true,
        wrappers: [],
      },
    ]
  } else {
    return [
      {
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

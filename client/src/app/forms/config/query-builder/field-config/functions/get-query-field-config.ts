import { AdvancedSearchEndpoint } from '../../query-builder.types'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { getSelectOptions } from './get-select-options'
import { getDefaultSelectedKey, getFieldOptions } from './get-field-options'

export function getQueryFieldConfig(
  key: 'query' | string = 'query',
  endpoint: AdvancedSearchEndpoint,
  title?: string
): FormlyFieldConfig[] {
  // generate root query field config
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
            props: {
              filterEndpoint: endpoint,
            },
            fieldArray: (field) => {
              return {
                type: 'query-filter',
                resetOnHide: true,
                props: {
                  selectedKey: getDefaultSelectedKey(
                    field.props!.filterEndpoint
                  ),
                  size: 'default',
                  isRootFilter: true,
                  options: getFieldOptions(field.props!.filterEndpoint).map(
                    (opt) => ({
                      label: opt.props?.label,
                      value: opt.key,
                    })
                  ),
                },
                fieldGroup: getFieldOptions(field.props!.filterEndpoint),
              }
            },
          },
        ],
      },
      // NOTE: createPermalink field's value is manually managed by
      // a standard checkbox in the query-builder-card wrapper and
      // is hidden in the field config so that formly does not
      // build an extraneous field control component for it.
      {
        key: 'createPermalink',
        type: 'checkbox',
        hide: true,
        wrappers: [],
      },
    ]
  } else {
    // generate subfilter field config
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
                  selectedKey: getDefaultSelectedKey(
                    field.props!.filterEndpoint
                  ),
                  isRootFilter: false,
                  options: getFieldOptions(field.props!.filterEndpoint).map(
                    (opt) => ({
                      label: opt.props?.label,
                      value: opt.key,
                    })
                  ),
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

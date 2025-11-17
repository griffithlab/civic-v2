import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { BooleanOperator } from '@app/generated/civic.apollo'
import { getSelectOptions } from '@app/forms/config/query-builder/field-config/functions/get-select-options'
import { getFieldOptions } from '@app/forms/config/query-builder/field-config/functions/get-field-options'
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
      key: `${key}`,
      wrappers: [`${wrapper}`],
      props: {
        formCardOptions: { title: `${title}` },
        formSearchQuery: getSearchQuery(endpoint),
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
            resetOnHide: true,
            props: {
              selectedKey: undefined,
            },
            /* TODO: commenting out this fieldGroup, and the model
             * population works, as far as properly setting the select.
             * However, query-filter's field builder fails with a formControl err.*/
            fieldGroup: getFieldOptions(endpoint),
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

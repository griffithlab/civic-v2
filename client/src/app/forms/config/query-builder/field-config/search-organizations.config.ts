import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  sortByKey,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'

export const searchOrganizationDefaultKey = 'name'
export const searchOrganizationsFieldOptions: FormlyFieldConfig[] = withHideExpression(
  sortByKey([
    ...withStatic([
      {
        key: 'name',
        props: { label: 'Name' },
        fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
      },
      {
        key: 'id',
        props: { label: 'Organization ID' },
        fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
      },
      {
        key: 'parent_id',
        props: { label: 'Parent ID' },
        fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
      },
    ]),
  ])
)

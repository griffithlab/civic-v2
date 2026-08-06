import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'
import {
  sortByKey,
  withHideExpression,
  withRecursive,
  withStatic,
} from './functions/field-config-helpers'
import { getQueryFieldConfig } from './functions/get-query-field-config'

export const searchActivityDefaultKey = 'type'
export const searchActivitiesFieldOptions: FormlyFieldConfig[] = withHideExpression(
  sortByKey([
    ...withStatic([
      {
        key: 'type',
        props: { label: 'Type' },
        fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
      },
      {
        key: 'id',
        props: { label: 'Activity ID' },
        fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
      },
    ]),
      ...withRecursive([
        ...getQueryFieldConfig('user', 'searchUsers', 'User'),
        ...getQueryFieldConfig('organization', 'searchOrganizations', 'Organization'),
      ]),
  ])
)

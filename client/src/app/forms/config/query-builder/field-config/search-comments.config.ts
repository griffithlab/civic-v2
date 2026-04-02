import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  sortByLabel,
  withHideExpression,
  withStatic,
} from './functions/field-config-helpers'
import { INPUT_FIELD_CONFIG } from './input-config/search-input.config'

export const searchCommentsFieldOptions: FormlyFieldConfig[] =
  withHideExpression(
    sortByLabel([
      ...withStatic([
        {
          key: 'comment',
          props: { label: 'Comment Text' },
          fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
        },
        {
          key: 'id',
          props: { label: 'ID' },
          fieldGroup: INPUT_FIELD_CONFIG['IntSearchInput'],
        },
      ]),
    ])
  )

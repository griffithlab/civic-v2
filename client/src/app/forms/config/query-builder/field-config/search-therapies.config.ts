import { FormlyFieldConfig } from '@ngx-formly/core'
import { INPUT_FIELD_CONFIG } from '@app/forms/config/query-builder/field-config/input-config/search-input.config'

export const searchTherapiesDefaultKey = 'name'
export const searchTherapiesFieldOptions: FormlyFieldConfig[] = [
  {
    key: 'name',
    props: { label: 'Name' },
    fieldGroup: INPUT_FIELD_CONFIG['StringSearchInput'],
  },
]

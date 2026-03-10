import { FormlyFieldConfig } from '@ngx-formly/core'
import { STRUCT_FIELD_CONFIG } from '../input-config/search-struct.config'
import { withSmallSize } from './field-config-helpers'

const STRUCT_OPTIONS: Record<string, FormlyFieldConfig[]> = {
  coordinates: STRUCT_FIELD_CONFIG['CoodinateSearchStruct'],
}

export function getStructOptions(struct: string): FormlyFieldConfig[] {
  const options = STRUCT_OPTIONS[struct]
  if (!options) {
    console.warn(
      `Unknown struct provided to getStructOptions:
      "${struct}". Returning empty array.`
    )
    return []
  }
  if (options.length > 0) {
    options.forEach((opt) => {
      if (opt.fieldGroup) opt.fieldGroup = withSmallSize(opt.fieldGroup)
    })
  }
  return options
}

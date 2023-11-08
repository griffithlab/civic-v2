import { Maybe } from '@app/generated/civic.apollo'
import { FormlyFieldConfig } from '@ngx-formly/core'

export default function assignFieldConfigDefaultValues(
  fieldGroup: FormlyFieldConfig[],
  initialModel: any
): FormlyFieldConfig[] {
  // finds field config object in nested FormlyFieldConfig[]
  const findConfig = (
    fg: FormlyFieldConfig[],
    key: string
  ): Maybe<FormlyFieldConfig> => {
    let found: Maybe<FormlyFieldConfig> = undefined
    for (let ffc of fg) {
      if (ffc.fieldGroup) {
        found = findConfig(ffc.fieldGroup, key)
      } else if (ffc.key === key) {
        found = ffc
        break
      }
    }
    return found
  }

  // for each attribute key in the initial model, finds the
  // field config object matching the key and assigns
  // its default value from the initial model
  const assignDefs = (fg: FormlyFieldConfig[], model: any) => {
    // iterate over keys of initialModel, recursively
    for (let key of Object.keys(model)) {
      if (model[key] instanceof Object && !Array.isArray(model[key])) {
        assignDefs(fg, model[key])
      } else {
        // find field config with same key & assign default value
        const ffc = findConfig(fg, key)
        if (ffc) {
          ffc.defaultValue = model[key]
        } else {
          //console.warn( // `initial model specified ${key}, but no field config with that key found.`)
        }
      }
    }
    return fg
  }
  return assignDefs(fieldGroup, initialModel)
}

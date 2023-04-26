import { AbstractControl } from '@angular/forms'
import { Maybe } from '@app/generated/civic.apollo'
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core'
import { TypeOption } from '@ngx-formly/core/lib/models'
import { EntityState, EntityType } from '../../states/entity.state'

export const fdaTestCheckboxTypeOption: TypeOption = {
  name: 'fda-test-checkbox',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'FDA Companion Test?',
      placeholder: 'None Specified',
      helpText:
        'Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',
      options: [
        { value: true, label: 'Yes' },
        { value: false, label: 'No' },
        { value: undefined, label: '' },
      ],
    },
    hooks: {
      onInit: (ffc?: FormlyFieldConfig): void => {
        if (ffc) {
          const to: Maybe<FormlyTemplateOptions> = ffc.templateOptions
          const regulatoryCtrl: AbstractControl | null = ffc?.form
            ? ffc.form.get('fdaRegulatoryApproval')
            : null
          const assertionTypeCtrl: AbstractControl | null = ffc?.form
            ? ffc.form.get('evidenceType')
            : null
          const st: EntityState = ffc?.options?.formState
          if (!regulatoryCtrl) {
            return
          }
          if (!to) {
            return
          }
          if (!assertionTypeCtrl) {
            return
          }
          to.etSub = assertionTypeCtrl.valueChanges.subscribe(
            (et: Maybe<EntityType>) => {
              if (et && st.allowsFdaApproval(et)) {
                to.hidden = false
                to.required = true
              } else {
                ffc.form?.get(ffc.key as string)?.setValue(undefined)
                to.modelCallback(undefined)
                ffc.model[ffc.key as string] = undefined
                to.hidden = true
                to.required = false
              }
            }
          )

          to.ncSub = regulatoryCtrl.valueChanges.subscribe(
            (hasApproval: Maybe<Boolean>) => {
              if (hasApproval) {
                to.hidden = false
                to.required = true
                to.modelCallback(true)
                ffc.model[ffc.key as string] = true
              } else {
                to.modelCallback(false)
                ffc.model[ffc.key as string] = false
                to.hidden = true
                to.required = false
              }
            }
          )
        }
      },
      onDestroy: (ffc?: FormlyFieldConfig): void => {
        if (ffc) {
          const to: Maybe<FormlyTemplateOptions> = ffc.templateOptions
          to?.ncSub?.unsubscribe()
          to?.etSub?.unsubscribe()
        }
      },
    },
  },
}

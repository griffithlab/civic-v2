import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  AbstractControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { CvcAttributeTagModule } from '@app/forms2/components/attribute-tag/attribute-tag.module'
import { CvcEnumSelectModule } from '@app/forms2/components/enum-select/enum-select.module'
import { EvidenceState } from '@app/forms2/states/evidence.state'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import {
  EvidenceDirection,
  EvidenceType,
  Maybe,
} from '@app/generated/civic.apollo'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { FormlyFieldConfig } from '@ngx-formly/core/lib/models'
import {
  CvcDirectionSelectField,
  CvcDirectionSelectFieldProps,
} from './direction-select.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'direction-select',
      wrappers: ['form-field'],
      component: CvcDirectionSelectField,
      defaultOptions: {
        validators: { validation: ['direction-option'] },
      },
    },
  ],
  validators: [
    {
      name: 'direction-option',
      validation: directionOptionValidatorFn,
    },
  ],
  validationMessages: [
    {
      name: 'direction-option',
      message: directionOptionValidatorMessageFn,
    },
  ],
}

@NgModule({
  declarations: [CvcDirectionSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule, PushModule,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule, // for form-field wrapper
    CvcEnumSelectModule,
    CvcAttributeTagModule,
  ],
  exports: [CvcDirectionSelectField],
})
export class CvcDirectionSelectModule {}

export function directionOptionValidatorFn(
  ctrl: AbstractControl,
  field: FormlyFieldConfig<Partial<CvcDirectionSelectFieldProps>>
): ValidationErrors | null {
  const st: EvidenceState = field.options?.formState
  const ed: EvidenceDirection = ctrl.value
  if (!ed || !st) {
    return null
  }
  const et: Maybe<EvidenceType> = st.fields.evidenceType$.getValue()
  if (!et) {
    return null
  } else {
    return st.isValidDirectionOption(et, ed)
      ? null
      : { 'direction-option': true }
  }
}

export function directionOptionValidatorMessageFn(
  et: EvidenceType,
  ffc: FormlyFieldConfig
): string {
  return `'${formatEvidenceEnum(
    ffc.formControl?.value
  )}' is not a valid Clinical Significance for ${formatEvidenceEnum(
    et
  )} Evidence.`
}

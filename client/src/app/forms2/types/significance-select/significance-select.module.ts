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
import {
  EntitySignificance,
  BaseState,
  EntityType,
} from '@app/forms2/states/base.state'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { Maybe } from '@app/generated/civic.apollo'
import { LetModule, PushModule } from '@ngrx/component'
import { ConfigOption, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core'
import { CvcSignificanceSelectField } from './significance-select.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'significance-select',
      wrappers: ['form-field'],
      component: CvcSignificanceSelectField,
      defaultOptions: {
        validators: { validation: ['significance-option'] }
      }
    },
  ],
  validators: [
    {
      name: 'significance-option',
      validation: significanceOptionValidatorFn,
    },
  ],
  validationMessages: [
    {
      name: 'significance-option',
      message: significanceOptionValidatorMessageFn,
    },
  ],
}

@NgModule({
  declarations: [CvcSignificanceSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule, PushModule,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule,
    CvcEnumSelectModule,
    CvcAttributeTagModule,
  ],
  exports: [CvcSignificanceSelectField],
})
export class CvcSignificanceSelectModule {}

export function significanceOptionValidatorFn(
  c: AbstractControl,
  ffc: FormlyFieldConfig,
  opt: any
): ValidationErrors | null {
  const st: BaseState = ffc.options?.formState
  const cs: EntitySignificance = c.value
  if (!cs || !st) {
    return null
  }
  const et: Maybe<EntityType> = st.fields.evidenceType$.getValue()
  if (!et) {
    return null
  } else {
    return st.isValidSignificanceOption(et, cs)
      ? null
      : { 'significance-option': true }
  }
}

export function significanceOptionValidatorMessageFn(
  et: EntityType,
  ffc: FormlyFieldConfig
): string {
  const st: BaseState = ffc.options!.formState!
  return `'${formatEvidenceEnum(
    ffc.formControl?.value
  )}' is not a valid Clinical Significance for ${formatEvidenceEnum(
    et
  )} ${st.pluralNames.get(st.entityName)}.`
}

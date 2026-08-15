import { NgModule } from '@angular/core'
import { CvcBaseBooleanRadioField } from '@app/forms/types/base/boolean-radio/boolean-radio.type'
import { CvcBaseCheckboxField } from '@app/forms/types/base/checkbox/checkbox.type'
import { CvcBaseInputField } from '@app/forms/types/base/input/input.type'
import { CvcBaseRadioField } from '@app/forms/types/base/radio/radio.type'
import { CvcBaseSelectField } from '@app/forms/types/base/select/select.type'
import { CvcTextareaField } from '@app/forms/types/base/textarea/textarea.type'
import {
  CvcClinvarInputField,
  CvcClinvarInputFieldProps,
} from '@app/forms/types/clinvar-input/clinvar-input.type'
import { CvcFdaCompanionTestCheckboxField } from '@app/forms/types/fda-companion-test-checkbox/fda-companion-test-checkbox.type'
import { CvcFdaRegulatoryApprovalCheckboxField } from '@app/forms/types/fda-regulatory-approval-checkbox/fda-regulatory-approval-checkbox.type'
import { CvcNccnGuidelineVersionField } from '@app/forms/types/nccn-guideline-version-input/nccn-guideline-version-input.type'
import {
  CvcTagInputField,
  CvcTagInputProps,
} from '@app/forms/types/tag-input/tag-input.type'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'

/**
 * The single FormlyModule.forChild registration for the plain fields — inputs,
 * text areas, radios, checkboxes and the three fields that follow another
 * field's answer. Companion to CvcSelectFieldsRegistryModule; both are
 * imported by types/form-types.module.ts.
 *
 * Two registrations from the old per-field modules are deliberately not
 * carried over, both unused and both broken: `base-multi-select` extended
 * `level-select` (the evidence level enum, copied by accident), and `enum`
 * extended a bare `select` that this app never registers.
 */
const baseFieldTypes: ConfigOption = {
  types: [
    {
      name: 'base-input',
      component: CvcBaseInputField,
      wrappers: ['form-field'],
    },
    { name: 'base-string', extends: 'base-input' },
    {
      name: 'base-number',
      extends: 'base-input',
      defaultOptions: { props: { type: 'number' } },
    },
    {
      name: 'base-integer',
      extends: 'base-input',
      defaultOptions: { props: { type: 'number' } },
    },
    {
      name: 'base-textarea',
      component: CvcTextareaField,
      wrappers: ['form-field'],
    },
    {
      name: 'base-checkbox',
      component: CvcBaseCheckboxField,
      wrappers: ['form-field'],
    },
    {
      name: 'base-radio',
      component: CvcBaseRadioField,
      wrappers: ['form-field'],
    },
    {
      name: 'base-boolean-radio',
      component: CvcBaseBooleanRadioField,
      wrappers: ['form-field'],
    },
    {
      name: 'base-select',
      component: CvcBaseSelectField,
      wrappers: ['form-field'],
    },
    {
      name: 'tag-input',
      component: CvcTagInputField,
      wrappers: ['form-field'],
      defaultOptions: {
        modelOptions: {
          // update the model when focus leaves the field; the template's
          // keydown.enter listener blurs it, which is what commits a value
          updateOn: 'blur',
        },
      },
    },
    {
      // for use in repeat-field types
      name: 'tag-multi-input',
      component: CvcTagInputField,
      wrappers: ['form-field'],
      defaultOptions: {
        props: <CvcTagInputProps>{ isMultiInput: true },
      },
    },
    {
      name: 'clinvar-input',
      component: CvcClinvarInputField,
      wrappers: ['form-field'],
      defaultOptions: {
        props: <CvcClinvarInputFieldProps>{
          isRepeatItem: false,
          showExistenceOptions: false,
        },
      },
    },
    {
      // for use in repeat-field types
      name: 'clinvar-multi-input',
      component: CvcClinvarInputField,
      wrappers: ['form-field'],
      defaultOptions: {
        props: <CvcClinvarInputFieldProps>{
          isRepeatItem: true,
          showExistenceOptions: true,
        },
      },
    },
    {
      name: 'nccn-guideline-version-input',
      component: CvcNccnGuidelineVersionField,
      wrappers: ['form-field'],
    },
    {
      name: 'fda-companion-test-checkbox',
      component: CvcFdaCompanionTestCheckboxField,
      wrappers: ['form-field'],
    },
    {
      name: 'fda-regulatory-approval-checkbox',
      component: CvcFdaRegulatoryApprovalCheckboxField,
      wrappers: ['form-field'],
    },
  ],
}

@NgModule({
  imports: [FormlyModule.forChild(baseFieldTypes)],
})
export class CvcBaseFieldsRegistryModule {}

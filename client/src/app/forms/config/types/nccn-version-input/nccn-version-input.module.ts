import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { nccnVersionInputTypeOption } from './nccn-version-input.type'
import {
  AbstractControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'

function NccnVersionValidator(
  control: AbstractControl
): ValidationErrors | null {
  return /^\d{1,2}\.\d{4}$/.test(control.value) ? { format: true } : null
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [nccnVersionInputTypeOption],
      validators: [{ name: 'format', validation: NccnVersionValidator }],
      validationMessages: [
        {
          name: 'format',
          message:
            'The NCCN Guideline version must be in the format {version number}.{year}.',
        },
      ],
    }),
  ],
})
export class CvcNccnVersionInputTypeModule {}

import { ChangeDetectionStrategy, Component } from '@angular/core'
import { UntypedFormControl } from '@angular/forms'
import { FieldType } from '@ngx-formly/core'
import { TypeOption } from '@ngx-formly/core/lib/models'

@Component({
  selector: 'cvc-textarea-base-type',
  templateUrl: './textarea-base.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaBaseType extends FieldType<any> {
  defaultOptions = {
    templateOptions: {
      autosize: {
        minRows: 2,
        maxRows: 20,
      },
    },
  }
}

export const texareaBaseTypeOption: TypeOption = {
  name: 'cvc-textarea',
  component: TextareaBaseType,
  wrappers: ['form-field'],
}

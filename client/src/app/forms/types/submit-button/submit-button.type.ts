import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FieldType } from '@ngx-formly/core'

@Component({
  selector: 'cvc-submit-button-type',
  templateUrl: './submit-button.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class SubmitButtonComponent extends FieldType<any> {
  defaultOptions = {
    templateOptions: {
      submitLabel: 'Submit',
      submitSize: 'small',
    },
  }

  constructor() {
    super()
  }
}

export const SubmitButtonTypeOption = {
  name: 'submit-button',
  component: SubmitButtonComponent,
}

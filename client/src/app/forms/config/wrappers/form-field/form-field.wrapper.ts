import { Component } from '@angular/core'
import { FieldWrapper } from '@ngx-formly/core'

@Component({
  selector: 'cvc-form-field-wrapper',
  templateUrl: './form-field.wrapper.html',
  styleUrls: ['./form-field.wrapper.less'],
})
export class FormFieldWrapper extends FieldWrapper {
  get errorState() {
    return this.showError ? 'error' : ''
  }
}

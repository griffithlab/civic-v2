import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-nz-form-field',
  templateUrl: './cvc-form-field.wrapper.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFormFieldWrapper extends FieldWrapper {
  get errorState() {
    return this.showError ? 'error' : '';
  }
}

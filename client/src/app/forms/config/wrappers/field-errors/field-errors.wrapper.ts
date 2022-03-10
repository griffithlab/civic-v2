import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { WrapperOption } from '@ngx-formly/core/lib/services/formly.config';

@Component({
  selector: 'cvc-field-errors-wrapper',
  templateUrl: './field-errors.wrapper.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldErrorsWrapper extends FieldWrapper {
  get errorState() {
    return this.showError ? 'error' : '';
  }
}

export const FieldErrorsWrapperOption: WrapperOption = {
  name: 'cvc-field-errors',
  component: FieldErrorsWrapper,
}

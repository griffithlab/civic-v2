import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

@Component({
  selector: 'cvc-submit-button-type',
  templateUrl: './submit-button.type.html',
  styleUrls: ['./submit-button.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitButtonComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      submitLabel: 'Submit',
      submitSize: 'small'
    }
  }

  constructor() {
    super();
  }
}

export const SubmitButtonTypeOption: TypeOption = {
  name: 'submit-button',
  component: SubmitButtonComponent
}

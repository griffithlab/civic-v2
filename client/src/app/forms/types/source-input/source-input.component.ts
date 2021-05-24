import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-source-input',
  templateUrl: './source-input.component.html',
  styleUrls: ['./source-input.component.less']
})
export class SourceInputComponent extends FieldType {
  constructor() {
    super();
  }
}

export const SourceInputType = {
  name: 'source-input',
  component: SourceInputComponent,
  wrappers: ['form-field'],
}

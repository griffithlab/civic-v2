import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-multi-field',
  templateUrl: './multi-field.type.html',
  styleUrls: ['./multi-field.type.less'],
})
export class MultiFieldComponent extends FieldArrayType {
  defaultOptions = {
    templateOptions: {
      maxLength: 0, // zero maxLength indicates no maxLength
    }
  }

  constructor() {
    super();
  }

  addField(e: MouseEvent): void {
    if (e) { e.preventDefault(); } // prevent form submit
    this.add();
  }
}

export const MultiFieldType = {
  name: 'multi-field',
  component: MultiFieldComponent,
}

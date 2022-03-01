import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-multi-field-type',
  templateUrl: './multi-field.type.html',
  styleUrls: ['./multi-field.type.less'],
})
export class MultiFieldType extends FieldArrayType {
  defaultOptions = {
    templateOptions: {
      maxCount: 0, // zero maxCount indicates no maxCount
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

export const MultiFieldTypeOption = {
  name: 'multi-field',
  component: MultiFieldType,
  // wrappers: ['cvc-field-errors']
}

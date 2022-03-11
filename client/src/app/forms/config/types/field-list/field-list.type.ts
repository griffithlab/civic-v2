import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

@Component({
  selector: 'cvc-field-list',
  templateUrl: './field-list.type.html',
  styleUrls: ['./field-list.type.less']
})
export class FieldListType extends FieldArrayType {

  constructor() {
    super();
  }

  defaultOptions = {
    wrappers: ['form-field'],
    templateOptions: {
      display: 'block',
      addButtonLabel: 'Add Another',
      showRemoveButtons: false,
    },
    fieldArray: {
      templateOptions: {
      }
    }
  };

  ngOnInit(): void {
    // provide add/remove functions that can be called from
    // field-list's child components
    this.to.add = this.add.bind(this);
    this.to.remove = this.remove.bind(this);
  }

  // addField(e: MouseEvent): void {
  //   if (e) { e.preventDefault(); }
  //   this.add();
  // }
}

export const fieldListTypeOption: TypeOption = {
  name: 'field-list',
  component: FieldListType,
}

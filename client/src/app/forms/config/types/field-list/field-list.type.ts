import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

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
    defaultValue: [],
    templateOptions: {
      display: 'block',
      addFirstLabel: 'Add',
      addLabel: 'Add Another',
      showRemoveButtons: true,
    },
    fieldArray: {
      templateOptions: {
        hideLabel: true,
        isFieldListItem: true,
        removeSelf: null,
      }
    }
  };

  ngOnInit(): void {
    // provide remove function for list items
    this.field!.fieldArray!.templateOptions!.removeSelf = this.remove.bind(this);
  }
}

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
      showRemoveButtons: false,
    },
    fieldArray: {
      templateOptions: {
        hideLabel: true,
        isFieldListItem: true,
        removeSelf: null, // placeholder for remove fn
      }
    }
  };

  ngOnInit(): void {
    // provide bound remove function for list items to remove themselves
    this.field!.fieldArray!.templateOptions!.removeSelf = this.remove.bind(this);
  }
}

import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-multi-field-type',
  templateUrl: './multi-field.type.html',
  styleUrls: ['./multi-field.type.less'],
})
export class MultiFieldType extends FieldArrayType implements OnInit {
  defaultOptions = {
    templateOptions: {
      maxCount: 0, // zero maxCount indicates no maxCount
    }
  }

  constructor() {
    super();
  }

  get errorState() {
    return this.showError ? 'error' : '';
  }

  addField(e: MouseEvent): void {
    if (e) { e.preventDefault(); } // prevent form submit
    this.add();
  }

  ngOnInit() {
    this.to.add = this.add.bind(this);
    this.to.remove = this.remove.bind(this);
    if(this.field.key === 'disease') {
      console.log('----- multi-field OnInit disease field:');
      console.log(this.field);
      console.log('----- multi-field OnInit disease formControl:');
      console.log(this.field.formControl);
      this.formControl.statusChanges.subscribe((s) => {
        console.log(`multi-field disease status: ${s}`)
      });
    }
  }
}

export const MultiFieldTypeOption = {
  name: 'multi-field',
  component: MultiFieldType,
  // wrappers: ['cvc-field-errors']
}

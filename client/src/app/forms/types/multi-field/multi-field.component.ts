import { Component } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';

export class RepeatType {
  name!: string;
  templateOptions!: { label?: string };
  fieldGroup!: FormlyFieldConfig[];
}

export interface RepeatFieldConfig extends FormlyFieldConfig {
  types: RepeatType[];
  defaultTypes: string[];
}

@Component({
  selector: 'cvc-multi-field',
  templateUrl: './multi-field.component.html',
  styleUrls: ['./multi-field.component.less'],
})
export class MultiFieldComponent extends FieldArrayType {
  constructor() {
    super();
  }

  addField(e?: MouseEvent): void {
    if (e) { e.preventDefault(); } // prevent form submit
    this.add();
  }
}

export const MultiFieldType = {
  name: 'multi-field',
  component: MultiFieldComponent,
}

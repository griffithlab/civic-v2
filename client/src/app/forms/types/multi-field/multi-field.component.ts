import { Component } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';

// export class MultiFieldArray {
//   name!: string;
//   templateOptions!: { label?: string };
//   fieldArray!: FormlyFieldConfig;
// }

// export class MultiFieldGroup {
//   name!: string;
//   templateOptions!: { label?: string };
//   fieldGroup!: FormlyFieldConfig[];
// }

// export interface MultiFieldConfig extends FormlyFieldConfig {
//   types: MultiFieldArray | MultiFieldGroup[];
//   defaultTypes: string[];
// }

@Component({
  selector: 'cvc-multi-field',
  templateUrl: './multi-field.component.html',
  styleUrls: ['./multi-field.component.less'],
})
export class MultiFieldComponent extends FieldArrayType {
  constructor() {
    super();
  }

  addField(e: MouseEvent): void {
    if (e) { e.preventDefault(); } // prevent form submit
    this.add(undefined, this.to.initialModel ? this.to.initialModel : undefined); // provide initial model if defined
  }
}

export const MultiFieldType = {
  name: 'multi-field',
  component: MultiFieldComponent,
}

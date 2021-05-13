import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig, FormlyFormBuilder } from '@ngx-formly/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiFieldComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}

export const MultiFieldType = {
  name: 'multi-field',
  component: MultiFieldComponent,
}

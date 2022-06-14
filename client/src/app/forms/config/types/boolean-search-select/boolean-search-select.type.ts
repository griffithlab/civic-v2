import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FieldType } from "@ngx-formly/core";
import { TypeOption } from "@ngx-formly/core/lib/services/formly.config";

interface BoolOpt {
  value: boolean | null,
  label: string
}

@Component({
  selector: 'cvc-boolean-search-select',
  templateUrl: './boolean-search-select.type.html',
  styleUrls: ['./boolean-search-select.type.less'],
})
export class BooleanSearchSelectType extends FieldType implements OnInit {
  formControl!: FormControl;
  valueControl!: FormControl;
  comparisonOptions!: BoolOpt[]

  ngOnInit(): void {
    this.valueControl = <FormControl> this.formControl.get('value')
    this.comparisonOptions = [
      {value: true, label: 'True'},
      {value: false, label: 'False'},
    ]
  }
}

export const BooleanSearchSelectTypeOption: TypeOption = {
  name: 'boolean-search-select',
  component: BooleanSearchSelectType,
  defaultOptions: {
    wrappers: ['form-field'],
    templateOptions: {
      required: true
    },
    fieldGroup: [
      {
        type: 'select',
        key: 'value',
        templateOptions: {
          required: true
        }
      },
    ],
  },
};
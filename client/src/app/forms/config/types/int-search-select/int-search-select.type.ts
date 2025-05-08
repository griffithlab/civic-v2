//import { Component, OnInit } from "@angular/core";
//import { FormControl } from "@angular/forms";
//import { IntSearchOperator } from "@app/generated/civic.apollo";
//import { FieldType } from "@ngx-formly/core";
//import { TypeOption } from "@ngx-formly/core/lib/services/formly.config";
//import { $enum } from "ts-enum-util";

//const intOpts = new Map<IntSearchOperator, string>([
  //[IntSearchOperator.Eq, '='],
  //[IntSearchOperator.Ge, '>='],
  //[IntSearchOperator.Gt, '>'],
  //[IntSearchOperator.Le, '<='],
  //[IntSearchOperator.Lt, '<'],
  //[IntSearchOperator.Ne, '!='],
//]);

//interface ComparisonSelectOption {
  //value: IntSearchOperator
  //label: string
//}

//@Component({
  //selector: 'cvc-int-search-select',
  //templateUrl: './int-search-select.type.html',
  //styleUrls: ['./int-search-select.type.less'],
//})
//export class IntSearchSelectType extends FieldType implements OnInit {
  //formControl!: FormControl;
  //valueControl!: FormControl
  //comparisonControl!: FormControl
  //comparisonOptions!: ComparisonSelectOption[]

  //ngOnInit(): void {
    //this.valueControl = <FormControl> this.formControl.get('value')
    //this.comparisonControl = <FormControl> this.formControl.get('comparisonOperator')
    //this.comparisonOptions = $enum(IntSearchOperator).map((val) => {
        //return { value: val, label: intOpts.get(val)! };
      //})
  //}
//}


//export const IntSearchSelectTypeOption: TypeOption = {
  //name: 'int-search-select',
  //component: IntSearchSelectType,
  //defaultOptions: {
    //wrappers: ['form-field'],
    //defaultValue: { comparisonOperator: null, value: null },
    //templateOptions: {
      //required: true
    //},
    //fieldGroup: [
      //{
        //type: 'select',
        //key: 'comparisonOperator',
        //defaultValue: IntSearchOperator.Eq,
        //templateOptions: {
          //required: true
        //}
      //},
      //{
        //type: 'input',
        //key: 'value',
        //validators: ['integer'],
        //templateOptions: {
          //required: true,
        //},
      //},
    //],
  //},
//};
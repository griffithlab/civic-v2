//import { Component, OnInit } from "@angular/core";
//import { FormControl } from "@angular/forms";
//import { IntSearchOperator, StringSearchOperator } from "@app/generated/civic.apollo";
//import { FieldType } from "@ngx-formly/core";
//import { TypeOption } from "@ngx-formly/core/lib/services/formly.config";
//import { $enum } from "ts-enum-util";

//const stringOpts = new Map<StringSearchOperator, string>([
  //[StringSearchOperator.Contains, 'Contains'],
  //[StringSearchOperator.DoesNotContain, 'Does Not Contain'],
  //[StringSearchOperator.Eq, 'Equals'],
  //[StringSearchOperator.Ne, 'Does Not Equal'],
  //[StringSearchOperator.StartsWith, 'Starts With'],
//]);

//interface ComparisonSelectOption {
  //value: StringSearchOperator
  //label: string
//}

//@Component({
  //selector: 'cvc-string-search-select',
  //templateUrl: './string-search-select.type.html',
  //styleUrls: ['./string-search-select.type.less'],
//})
//export class StringSearchSelectType extends FieldType implements OnInit {
  //formControl!: FormControl;
  //valueControl!: FormControl
  //comparisonControl!: FormControl
  //comparisonOptions!: ComparisonSelectOption[]

  //ngOnInit(): void {
    //this.valueControl = <FormControl> this.formControl.get('value')
    //this.comparisonControl = <FormControl> this.formControl.get('comparisonOperator')
    //this.comparisonOptions = $enum(StringSearchOperator).map((val) => {
        //return { value: val, label: stringOpts.get(val)! };
      //})
  //}
//}


//export const StringSearchSelectTypeOption: TypeOption = {
  //name: 'string-search-select',
  //component: StringSearchSelectType,
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
        //defaultValue: StringSearchOperator.StartsWith,
        //templateOptions: {
          //required: true
        //}
      //},
      //{
        //type: 'input',
        //key: 'value',
        //templateOptions: {
          //required: true,
          //minLength: 1
        //},
      //},
    //],
  //},
//};
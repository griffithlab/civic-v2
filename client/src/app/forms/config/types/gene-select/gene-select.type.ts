import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";

@Component({
  selector: 'cvc-gene-select',
  templateUrl: '@libs/ng-zorro-antd/select/src/select.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneSelectFieldType extends FieldType<FieldTypeConfig> {
  constructor() {
    super();
    this.defaultOptions = {
      templateOptions: {
        label: 'Gene',
        placeholder: 'None specified',
        options: []
      }
    }
  }

  // name = 'gene-select';
  // extends = 'select';
  // wrappers = ['form-field'];
  // defaultOptions = {
  //   templateOptions: {
  //     label: 'Gene',
  //     placeholder: 'None specified',
  //     options: []
  //   }
  // }
}

// export const geneSelectTypeOption: TypeOption = {
//   name: 'gene-select',
//   extends: 'select',
//   wrappers: ['form-field'],
//   defaultOptions: {
//     templateOptions: {
//       label: 'Gene',
//       placeholder: 'None specified',
//       options: []
//     }
//   }
// }

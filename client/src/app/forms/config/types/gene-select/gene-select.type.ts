import { TypeOption } from "@ngx-formly/core/lib/models";

export const geneSelectTypeOption: TypeOption = {
  name: 'gene-select',
  extends: 'cvc-select',
  wrappers: ['cvc-form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Gene',
      placeholder: 'None specified'
    }
  }
}

// @Component({
//   template: '',
//   selector: 'cvc-gene-select'
// })
// export class GeneSelectType extends FieldType<FieldTypeConfig> {

//   constructor() {
//     super();

//     this.defaultOptions = {
//       templateOptions: {
//         label: 'Gene',
//         placeholder: 'None specified.',
//       }
//     }

//   }
// }

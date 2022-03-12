import { TypeOption } from "@ngx-formly/core/lib/models";

export const geneSelectTypeOption: TypeOption = {
  name: 'gene-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Gene',
      placeholder: 'None specified',
      options: []
    }
  }
}

// export class GeneSelectTypeOption implements TypeOption {
//   name = 'gene-select';
//   extends = 'select';
//   wrappers = ['form-field'];
//   defaultOptions = {
//     templateOptions: {
//       label: 'Gene',
//       placeholder: 'None specified',
//       options: []
//     }
//   }
// }

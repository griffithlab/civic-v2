import { ConfigOption } from "@ngx-formly/core";

export class GeneSelectConfigFactory {
  constructor() {

  }

  get(): ConfigOption {
    return {
      types: [{
        name: 'gene-select',
        extends: 'select',
        defaultOptions: {
          templateOptions: {
            label: 'Gene',
            placeholder: 'None specified',
            options: []
          }
        }
      }]
    }
  }
}

// export class GeneSelectFieldType extends FieldType<FieldTypeConfig> {
//   constructor() {
//     super();
//     this.defaultOptions = {
//       templateOptions: {
//         label: 'Gene',
//         placeholder: 'None specified',
//         options: []
//       }
//     }
//   }

// }

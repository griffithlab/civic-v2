import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhenotypeSelectType } from './phenotype-select.type';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveComponentModule } from '@ngrx/component';

const configOption: ConfigOption = {
  types: [
    { // phenotype-select only
      name: 'phenotype-select',
      component: PhenotypeSelectType,
    },
    { // field-tag wrapper replaces select with phenotype-tag upon selection
      name: 'phenotype-select-tag',
      extends: 'phenotype-select',
      wrappers: ['field-tag']
    },
    { // select-tag field with base form-field label, validation
      name: 'phenotype-select-field',
      extends: 'phenotype-select-tag',
      wrappers: ['form-field', 'field-tag' ]
    },
    { // select-tag card with cvc-form-card
      name: 'phenotype-select-card',
      extends: 'phenotype-select-tag',
      wrappers: ['form-card', 'field-tag']
    }
  ]
}
@NgModule({
  declarations: [PhenotypeSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild(configOption),
    NzSelectModule,
  ]
})
export class CvcPhenotypeSelectTypeModule { }

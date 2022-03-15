import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { DrugSelectType } from './drug-select.type';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ReactiveComponentModule } from '@ngrx/component';

const configOption: ConfigOption = {
  types: [
    { // drug-select only
      name: 'drug-select',
      component: DrugSelectType,
    },
    { // field-tag wrapper replaces select with drug-tag upon selection
      name: 'drug-select-tag',
      extends: 'drug-select',
      wrappers: ['field-tag']
    },
    { // select-tag field with base form-field label, validation
      name: 'drug-select-field',
      extends: 'drug-select-tag',
      wrappers: ['form-field', 'field-tag' ]
    },
    { // select-tag card with cvc-form-card label, validation, helptext
      name: 'drug-select-card',
      extends: 'drug-select-tag',
      wrappers: ['form-card', 'field-tag']
    }
  ]
}

@NgModule({
  declarations: [DrugSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild(configOption),
    NzSelectModule,
    NzTypographyModule,
  ],
})
export class CvcDrugSelectTypeModule { }

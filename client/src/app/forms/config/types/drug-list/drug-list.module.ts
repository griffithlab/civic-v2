import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { CvcFormCardModule } from '../../wrappers/form-card/form-card.module';
import { CvcDrugSelectTypeModule } from '../drug-select/drug-select.module';
import { CvcFieldListTypeModule } from '../field-list/field-list.module';
import { drugListTypeOption } from './drug-list.type';

const configOption: ConfigOption = {
  types: [
    drugListTypeOption,
    {
      name: 'drug-list-field',
      extends: 'drug-list',
      wrappers: ['form-field']
    },
    {
      name: 'drug-list-card',
      extends: 'drug-list',
      wrappers: ['form-card']
    }
  ]
}

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild(configOption),
    CvcDrugSelectTypeModule,
    CvcFieldListTypeModule,
    CvcFormCardModule,
  ]
})
export class CvcDrugListTypeModule { }

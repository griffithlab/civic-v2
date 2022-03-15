import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { CvcFormCardModule } from '../../wrappers/form-card/form-card.module';
import { CvcPhenotypeSelectTypeModule } from '../phenotype-select/phenotype-select.module';
import { CvcFieldListTypeModule } from '../field-list/field-list.module';
import { phenotypeListTypeOption } from './phenotype-list.type';

const configOption: ConfigOption = {
  types: [
    phenotypeListTypeOption,
    {
      name: 'phenotype-list-field',
      extends: 'phenotype-list',
      wrappers: ['form-field']
    },
    {
      name: 'phenotype-list-card',
      extends: 'phenotype-list',
      wrappers: ['form-card']
    }
  ]
}

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild(configOption),
    CvcPhenotypeSelectTypeModule,
    CvcFieldListTypeModule,
    CvcFormCardModule,
  ]
})
export class CvcPhenotypeListTypeModule { }

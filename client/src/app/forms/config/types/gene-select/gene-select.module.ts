import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { CvcFormsModule } from '@app/forms/forms.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { GeneSelectConfigFactory } from './gene-select.type';

const configOption = new GeneSelectConfigFactory().get();

@NgModule({
  imports: [
    CommonModule,
    CvcFormsModule,
    NzSelectModule,
    FormlySelectModule, // needed for formlySelectOptions pipe
    FormlyModule.forChild(configOption)
      // FormlyModule.forChild({
    //   types: [
    //     {
    //       name: 'gene-select',
    //       extends: 'select',
    //       component: GeneSelectFieldType,
    //       wrappers: ['form-field']
    //     }
    //   ]
    // }),
  ],
})
export class CvcGeneSelectModule { }

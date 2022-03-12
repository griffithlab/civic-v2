import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { CvcFormsModule } from '@app/forms/forms.module';
import { GeneSelectFieldType } from './gene-select.type';

@NgModule({
  imports: [
    CommonModule,
    CvcFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'gene-select',
          extends: 'select',
          component: GeneSelectFieldType,
          wrappers: ['form-field']
        }
      ]
    }),
  ]
})
export class CvcGeneSelectModule { }

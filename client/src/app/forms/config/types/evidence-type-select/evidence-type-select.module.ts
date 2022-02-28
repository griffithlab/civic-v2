import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { evidenceTypeSelectTypeOption } from './evidence-type-select.type';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forChild({ types: [evidenceTypeSelectTypeOption] }),
    NzSelectModule,
  ]
})
export class CvcEvidenceTypeSelectTypeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiFieldAddBtnType, MultiFieldAddBtnTypeOption } from './multi-field-add-btn.type';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [MultiFieldAddBtnType],
  imports: [
    CommonModule,
    FormlyModule.forChild({ types: [MultiFieldAddBtnTypeOption] }),
    NzFormModule,
    NzButtonModule,
  ],
})
export class CvcMultiFieldAddBtnTypeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MultiFieldType, MultiFieldTypeOption } from './multi-field.type';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [MultiFieldType],
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule.forChild({ types: [MultiFieldTypeOption] }),
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
  ],
})
export class CvcMultiFieldTypeModule { }

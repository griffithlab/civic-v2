import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MultiFieldType, MultiFieldTypeOption } from './multi-field.type';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcFieldErrorsWrapper } from '@app/forms/config/wrappers/field-errors/field-errors.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [MultiFieldType],
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule.forChild({ types: [MultiFieldTypeOption] }),
    ReactiveFormsModule,
    CvcFieldErrorsWrapper,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NgxJsonViewerModule,
  ],
})
export class CvcMultiFieldTypeModule { }

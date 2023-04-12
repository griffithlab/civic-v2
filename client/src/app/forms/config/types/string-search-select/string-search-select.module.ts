import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CvcFormFieldWrapperModule } from '../../wrappers/form-field/form-field.module';
//import { StringSearchSelectType, StringSearchSelectTypeOption } from './string-search-select.type';
import { LetModule, PushModule } from '@ngrx/component';

@NgModule({
  //declarations: [StringSearchSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule,
    PushModule,
    //FormlyModule.forChild({ types: [StringSearchSelectTypeOption] }),
    NzSelectModule,
    NzInputModule,
    CvcFormFieldWrapperModule,
  ],
  //exports: [StringSearchSelectType]
})
export class CvcStringSearchSelectTypeModule { }
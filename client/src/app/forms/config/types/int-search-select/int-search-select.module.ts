import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { IntSearchSelectType, IntSearchSelectTypeOption } from './int-search-select.type';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CvcFormFieldWrapperModule } from '../../wrappers/form-field/form-field.module';
import { LetModule, PushModule } from '@ngrx/component';

@NgModule({
  //declarations: [IntSearchSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule,
    PushModule,
    //FormlyModule.forChild({ types: [IntSearchSelectTypeOption] }),
    NzSelectModule,
    NzInputModule,
    CvcFormFieldWrapperModule,
  ],
  //exports: [IntSearchSelectType]
})
export class CvcIntSearchSelectTypeModule { }
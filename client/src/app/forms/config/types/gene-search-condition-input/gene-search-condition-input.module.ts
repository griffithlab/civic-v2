import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetModule, PushModule } from '@ngrx/component';
//import { GeneSearchConditionInputType, GeneSearchConditionInputTypeOption } from './gene-search-condition-input.type';
import { CvcIntSearchSelectTypeModule } from '../int-search-select/int-search-select.module';
import { CvcStringSearchSelectTypeModule } from '../string-search-select/string-search-select.module';
import { CvcBooleanSearchSelectTypeModule } from '../boolean-search-select/boolean-search-select.module';

@NgModule({
  //declarations: [GeneSearchConditionInputType],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LetModule,
    PushModule,
    //FormlyModule.forChild({ types: [GeneSearchConditionInputTypeOption] }),
    NzSelectModule,
    CvcIntSearchSelectTypeModule,
    CvcStringSearchSelectTypeModule,
    CvcBooleanSearchSelectTypeModule
  ]
})
export class CvcGeneSearchConditionInputTypeModule { }
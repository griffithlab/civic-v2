import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ensembleVersionValidator, EnsemblInputType, ensemblInputTypeOption } from './ensembl-input.type';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@NgModule({
  declarations: [
    EnsemblInputType
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [ensemblInputTypeOption],
      validators: [ensembleVersionValidator],
    }),
    NzInputNumberModule,
  ]
})
export class CvcEnsemblInputTypeModule { }

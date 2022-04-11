import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ensemblVersionValidator, EnsemblInputType, ensemblInputTypeOption, ensemblVersionValidationMessage } from './ensembl-input.type';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [EnsemblInputType],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [ensemblInputTypeOption],
      validators: [ensemblVersionValidator],
      validationMessages: [ensemblVersionValidationMessage]
    }),
    NzInputNumberModule
  ]
})
export class CvcEnsemblInputTypeModule { }

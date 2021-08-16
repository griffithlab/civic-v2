import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceIdInputComponent, SourceIdInputType } from './source-id-input.type';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

const formlyConfig = {
  types: [SourceIdInputType]
}

@NgModule({
  declarations: [SourceIdInputComponent],
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(formlyConfig),
    NzFormModule,
    NzInputModule,
  ],
  exports: [SourceIdInputComponent]
})
export class SourceIdInputModule { }

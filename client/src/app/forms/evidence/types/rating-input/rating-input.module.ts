import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingInputComponent, RatingInputType } from './rating-input.type';
import { FormlyModule } from '@ngx-formly/core';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RatingInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forChild({ types: [RatingInputType] }),
    NzRateModule,
  ],
  exports: [RatingInputComponent]
})
export class RatingInputModule { }

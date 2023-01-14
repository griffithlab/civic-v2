import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingInputType, RatingInputTypeOption } from './rating-input.type';
import { FormlyModule } from '@ngx-formly/core';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RatingInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forChild({ types: [RatingInputTypeOption] }),
    NzRateModule,
  ],
})
export class CvcRatingInputTypeModule {}

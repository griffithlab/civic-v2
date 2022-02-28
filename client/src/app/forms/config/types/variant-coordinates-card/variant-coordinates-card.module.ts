import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantCoordinatesCardType, VariantCoordinatesCardTypeOption } from './variant-coordinates-card.type';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VariantCoordinatesCardType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({ types: [VariantCoordinatesCardTypeOption] }),
    NzCardModule,
  ],
})
export class CvcVariantCoordinatesCardTypeModule { }

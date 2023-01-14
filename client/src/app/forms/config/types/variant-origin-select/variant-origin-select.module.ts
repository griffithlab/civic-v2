import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { variantOriginSelectTypeOption } from './variant-origin-select.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forChild({ types: [variantOriginSelectTypeOption] }),
  ],
})
export class CvcVariantOriginSelectTypeModule {}

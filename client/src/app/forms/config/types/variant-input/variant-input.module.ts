import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantInputType, variantInputTypeOption } from './variant-input.type';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VariantInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({ types: [variantInputTypeOption] }),
    NzSelectModule,
    CvcVariantTagModule,
  ]
})
export class CvcVariantInputTypeModule { }

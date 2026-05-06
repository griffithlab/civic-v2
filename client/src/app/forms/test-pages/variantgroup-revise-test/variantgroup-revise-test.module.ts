import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantgroupReviseTestPage } from './variantgroup-revise-test.page';
import { CvcVariantgroupReviseFormModule } from '@app/forms/config/variantgroup-revise/variantgroup-revise.form.module';



@NgModule({
  declarations: [
    VariantgroupReviseTestPage
  ],
  imports: [
    CommonModule,
    CvcVariantgroupReviseFormModule,
  ],
  exports: [
    VariantgroupReviseTestPage
  ]
})
export class VariantgroupReviseTestModule { }

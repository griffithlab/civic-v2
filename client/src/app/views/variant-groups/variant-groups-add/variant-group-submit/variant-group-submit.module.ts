import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupSubmitPage } from './variant-group-submit.page';
import { VariantGroupSubmitFormModule } from '@app/forms/variant-group-submit/variant-group-submit.module';

@NgModule({
  declarations: [
    VariantGroupSubmitPage
  ],
  imports: [
    CommonModule,
    VariantGroupSubmitFormModule,
  ]
})
export class VariantGroupSubmitModule { }

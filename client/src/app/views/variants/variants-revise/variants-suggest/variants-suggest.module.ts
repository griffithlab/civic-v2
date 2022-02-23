import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsSuggestPage } from './variants-suggest.page';
import { VariantReviseModule } from '@app/forms/variants/forms/variant-revise/variant-revise.module';

@NgModule({
  declarations: [VariantsSuggestPage],
  imports: [
    CommonModule,
    VariantReviseModule,
  ]
})
export class VariantsSuggestModule { }

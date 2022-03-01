import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsSuggestPage } from './variants-suggest.page';
import { CvcVariantReviseFormModule } from '@app/forms/variant-revise/variant-revise.module';

@NgModule({
  declarations: [VariantsSuggestPage],
  imports: [
    CommonModule,
    CvcVariantReviseFormModule,
  ]
})
export class VariantsSuggestModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupSuggestPage } from './variant-group-suggest.page';
import { VariantGroupReviseModule } from '@app/forms/variant-group-revise/variant-group-revise.module';

@NgModule({
  declarations: [VariantGroupSuggestPage],
  imports: [CommonModule, VariantGroupReviseModule],
})
export class VariantGroupSuggestModule {}

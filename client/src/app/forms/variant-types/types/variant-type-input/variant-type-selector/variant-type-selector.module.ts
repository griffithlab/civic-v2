import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantTypeSelectorForm } from './variant-type-selector.form';



@NgModule({
  declarations: [VariantTypeSelectorForm],
  imports: [
    CommonModule
  ],
  exports: [VariantTypeSelectorForm]
})
export class VariantTypeSelectorModule { }

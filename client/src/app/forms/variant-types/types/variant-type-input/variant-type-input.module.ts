import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantTypeInputComponent, VariantTypeInputType } from './variant-type-input.type';
import { VariantTypeSelectorModule } from './variant-type-selector/variant-type-selector.module';
import { FormlyModule } from '@ngx-formly/core';

const formlyConfig = {
  types: [VariantTypeInputType]
}

@NgModule({
  declarations: [VariantTypeInputComponent],
  imports: [
    CommonModule,
    FormlyModule.forChild(formlyConfig),
    VariantTypeSelectorModule
  ],
  exports: [VariantTypeInputComponent]
})
export class VariantTypeInputModule { }

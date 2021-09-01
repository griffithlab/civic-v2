import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantTypeTypeaheadComponent, VariantTypeTypeaheadType } from './variant-type-typeahead.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';

const formlyConfig = {
  types: [VariantTypeTypeaheadType]
}

@NgModule({
  declarations: [VariantTypeTypeaheadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(formlyConfig),
    NzSelectModule,
  ],
  exports: [VariantTypeTypeaheadComponent]
})
export class VariantTypeTypeaheadModule { }

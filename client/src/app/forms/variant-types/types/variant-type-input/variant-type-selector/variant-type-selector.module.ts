import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantTypeSelectorForm } from './variant-type-selector.form';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { VariantTypeTypeaheadModule } from './variant-type-typeahead/variant-type-typeahead.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [VariantTypeSelectorForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlyNgZorroAntdModule,
    NzButtonModule,
    VariantTypeTypeaheadModule,
  ],
  exports: [VariantTypeSelectorForm]
})
export class VariantTypeSelectorModule { }

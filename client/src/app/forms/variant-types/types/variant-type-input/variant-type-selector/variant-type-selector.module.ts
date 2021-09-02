import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantTypeSelectorForm } from './variant-type-selector.form';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { VariantTypeTypeaheadModule } from './variant-type-typeahead/variant-type-typeahead.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MultiFieldAddBtnModule } from '@app/forms/shared/types/multi-field/multi-field-add-btn/multi-field-add-btn.module';

@NgModule({
  declarations: [VariantTypeSelectorForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlyNgZorroAntdModule,
    NzButtonModule,
    VariantTypeTypeaheadModule,
    MultiFieldAddBtnModule,
  ],
  exports: [VariantTypeSelectorForm]
})
export class VariantTypeSelectorModule { }

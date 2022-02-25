import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceSelectorForm } from './source-selector.form';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcSourceSelectorTypeaheadModule } from './source-selector-typeahead/source-selector-typeahead.module';
import { SourceSelectorLoaderModule } from './source-selector-loader/source-selector-loader.module';
import { CvcMultiFieldAddBtnModule } from '@app/forms/shared/types/multi-field/multi-field-add-btn/multi-field-add-btn.module';

@NgModule({
  declarations: [SourceSelectorForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyNgZorroAntdModule,
    NzButtonModule,
    SourceSelectorLoaderModule,
    CvcSourceSelectorTypeaheadModule,
    CvcMultiFieldAddBtnModule,
  ],
  exports: [SourceSelectorForm]
})
export class SourceSelectorModule { }

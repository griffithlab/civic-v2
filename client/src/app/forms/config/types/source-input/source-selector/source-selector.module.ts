import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceSelectorForm } from './source-selector.form';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcSourceSelectorTypeaheadTypeModule } from './source-selector-typeahead/source-selector-typeahead.module';
import { SourceSelectorLoaderModule } from './source-selector-loader/source-selector-loader.module';
import { CvcMultiFieldAddBtnTypeModule } from '@app/forms/config/types/multi-field/multi-field-add-btn/multi-field-add-btn.module';

@NgModule({
  declarations: [SourceSelectorForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    NzButtonModule,
    SourceSelectorLoaderModule,
    CvcSourceSelectorTypeaheadTypeModule,
    CvcMultiFieldAddBtnTypeModule,
  ],
  exports: [SourceSelectorForm]
})
export class CvcSourceSelectorFormModule { }

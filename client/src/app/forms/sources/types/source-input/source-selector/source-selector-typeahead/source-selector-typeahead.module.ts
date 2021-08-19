import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { TypeaheadSelectorComponent, TypeaheadSelectorType } from './source-selector-typeahead.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SourceSelectorLoaderModule } from '../source-selector-loader/source-selector-loader.module';

const formlyConfig = {
  types: [TypeaheadSelectorType]
}

@NgModule({
  declarations: [TypeaheadSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(formlyConfig),
    NzSelectModule,
    SourceSelectorLoaderModule
  ],
  exports: [TypeaheadSelectorComponent]
})
export class SourceSelectorTypeaheadModule { }

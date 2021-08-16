import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SourceLoaderModule } from '../source-loader/source-loader.module';
import { TypeaheadSelectorComponent, TypeaheadSelectorType } from './typeahead-selector.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

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
    SourceLoaderModule
  ],
  exports: [TypeaheadSelectorComponent]
})
export class TypeaheadSelectorModule { }

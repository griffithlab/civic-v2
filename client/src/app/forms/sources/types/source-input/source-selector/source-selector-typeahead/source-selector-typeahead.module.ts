import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SourceSelectorTypeaheadComponent } from './source-selector-typeahead.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SourceSelectorLoaderModule } from '../source-selector-loader/source-selector-loader.module';

@NgModule({
  declarations: [SourceSelectorTypeaheadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    SourceSelectorLoaderModule,
  ]
})
export class SourceSelectorTypeaheadModule { }

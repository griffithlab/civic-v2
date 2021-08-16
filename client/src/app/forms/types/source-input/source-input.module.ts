import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { SourceListItemModule } from './source-list-item/source-list-item.module';
import { SourceInputComponent, SourceInputType } from './source-input.type';
import { SourceSelectorModule } from './source-selector/source-selector.module';
import { SourceSelectorTypeaheadModule } from './source-selector-typeahead/source-selector-typeahead.module';
import { SourceSelectorLoaderModule } from './source-selector-loader/source-selector-loader.module';

const formlyConfig = {
  types: [SourceInputType]
}

@NgModule({
  declarations: [SourceInputComponent],
  imports: [
    CommonModule,
    FormlyModule.forChild(formlyConfig),
    SourceListItemModule,
    SourceSelectorModule,
    SourceSelectorLoaderModule,
    SourceSelectorTypeaheadModule,
  ],
  exports: [SourceInputComponent],
})
export class SourceInputModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { SourceListItemModule } from './source-list-item/source-list-item.module';
import { SourceInputComponent, SourceInputType } from './source-input.type';
import { SourceSelectorModule } from './source-selector/source-selector.module';
import { TypeaheadSelectorModule } from './source-selector-typeahead/source-selector-typeahead.module';

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
    TypeaheadSelectorModule,
  ],
  exports: [SourceInputComponent],
})
export class SourceInputModule { }

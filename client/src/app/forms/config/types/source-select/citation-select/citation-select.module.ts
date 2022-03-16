import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { CitationSelectType } from './citation-select.type';
import { ReactiveComponentModule } from '@ngrx/component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcCitationLoaderModule } from '../citation-loader/citation-loader.module';
// import { SourceSelectorLoaderModule } from '../source-selector-loader/source-selector-loader.module';
const configOption: ConfigOption = {
  types: [
    { // citation-select only
      name: 'citation-select',
      component: CitationSelectType,
    },
  ]
}

@NgModule({
  declarations: [CitationSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    NzSelectModule,
    CvcCitationLoaderModule,
    FormlyModule.forChild(configOption),

    NgxJsonViewerModule,
  ]
})
export class CvcCitationSelectModule { }

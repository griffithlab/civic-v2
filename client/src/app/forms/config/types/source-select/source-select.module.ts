import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CvcSourceSelectorFormModule } from './source-selector/source-selector.module';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { SourceSelectType } from './source-select.type';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcFieldTagWrapperModule } from '../../wrappers/field-tag/field-tag.module';
import { CvcFormCardModule } from '../../wrappers/form-card/form-card.module';
import { CvcCitationSelectModule } from './citation-select/citation-select.module';
import { NgxJsonViewerComponent, NgxJsonViewerModule } from 'ngx-json-viewer';

const configOption: ConfigOption = {
  types: [
    { // source-select only
      name: 'source-select',
      component: SourceSelectType,
    },
    { // field-tag wrapper replaces select with source-tag upon selection
      name: 'source-select-tag',
      extends: 'source-select',
      wrappers: ['field-tag']
    },
    { // select-tag field with base form-field label, validation
      name: 'source-select-field',
      extends: 'source-select-tag',
      wrappers: ['form-field', 'field-tag']
    },
    { // select-tag card with cvc-form-card label, validation, helptext
      name: 'source-select-card',
      extends: 'source-select-tag',
      wrappers: ['form-card', 'field-tag']
    }
  ]
}
@NgModule({
  declarations: [
    SourceSelectType
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild(configOption),
    NzSelectModule,
    NzSpaceModule,
    NzTypographyModule,
    NzTagModule,
    CvcFieldTagWrapperModule,
    CvcFormCardModule,
    CvcCitationSelectModule,

    NgxJsonViewerModule,
  ]
})
export class CvcSourceSelectModule { }

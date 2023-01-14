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
import { CvcCitationSelectModule } from './citation-select/citation-select.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';

const configOption: ConfigOption = {
  types: [
    {
      // source-select only
      name: 'source-select',
      component: SourceSelectType,
      wrappers: ['form-field'],
    },
  ],
};
@NgModule({
  declarations: [SourceSelectType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild(configOption),
    NzSelectModule,
    NzSpaceModule,
    NzTypographyModule,
    NzTagModule,
    CvcCitationSelectModule,
    CvcSourceTagModule,
  ],
})
export class CvcSourceSelectModule {}

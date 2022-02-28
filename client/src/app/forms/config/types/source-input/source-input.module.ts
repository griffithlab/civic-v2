import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceInputType, SourceInputTypeOption } from './source-input.type';
import { SourceSelectorModule } from './source-selector/source-selector.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [SourceInputType],
  imports: [
    CommonModule,
    FormlyModule.forChild({ types: [SourceInputTypeOption] }),
    SourceSelectorModule,
    CvcSourceTagModule,
  ],
})
export class CvcSourceInputTypeModule { }

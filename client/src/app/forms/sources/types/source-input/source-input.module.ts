import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { SourceInputComponent, SourceInputType } from './source-input.type';
import { SourceSelectorModule } from './source-selector/source-selector.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';

@NgModule({
  declarations: [SourceInputComponent],
  imports: [
    CommonModule,
    FormlyModule.forChild({ types: [SourceInputType] }),
    SourceSelectorModule,
    CvcSourceTagModule,
  ],
  exports: [SourceInputComponent],
})
export class SourceInputModule { }

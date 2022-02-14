import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceInputComponent } from './source-input.type';
import { SourceSelectorModule } from './source-selector/source-selector.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';

@NgModule({
  declarations: [SourceInputComponent],
  imports: [
    CommonModule,
    SourceSelectorModule,
    CvcSourceTagModule,
  ],
  exports: [SourceInputComponent],
})
export class SourceInputModule { }

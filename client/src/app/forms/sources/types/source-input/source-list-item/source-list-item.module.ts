import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceListItemComponent } from './source-list-item.component';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';

@NgModule({
  declarations: [SourceListItemComponent],
  imports: [
    CommonModule,
    CvcSourceTagModule
  ],
  exports: [SourceListItemComponent]
})
export class SourceListItemModule { }

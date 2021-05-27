import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceListItemComponent } from './source-list-item/source-list-item.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { SourceTagComponent } from './source-tag/source-tag.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [SourceListItemComponent, SourceTagComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzTypographyModule
  ],
  exports: [SourceListItemComponent, SourceTagComponent]
})
export class SourcesComponentsModule { }

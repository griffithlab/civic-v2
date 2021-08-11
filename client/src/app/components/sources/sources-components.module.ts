import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceListItemComponent } from './source-list-item/source-list-item.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { CvcSourceTagModule } from './source-tag/source-tag.module';

@NgModule({
  declarations: [SourceListItemComponent],
  imports: [
    SharedComponentsModule,
    CommonModule,
    NzTagModule,
    NzTypographyModule,
    CvcSourceTagModule,
  ],
  exports: [SourceListItemComponent]
})
export class SourcesComponentsModule { }

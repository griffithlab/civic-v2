import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionListComponent } from './revision-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { CvcRevisionValueDiffModule } from '../revision-value-diff/revision-value-diff.module';
import { RevisionListDiffModule } from '../revision-list-diff/revision-list-diff.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [RevisionListComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzListModule,
    NzCardModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule,
    NzAvatarModule,
    TimeagoModule.forChild(),
    CvcOrgSelectorBtnGroupModule,
    RevisionListDiffModule,
    CvcSourceTagModule,
    CvcRevisionValueDiffModule
  ],
  exports: [RevisionListComponent]
})
export class RevisionListModule { }

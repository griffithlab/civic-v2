import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TimeagoModule } from 'ngx-timeago';

import { GenesRevisionsPage } from './genes-revisions.page';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { CvcGeneDescriptionRevisionModule } from '@app/components/genes/gene-description-revision/gene-description-revision.module';
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { RevisionListDiffModule } from '@app/components/revisions/revision-list-diff/revision-list-diff.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';

@NgModule({
  declarations: [GenesRevisionsPage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzListModule,
    NzCardModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule,
    NzAvatarModule,
    TimeagoModule.forChild(),
    CvcOrgSelectorBtnGroupModule,
    CvcGeneDescriptionRevisionModule,
    CvcParticipantListModule,
    RevisionListDiffModule,
    CvcSourceTagModule
  ]
})
export class GenesRevisionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { RevisionsListAndFilterComponent } from './revisions-list-and-filter.component';
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { RevisionListModule } from '@app/components/revisions/revision-list/revision-list.module';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@NgModule({
  declarations: [RevisionsListAndFilterComponent],
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
    NzEmptyModule,
    CvcParticipantListModule,
    RevisionListModule,
  ],
  exports: [RevisionsListAndFilterComponent]
})
export class RevisionsListAndFilterModule { }

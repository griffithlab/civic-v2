import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcCommentTextareaTypeModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { EvidenceReviseRoutingModule } from './evidence-revise-routing.module';
import { EvidenceReviseView } from './evidence-revise.view';

@NgModule({
  declarations: [EvidenceReviseView],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    EvidenceReviseRoutingModule,

    NzPageHeaderModule,
    NzSpaceModule,
    NzGridModule,
    NzIconModule,
    NzTypographyModule,
    NzSpaceModule,
    CvcMolecularProfileTagModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcCommentTextareaTypeModule,
    CvcLoginPromptModule,
  ],
})
export class EvidenceReviseModule {}

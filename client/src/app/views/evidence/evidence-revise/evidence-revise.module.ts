import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceReviseRoutingModule } from './evidence-revise-routing.module';
import { EvidenceReviseView } from './evidence-revise.view';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcCommentTextareaTypeModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module';
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module';

@NgModule({
  declarations: [EvidenceReviseView],
  imports: [
    CommonModule,
    EvidenceReviseRoutingModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzIconModule,
    NzTypographyModule,
    NzSpaceModule,
    CvcMolecularProfileTagModule,
    CvcSectionNavigationModule,
    CvcCommentTextareaTypeModule,
    CvcLoginPromptModule,
    ReactiveComponentModule,
    NzGridModule
  ]
})
export class EvidenceReviseModule { }

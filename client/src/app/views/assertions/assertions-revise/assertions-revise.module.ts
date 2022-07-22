import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssertionsReviseRoutingModule } from './assertions-revise-routing.module';
import { AssertionsReviseView } from './assertions-revise.view';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcCommentTextareaTypeModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module';
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module';

@NgModule({
  declarations: [AssertionsReviseView],
  imports: [
    CommonModule,
    AssertionsReviseRoutingModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzIconModule,
    NzTypographyModule,
    NzSpaceModule,
    CvcMolecularProfileTagModule,
    CvcSectionNavigationModule,
    CvcCommentTextareaTypeModule,
    ReactiveComponentModule,
    NzGridModule,
    CvcLoginPromptModule
  ]
})
export class AssertionsReviseModule { }

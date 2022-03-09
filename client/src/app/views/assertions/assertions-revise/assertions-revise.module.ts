import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssertionsReviseRoutingModule } from './assertions-revise-routing.module';
import { AssertionsReviseView } from './assertions-revise.view';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcCommentTextareaTypeModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module';

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
    CvcGeneTagModule,
    CvcVariantTagModule,
    CvcSectionNavigationModule,
    CvcCommentTextareaTypeModule,
  ]
})
export class AssertionsReviseModule { }

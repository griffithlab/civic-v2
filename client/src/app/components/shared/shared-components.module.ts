import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { TimeagoModule } from 'ngx-timeago';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { OrgSelectorBtnGroupComponent } from './org-selector-btn-group/org-selector-btn-group.component';

@NgModule({
  declarations: [
    CommentListComponent,
    CommentAddComponent,
    OrgSelectorBtnGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzCommentModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzListModule,
    NzSpaceModule,
    NzTypographyModule,
    TimeagoModule.forChild(),
    NgxJsonViewerModule
  ],
  exports: [
    CommentListComponent,
    CommentAddComponent,
    OrgSelectorBtnGroupComponent,
  ]
})

export class SharedComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { TimeagoModule } from 'ngx-timeago';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import { OrgSelectorBtnGroupComponent } from './org-selector-btn-group/org-selector-btn-group.component';
import { OrgSelectorBtnDirective } from './org-selector-btn-group/org-selector-btn.directive';
import { FormErrorsAlertComponent } from './form-errors-alert/form-errors-alert.component';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { FlaggableComponent } from './flaggable/flaggable.component';
import { LifecycleActionsComponent } from './lifecycle-actions/lifecycle-actions.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  declarations: [
    CommentListComponent,
    CommentAddComponent,
    OrgSelectorBtnGroupComponent,
    OrgSelectorBtnDirective,
    FormErrorsAlertComponent,
    FormButtonsComponent,
    FlaggableComponent,
    LifecycleActionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzAlertModule,
    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzCardModule,
    NzCommentModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    NzMenuModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzListModule,
    NzSpaceModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    TimeagoModule.forChild(),
    NgxJsonViewerModule
  ],
  exports: [
    CommentListComponent,
    CommentAddComponent,
    OrgSelectorBtnGroupComponent,
    OrgSelectorBtnDirective,
    FormErrorsAlertComponent,
    FormButtonsComponent,
    FlaggableComponent,
    LifecycleActionsComponent,
  ]
})

export class SharedComponentsModule { }

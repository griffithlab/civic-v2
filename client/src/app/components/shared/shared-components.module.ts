import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [
    CommentListComponent,
  ],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzCommentModule,
    NzFormModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzListModule,
    NzSpaceModule,
    NzTypographyModule,
    TimeagoModule.forChild()
  ],
  exports: [
    CommentListComponent,
  ]
})

export class SharedComponentsModule { }

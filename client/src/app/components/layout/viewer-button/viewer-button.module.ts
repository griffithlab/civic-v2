import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcViewerButtonComponent } from './viewer-button.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcUserAvatarModule } from '@app/components/users/user-avatar/user-avatar.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [CvcViewerButtonComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzDropDownModule,
    RouterModule,
    NzSpaceModule,
    NzIconModule,
    NzBadgeModule,
    NzToolTipModule,
    CvcUserAvatarModule
  ],
  exports: [CvcViewerButtonComponent]
})
export class CvcViewerButtonModule { }

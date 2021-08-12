import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcUserCardComponent } from './user-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcUserAvatarModule } from '../user-avatar/user-avatar.module';

@NgModule({
  declarations: [CvcUserCardComponent],
  imports: [
    CommonModule,
    NzCardModule,
    CvcUserAvatarModule,
  ],
  exports: [CvcUserCardComponent]
})
export class CvcUserCardModule { }

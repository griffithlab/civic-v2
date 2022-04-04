import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcUserCardComponent } from './user-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcUserAvatarModule } from '../user-avatar/user-avatar.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcUserCardComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzIconModule,
    CvcUserAvatarModule,
    CvcLinkTagModule
  ],
  exports: [CvcUserCardComponent]
})
export class CvcUserCardModule { }

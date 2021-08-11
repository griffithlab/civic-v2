import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcOrganizationPopoverComponent } from './organization-popover.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcLinkTagModule } from '@app/components/shared/cvc-link-tag/cvc-link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcUserAvatarModule } from '@app/components/shared/user-avatar/user-avatar.module';

@NgModule({
  declarations: [CvcOrganizationPopoverComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
    CvcUserAvatarModule,
  ],
  exports: [CvcOrganizationPopoverComponent]
})
export class CvcOrganizationPopoverModule { }

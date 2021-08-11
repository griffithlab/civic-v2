import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcOrganizationPopoverComponent } from './organization-popover.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcLinkTagModule } from '@app/components/shared/cvc-link-tag/cvc-link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcUserAvatarModule } from '@app/components/shared/user-avatar-r/user-avatar.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [CvcOrganizationPopoverComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
    CvcUserAvatarModule,
  ],
  exports: [CvcOrganizationPopoverComponent]
})
export class CvcOrganizationPopoverModule { }

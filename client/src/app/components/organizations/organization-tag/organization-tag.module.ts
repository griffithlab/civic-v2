import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcOrganizationTagComponent } from './organization-tag.component'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcOrganizationPopoverModule } from '@app/components/organizations/organization-popover/organization-popover.module'
import { NzPopoverModule } from 'ng-zorro-antd/popover'

@NgModule({
  declarations: [CvcOrganizationTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzIconModule,
    NzPopoverModule,
    CvcOrganizationPopoverModule,
  ],
  exports: [CvcOrganizationTagComponent],
})
export class CvcOrganizationTagModule {}

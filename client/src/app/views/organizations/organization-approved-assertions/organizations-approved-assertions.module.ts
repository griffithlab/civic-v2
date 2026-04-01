import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { OrganizationsApprovedAssertionsComponent } from './organizations-approved-assertions.component'
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module'

@NgModule({
  declarations: [OrganizationsApprovedAssertionsComponent],
  imports: [CommonModule, CvcAssertionsTableModule, NzIconModule],
})
export class OrganizationsApprovedAssertionsModule {}

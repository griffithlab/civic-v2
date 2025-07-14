import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { OrganizationsEndorsedAssertionsComponent } from './organizations-endorsed-assertions.component'
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module'

@NgModule({
  declarations: [OrganizationsEndorsedAssertionsComponent],
  imports: [CommonModule, CvcAssertionsTableModule, NzIconModule],
})
export class OrganizationsEndorsedAssertionsModule {}

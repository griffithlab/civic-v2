import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PendingAssertionsPage } from './pending-assertions.page'
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module'

@NgModule({
  declarations: [PendingAssertionsPage],
  imports: [CommonModule, CvcAssertionsTableModule],
})
export class PendingAssertionsModule {}

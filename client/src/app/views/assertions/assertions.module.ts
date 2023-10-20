import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AssertionsRoutingModule } from './assertions-routing.module'
import { AssertionsView } from './assertions.view'
import { AssertionsReviseModule } from './assertions-revise/assertions-revise.module'

@NgModule({
  declarations: [AssertionsView],
  imports: [CommonModule, AssertionsRoutingModule, AssertionsReviseModule],
  exports: [AssertionsView],
})
export class AssertionsModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AssertionsRoutingModule } from './assertions-routing.module'
import { AssertionsView } from './assertions.view'
import { AssertionsReviseModule } from './assertions-revise/assertions-revise.module'
import { AssertionsEndorsementsModule } from './assertions-detail/assertions-endorsements/assertions-endorsements.module'

@NgModule({
  declarations: [AssertionsView],
  imports: [CommonModule, AssertionsRoutingModule, AssertionsReviseModule, AssertionsEndorsementsModule],
  exports: [AssertionsView],
})
export class AssertionsModule {}

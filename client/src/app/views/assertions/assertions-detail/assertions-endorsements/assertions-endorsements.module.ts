import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionsEndorsementsPage } from './assertions-endorsements.page'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { CvcEndorsementListComponent } from '@app/components/endorsements/endorsement-list/endorsement-list.component'

@NgModule({
  declarations: [AssertionsEndorsementsPage],
  imports: [CommonModule, CvcEndorsementListComponent, CvcAutoHeightDivModule],
  exports: [AssertionsEndorsementsPage],
})
export class AssertionsEndorsementsModule {}

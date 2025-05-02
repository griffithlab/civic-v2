import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionsEndorsementsPage } from './assertions-endorsements.page'
import { CvcEndorsementListModule } from '../../../../components/endorsements/endorsement-list/endorsement-list.module'
import { CvcAutoHeightDivModule } from '../../../../directives/auto-height-div/auto-height-div.module'
@NgModule({
  declarations: [AssertionsEndorsementsPage],
  imports: [CommonModule, CvcEndorsementListModule, CvcAutoHeightDivModule],
  exports: [AssertionsEndorsementsPage],
})
export class AssertionsEndorsementsModule {}

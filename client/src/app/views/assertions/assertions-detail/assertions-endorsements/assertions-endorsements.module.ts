import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionsEndorsementsPage } from './assertions-endorsements.page'
import { CvcEndorsementListModule } from '../../../../components/endorsements/endorsement-list/endorsement-list.module'

@NgModule({
  declarations: [AssertionsEndorsementsPage],
  imports: [CommonModule, CvcEndorsementListModule],
  exports: [AssertionsEndorsementsPage],
})
export class AssertionsEndorsementsModule {}

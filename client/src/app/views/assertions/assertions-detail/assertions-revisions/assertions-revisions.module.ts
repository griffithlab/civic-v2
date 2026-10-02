import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcRevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module'
import { AssertionsRevisionsPage } from './assertions-revisions.page'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzBadgeModule } from 'ng-zorro-antd/badge'

@NgModule({
  declarations: [AssertionsRevisionsPage],
  imports: [
    CommonModule,
    NzTabsModule,
    NzBadgeModule,
    CvcRevisionsListAndFilterModule
  ],
  exports: [AssertionsRevisionsPage],
})
export class AssertionsRevisionsModule {}

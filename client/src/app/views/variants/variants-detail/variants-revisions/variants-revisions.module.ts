import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantsRevisionsPage } from './variants-revisions.page'
import { CvcRevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzBadgeModule } from 'ng-zorro-antd/badge'

@NgModule({
  declarations: [VariantsRevisionsPage],
  imports: [
    CommonModule,
    NzTabsModule,
    NzBadgeModule,
    CvcRevisionsListAndFilterModule,
  ],
  exports: [VariantsRevisionsPage],
})
export class VariantsRevisionsModule {}

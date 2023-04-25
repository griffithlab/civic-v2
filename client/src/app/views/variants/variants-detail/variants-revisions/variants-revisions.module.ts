import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantsRevisionsPage } from './variants-revisions.page'
import { CvcRevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module'

@NgModule({
  declarations: [VariantsRevisionsPage],
  imports: [CommonModule, CvcRevisionsListAndFilterModule],
  exports: [VariantsRevisionsPage],
})
export class VariantsRevisionsModule {}

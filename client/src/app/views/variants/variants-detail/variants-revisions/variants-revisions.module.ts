import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsRevisionsPage } from './variants-revisions.page';
import { RevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module';

@NgModule({
  declarations: [VariantsRevisionsPage],
  imports: [
    CommonModule,
    RevisionsListAndFilterModule
  ],
  exports: [VariantsRevisionsPage],
})
export class VariantsRevisionsModule { }

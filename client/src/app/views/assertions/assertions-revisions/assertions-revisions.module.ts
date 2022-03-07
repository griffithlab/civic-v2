import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module';
import { AssertionsRevisionsPage } from './assertions-revisions.page';

@NgModule({
  declarations: [AssertionsRevisionsPage],
  imports: [
    CommonModule,
    RevisionsListAndFilterModule,
  ],
  exports: [AssertionsRevisionsPage]
})
export class AssertionsRevisionsModule { }

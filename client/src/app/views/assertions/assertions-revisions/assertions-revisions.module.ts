import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module';
import { AssertionsRevisionsComponent } from './assertions-revisions.component';

@NgModule({
  declarations: [AssertionsRevisionsComponent],
  imports: [
    CommonModule,
    RevisionsListAndFilterModule,
  ],
  exports: [AssertionsRevisionsComponent]
})
export class AssertionsRevisionsModule { }

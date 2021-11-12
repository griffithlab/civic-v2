import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceRevisionsPage } from './evidence-revisions.page';
import { RevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module';

@NgModule({
  declarations: [EvidenceRevisionsPage],
  imports: [
    CommonModule,
    RevisionsListAndFilterModule
  ]
})
export class EvidenceRevisionsModule { }

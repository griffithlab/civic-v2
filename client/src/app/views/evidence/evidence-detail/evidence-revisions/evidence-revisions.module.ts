import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceRevisionsPage } from './evidence-revisions.page';
import { CvcRevisionsListAndFilterModule } from '@app/components/revisions/revisions-list-and-filter/revisions-list-and-filter.module';

@NgModule({
  declarations: [EvidenceRevisionsPage],
  imports: [
    CommonModule,
    CvcRevisionsListAndFilterModule
  ]
})
export class EvidenceRevisionsModule { }

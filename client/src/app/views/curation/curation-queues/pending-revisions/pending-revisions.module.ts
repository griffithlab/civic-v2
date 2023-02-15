import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingRevisionsPage } from './pending-revisions.page';
import { CvcRevisionsTableModule } from '@app/components/revisions/revisions-table/revisions-table.module';



@NgModule({
  declarations: [
    PendingRevisionsPage
  ],
  imports: [
    CommonModule,
    CvcRevisionsTableModule
  ]
})
export class PendingRevisionsModule { }

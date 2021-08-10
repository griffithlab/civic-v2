import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionsRoutingModule } from './revisions-routing.module';
import { RevisionsComponent } from './revisions.component';
import { RevisionsBrowseComponent } from './revisions-browse/revisions-browse.component';
import { RevisionsHomeModule } from './revisions-home/revisions-home.module';

@NgModule({
  declarations: [
    RevisionsComponent,
    RevisionsBrowseComponent
  ],
  imports: [
    CommonModule,
    RevisionsRoutingModule,
    RevisionsHomeModule,
  ],
  exports: [
    RevisionsBrowseComponent
  ]
})
export class RevisionsModule { }

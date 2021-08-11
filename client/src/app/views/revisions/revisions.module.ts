import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionsRoutingModule } from './revisions-routing.module';
import { RevisionsComponent } from './revisions.component';
import { RevisionsHomeModule } from './revisions-home/revisions-home.module';

@NgModule({
  declarations: [
    RevisionsComponent,
  ],
  imports: [
    CommonModule,
    RevisionsRoutingModule,
    RevisionsHomeModule,
  ],
  exports: [
  ]
})
export class RevisionsModule { }

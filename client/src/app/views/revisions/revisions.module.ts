import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsProviderModule } from '@app/icons-provider.module';
import { RevisionsRoutingModule } from './revisions-routing.module';
import { RevisionsComponent } from './revisions.component';
import { RevisionsBrowseComponent } from './revisions-browse/revisions-browse.component';


@NgModule({
  declarations: [
    RevisionsComponent,
    RevisionsBrowseComponent
  ],
  imports: [
    CommonModule,
    RevisionsRoutingModule,
    IconsProviderModule
  ],
  exports: [
    RevisionsBrowseComponent
  ]
})
export class RevisionsModule { }

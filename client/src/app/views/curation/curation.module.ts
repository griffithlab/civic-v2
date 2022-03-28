import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurationRoutingModule } from './curation-routing.module';
import { CurationView } from './curation.view';
import { CurationQueuesModule } from './curation-queues/curation-queues.module';
import { PendingSourcesModule } from './curation-queues/pending-sources/pending-sources.module';


@NgModule({
  declarations: [
    CurationView
  ],
  imports: [
    CommonModule,
    CurationRoutingModule,
    CurationQueuesModule,
    PendingSourcesModule,
  ]
})
export class CurationModule { }

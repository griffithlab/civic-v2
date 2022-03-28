import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurationQueuesRoutingModule } from './curation-queues-routing.module';
import { CurationQueuesView } from './curation-queues.view';


@NgModule({
  declarations: [
    CurationQueuesView
  ],
  imports: [
    CommonModule,
    CurationQueuesRoutingModule
  ]
})
export class CurationQueuesModule { }

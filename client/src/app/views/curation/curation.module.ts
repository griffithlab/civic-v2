import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CurationRoutingModule } from './curation-routing.module'
import { CurationView } from './curation.view'
import { CurationQueuesModule } from './curation-queues/curation-queues.module'
import { PendingSourcesModule } from './curation-queues/pending-sources/pending-sources.module'
import { PendingEvidenceModule } from './curation-queues/pending-evidence/pending-evidence.module'
import { PendingAssertionsModule } from './curation-queues/pending-assertions/pending-assertions.module'

@NgModule({
  declarations: [CurationView],
  imports: [
    CommonModule,
    CurationRoutingModule,
    CurationQueuesModule,
    PendingSourcesModule,
    PendingEvidenceModule,
    PendingAssertionsModule,
  ]
})
export class CurationModule {}

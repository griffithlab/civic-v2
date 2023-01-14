import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceRoutingModule } from './evidence-routing.module';
import { EvidenceView } from './evidence.view';

@NgModule({
  declarations: [EvidenceView],
  imports: [CommonModule, EvidenceRoutingModule],
  exports: [EvidenceView],
})
export class EvidenceModule {}

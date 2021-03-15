import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceRoutingModule } from './evidence-routing.module';
import { EvidenceComponent } from './evidence.component';


@NgModule({
  declarations: [EvidenceComponent],
  imports: [
    CommonModule,
    EvidenceRoutingModule
  ]
})
export class EvidenceModule { }

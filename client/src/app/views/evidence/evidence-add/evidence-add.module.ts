import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceAddRoutingModule } from './evidence-add-routing.module';
import { EvidenceAddView } from './evidence-add.view';


@NgModule({
  declarations: [EvidenceAddView],
  imports: [
    CommonModule,
    EvidenceAddRoutingModule
  ]
})
export class EvidenceAddModule { }

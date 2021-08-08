import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceCardComponent } from './evidence-card.component';



@NgModule({
  declarations: [EvidenceCardComponent],
  imports: [
    CommonModule
  ],
  exports: [EvidenceCardComponent]
})
export class EvidenceCardModule { }

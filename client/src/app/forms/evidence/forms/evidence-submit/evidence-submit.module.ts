import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceSubmitForm } from './evidence-submit.form';

@NgModule({
  declarations: [EvidenceSubmitForm],
  imports: [
    CommonModule
  ],
  exports: [EvidenceSubmitForm],
})
export class EvidenceSubmitFormModule { }

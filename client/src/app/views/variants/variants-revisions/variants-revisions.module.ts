import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsRevisionsPage } from '@app/views/evidence/variants-revisions/variants-revisions.component';

@NgModule({
  declarations: [VariantsRevisionsPage],
  imports: [
    CommonModule
  ],
  exports: [VariantsRevisionsPage],
})
export class VariantsRevisionsModule { }

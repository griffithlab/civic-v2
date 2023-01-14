import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEvidenceRatingComponent } from './evidence-rating.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcEvidenceRatingComponent],
  imports: [CommonModule, NzIconModule],
  exports: [CvcEvidenceRatingComponent],
})
export class CvcEvidenceRatingModule {}

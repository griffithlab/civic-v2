import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzCardModule } from 'ng-zorro-antd/card';
import { EvidenceSubmitPage } from './evidence-submit.page';
import { EvidenceSubmitFormModule } from '@app/forms/evidence-submit/evidence-submit.module';

@NgModule({
  declarations: [EvidenceSubmitPage],
  imports: [
    CommonModule,
    NzGridModule,
    NzSpaceModule,
    NzCardModule,
    NzSkeletonModule,
    EvidenceSubmitFormModule,
  ]
})
export class EvidenceSubmitModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceFlagsComponent } from './evidence-flags.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CvcFlagListModule } from '@app/components/flags/flag-list/flag-list.module';

@NgModule({
  declarations: [EvidenceFlagsComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzSpaceModule,
    NzSkeletonModule,
    CvcFlagListModule,
  ]
})
export class EvidenceFlagsModule { }

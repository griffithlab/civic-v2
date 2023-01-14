import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesFlagsPage } from './genes-flags.page';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CvcFlagListAndFilterModule } from '@app/components/flags/flag-list-and-filter/flag-list-and-filter.module';

@NgModule({
  declarations: [GenesFlagsPage],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzSpaceModule,
    NzSkeletonModule,
    CvcFlagListAndFilterModule,
  ],
})
export class GenesFlagsModule {}

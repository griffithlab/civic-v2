import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsFlagsPage } from './variants-flags.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcFlagListModule } from '@app/components/flags/flag-list/flag-list.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [VariantsFlagsPage],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzSpaceModule,
    NzSkeletonModule,
    NzIconModule,
    CvcFlagListModule,
  ],
  exports: [VariantsFlagsPage],
})
export class VariantsFlagsModule { }

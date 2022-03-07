import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CvcFlagListAndFilterModule } from '@app/components/flags/flag-list-and-filter/flag-list-and-filter.module';
import { AssertionsFlagsComponent } from './assertions-flags.component';

@NgModule({
  declarations: [AssertionsFlagsComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzSpaceModule,
    NzSkeletonModule,
    CvcFlagListAndFilterModule,
  ],
  exports: [AssertionsFlagsComponent],
})
export class AssertionsFlagsModule { }

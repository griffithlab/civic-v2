import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { AssertionSuggestPage } from './assertion-suggest.page';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcAssertionReviseFormModule } from '@app/forms/assertion-revise/assertion-revise.module';

@NgModule({
  declarations: [AssertionSuggestPage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzCardModule,
    NzSkeletonModule,
    NzSpaceModule,
    CvcAssertionReviseFormModule,
  ]
})
export class AssertionSuggestModule { }

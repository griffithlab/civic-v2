import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsSuggestPage } from './variants-suggest.page';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { VariantReviseModule } from '@app/forms/variants/forms/variant-revise/variant-revise.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [VariantsSuggestPage],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzSpaceModule,
    NzSkeletonModule,
    VariantReviseModule,
  ]
})
export class VariantsSuggestModule { }

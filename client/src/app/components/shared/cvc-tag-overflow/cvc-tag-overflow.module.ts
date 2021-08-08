import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcTagOverflowComponent } from './cvc-tag-overflow.component';
import { CvcTagListModule } from '../cvc-tag-list/cvc-tag-list.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';

@NgModule({
  declarations: [CvcTagOverflowComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzPopoverModule,

    CvcTagListModule,
    CvcDrugTagModule,
  ],
  exports: [CvcTagOverflowComponent]
})
export class CvcTagOverflowModule { }

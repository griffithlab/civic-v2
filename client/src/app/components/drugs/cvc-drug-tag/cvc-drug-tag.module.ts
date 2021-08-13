import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcDrugTagComponent } from './cvc-drug-tag.component';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcDrugPopoverModule } from '../cvc-drug-popover/cvc-drug-popover.module';

@NgModule({
  declarations: [CvcDrugTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,

    CvcDrugPopoverModule,
  ],
  exports: [CvcDrugTagComponent]
})
export class CvcDrugTagModule { }

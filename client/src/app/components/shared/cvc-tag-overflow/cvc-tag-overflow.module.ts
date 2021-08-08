import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcTagOverflowComponent } from './cvc-tag-overflow.component';
import { CvcTagListModule } from '../cvc-tag-list/cvc-tag-list.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@NgModule({
  declarations: [CvcTagOverflowComponent],
  imports: [
    CommonModule,
    CvcTagListModule,
    NzTagModule,
    NzPopoverModule
  ],
  exports: [CvcTagOverflowComponent]
})
export class CvcTagOverflowModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcPlainTagOverflowComponent } from './plain-tag-overflow.component';
import { CvcTagListModule } from '../tag-list/tag-list.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@NgModule({
  declarations: [CvcPlainTagOverflowComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzPopoverModule,
    CvcTagListModule,
  ],
  exports: [CvcPlainTagOverflowComponent]
})
export class CvcPlainTagOverflowModule { }

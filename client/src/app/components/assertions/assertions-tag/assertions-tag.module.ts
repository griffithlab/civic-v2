import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcAssertionTagComponent } from './assertion-tag.component';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcAssertionsPopoverModule } from '../assertions-popover/assertions-popover.module';

@NgModule({
  declarations: [CvcAssertionTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcAssertionsPopoverModule
  ],
  exports: [CvcAssertionTagComponent]
})
export class CvcAssertionsTagModule { }

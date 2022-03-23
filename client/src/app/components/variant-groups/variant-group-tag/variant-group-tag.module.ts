import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantGroupTagComponent } from './variant-group-tag.component';
import { RouterModule } from '@angular/router';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcVariantGroupPopoverModule } from '../variant-group-popover/variant-group-popover.module';

@NgModule({
  declarations: [CvcVariantGroupTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzPopoverModule,
    NzTagModule,
    NzIconModule,
    CvcVariantGroupPopoverModule
  ],
  exports: [CvcVariantGroupTagComponent]
})
export class CvcVariantGroupTagModule { }

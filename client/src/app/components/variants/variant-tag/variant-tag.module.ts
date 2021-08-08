import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantTagComponent } from './variant-tag.component';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
// import { CvcVariantPopoverModule } from '../cvc-variant-popover/cvc-variant-popover.module';

@NgModule({
  declarations: [CvcVariantTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,

    // CvcVariantPopoverModule,
  ],
  exports: [CvcVariantTagComponent]
})
export class CvcVariantTagModule { }

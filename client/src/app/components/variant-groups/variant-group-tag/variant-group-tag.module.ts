import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantGroupTagComponent } from './variant-group-tag.component';
import { RouterModule } from '@angular/router';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcVariantGroupTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzPopoverModule,
    NzTagModule,
    NzIconModule,
  ],
  exports: [CvcVariantGroupTagComponent]
})
export class CvcVariantGroupTagModule { }

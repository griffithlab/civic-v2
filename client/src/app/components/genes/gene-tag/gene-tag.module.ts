import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcGeneTagComponent } from './gene-tag.component';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { CvcGenePopoverModule } from '../gene-popover/gene-popover.module';

@NgModule({
  declarations: [CvcGeneTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,

    CvcGenePopoverModule,
  ],
  exports: [CvcGeneTagComponent]
})
export class CvcGeneTagModule { }

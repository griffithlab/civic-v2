import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcGeneTagComponent } from './gene-tag.component';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { CvcGenePopoverModule } from '../gene-popover/gene-popover.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  declarations: [CvcGeneTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    NzBadgeModule,
    CvcPipesModule,
    CvcGenePopoverModule,
  ],
  exports: [CvcGeneTagComponent]
})
export class CvcGeneTagModule { }

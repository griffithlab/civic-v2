import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcPhenotypeTagComponent } from './phenotype-tag.component';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcPhenotypePopoverModule } from '../phenotype-popover/phenotype-popover.module';

@NgModule({
  declarations: [CvcPhenotypeTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcPhenotypePopoverModule
  ],
  exports: [CvcPhenotypeTagComponent]
})
export class CvcPhenotypeTagModule { }

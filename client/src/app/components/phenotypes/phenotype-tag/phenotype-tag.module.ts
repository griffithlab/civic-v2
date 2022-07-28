import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcPhenotypePopoverModule } from '../phenotype-popover/phenotype-popover.module';
import { CvcPhenotypeTagComponent } from './phenotype-tag.component';

@NgModule({
  declarations: [CvcPhenotypeTagComponent],
  imports: [
    CommonModule,
    RouterModule,

    NzTagModule,
    NzPopoverModule,
    NzIconModule,

    CvcPhenotypePopoverModule,
    CvcPipesModule,
  ],
  exports: [CvcPhenotypeTagComponent]
})
export class CvcPhenotypeTagModule { }

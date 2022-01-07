import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcAssertionTagComponent } from './assertion-tag.component';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcAssertionsPopoverModule } from '../assertions-popover/assertions-popover.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [CvcAssertionTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcAssertionsPopoverModule,
    CvcPipesModule
  ],
  exports: [CvcAssertionTagComponent]
})
export class CvcAssertionsTagModule { }

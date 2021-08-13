import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcFlagTagComponent } from './flag-tag.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcFlagTagComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzIconModule,
  ],
  exports: [CvcFlagTagComponent]
})
export class CvcFlagTagModule { }

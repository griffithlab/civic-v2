import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcLinkTagComponent } from './cvc-link-tag.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [CvcLinkTagComponent],
  imports: [
    CommonModule,
    NzToolTipModule,
    NzTagModule
  ],
  exports: [CvcLinkTagComponent]
})
export class CvcLinkTagModule { }

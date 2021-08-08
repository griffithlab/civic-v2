import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcLinkTagComponent } from './cvc-link-tag.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcLinkTagComponent],
  imports: [
    CommonModule,
    NzToolTipModule,
    NzTagModule,
    NzIconModule
  ],
  exports: [CvcLinkTagComponent]
})
export class CvcLinkTagModule { }

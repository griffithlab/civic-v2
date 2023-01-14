import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcStatusTagComponent } from './status-tag.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcStatusTagComponent],
  imports: [CommonModule, NzTagModule, NzIconModule],
  exports: [CvcStatusTagComponent],
})
export class CvcStatusTagModule {}

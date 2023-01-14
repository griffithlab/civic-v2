import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEmptyRevisableComponent } from './empty-revisable.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcEmptyRevisableComponent],
  imports: [CommonModule, NzEmptyModule, NzIconModule],
  exports: [CvcEmptyRevisableComponent],
})
export class CvcEmptyRevisableModule {}

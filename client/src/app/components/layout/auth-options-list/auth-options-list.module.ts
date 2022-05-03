import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcAuthOptionsListComponent } from './auth-options-list.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcAuthOptionsListComponent],
  imports: [
    CommonModule,
    NzIconModule,
    NzListModule,
    NzButtonModule,
  ],
  exports: [CvcAuthOptionsListComponent]
})
export class CvcAuthOptionsListModule { }

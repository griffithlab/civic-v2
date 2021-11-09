import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDiffComponent } from './list-diff.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@NgModule({
  declarations: [ListDiffComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzListModule,
    NzGridModule,
    NzSpaceModule
  ],
  exports: [ListDiffComponent]
})
export class ListDiffModule { }

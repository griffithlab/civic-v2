import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionListDiffComponent } from './revision-list-diff.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@NgModule({
  declarations: [RevisionListDiffComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzListModule,
    NzGridModule,
    NzSpaceModule
  ],
  exports: [RevisionListDiffComponent]
})
export class RevisionListDiffModule { }

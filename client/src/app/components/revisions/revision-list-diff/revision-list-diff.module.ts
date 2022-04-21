import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionListDiffComponent } from './revision-list-diff.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [RevisionListDiffComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzListModule,
    NzGridModule,
    NzTagModule,
    NzSpaceModule,
    CvcPipesModule
  ],
  exports: [RevisionListDiffComponent]
})
export class RevisionListDiffModule { }

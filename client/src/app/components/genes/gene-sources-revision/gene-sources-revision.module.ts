import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcGeneSourcesRevisionComponent } from './gene-sources-revision.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [CvcGeneSourcesRevisionComponent],
  imports: [
    CommonModule,
    NzListModule,
    NzGridModule,
  ],
  exports: [CvcGeneSourcesRevisionComponent]
})
export class CvcGeneSourcesRevisionModule { }

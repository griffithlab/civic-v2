import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcGeneSourcesRevisionComponent } from './gene-sources-revision.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ListDiffModule } from '@app/components/shared/list-diff/list-diff.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';

@NgModule({
  declarations: [CvcGeneSourcesRevisionComponent],
  imports: [
    CommonModule,
    NzListModule,
    NzGridModule,
    ListDiffModule,
    CvcSourceTagModule
  ],
  exports: [CvcGeneSourcesRevisionComponent]
})
export class CvcGeneSourcesRevisionModule { }

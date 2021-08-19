import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcGeneDescriptionRevisionComponent } from './gene-description-revision.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [CvcGeneDescriptionRevisionComponent],
  imports: [
    CommonModule,
    NzGridModule,

  ],
  exports: [CvcGeneDescriptionRevisionComponent]
})
export class CvcGeneDescriptionRevisionModule { }

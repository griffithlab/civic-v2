import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesSuggestRevisionPage } from './genes-suggest-revision.page';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { GeneSuggestRevisionFormModule } from '@app/forms/genes/forms/gene-suggest-revision-form/gene-suggest-revision-form.module';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [GenesSuggestRevisionPage],
  imports: [
    CommonModule,
    NzGridModule,
    NzSpaceModule,
    NzSkeletonModule,
    NzCardModule,
    GeneSuggestRevisionFormModule,
  ]
})
export class GenesSuggestRevisionModule { }

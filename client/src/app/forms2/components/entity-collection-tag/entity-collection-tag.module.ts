import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEntityCollectionTagComponent } from './entity-collection-tag.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [
    CvcEntityCollectionTagComponent
  ],
  imports: [
    CommonModule,
    NzTagModule,
    NzTypographyModule,
    NzPopoverModule,
    NzIconModule,
    CvcPipesModule,
  ],
  exports: [
    CvcEntityCollectionTagComponent
  ]
})
export class CvcEntityCollectionTagModule { }

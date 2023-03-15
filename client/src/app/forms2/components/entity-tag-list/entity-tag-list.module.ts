import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcEntityCollectionTagModule } from '../entity-collection-tag/entity-collection-tag.module'
import { CvcEntityTagModule } from '../entity-tag/entity-tag.module'
import { EntityTagListComponent } from './entity-tag-list.component'

@NgModule({
  declarations: [EntityTagListComponent],
  imports: [
    CommonModule,
    NzIconModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    CvcPipesModule,
    CvcEntityTagModule,
    CvcEntityCollectionTagModule
  ],
  exports: [EntityTagListComponent],
})
export class CvcEntityTagListModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcVariantPopoverComponent } from './variant-popover.component'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcEntityChildCounts } from '@app/components/shared/entity-child-counts.component/entity-child-counts.component.component'

@NgModule({
  declarations: [CvcVariantPopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    NzIconModule,
    NzSpaceModule,
    CvcPipesModule,
    CvcFeatureTagModule,
    CvcLinkTagModule,
    CvcEntityChildCounts,
  ],
  exports: [CvcVariantPopoverComponent],
})
export class CvcVariantPopoverModule {}

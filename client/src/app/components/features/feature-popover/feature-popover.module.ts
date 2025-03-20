import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcFeaturePopoverComponent } from './feature-popover.component'
import { CvcEntityChildCounts } from '@app/components/shared/entity-child-counts.component/entity-child-counts.component.component'

@NgModule({
  declarations: [CvcFeaturePopoverComponent],
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
    CvcEntityChildCounts,
  ],
  exports: [CvcFeaturePopoverComponent],
})
export class CvcFeaturePopoverModule {}

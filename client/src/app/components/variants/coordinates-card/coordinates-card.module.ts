import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcCoordinatesCard } from './coordinates-card.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzGridModule } from 'ng-zorro-antd/grid'

@NgModule({
  declarations: [CvcCoordinatesCard],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    LetDirective,
    NzCardModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzGridModule,
    CvcPipesModule,
    CvcLinkTagModule,
    CvcEmptyRevisableModule,
  ],
  exports: [CvcCoordinatesCard],
})
export class CvcCoordinatesCardModule {}

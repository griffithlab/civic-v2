import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzStatisticModule } from 'ng-zorro-antd/statistic'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcStatsCardComponent } from './stats-card.component'

@NgModule({
  declarations: [CvcStatsCardComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzStatisticModule,
    NzTypographyModule,
    NzIconModule,
    NzGridModule,
    NzBadgeModule,
    NzToolTipModule,
    NzPopoverModule,
    CvcPipesModule,
  ],
  exports: [CvcStatsCardComponent],
})
export class CvcStatsCardModule {}

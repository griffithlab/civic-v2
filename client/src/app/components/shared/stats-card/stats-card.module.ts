import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzStatisticModule } from 'ng-zorro-antd/statistic'
import { NzSwitchModule } from 'ng-zorro-antd/switch'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcStatsCardComponent } from './stats-card.component'

@NgModule({
  declarations: [CvcStatsCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzCardModule,
    NzStatisticModule,
    NzTypographyModule,
    NzIconModule,
    NzGridModule,
    NzBadgeModule,
    NzToolTipModule,
    NzPopoverModule,
    NzSwitchModule,
    CvcPipesModule,
  ],
  exports: [CvcStatsCardComponent],
})
export class CvcStatsCardModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEndorsementListComponent } from './endorsement-list.component'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcEndorseAssertionButtonComponent } from '../endorse-assertion-button/endorse-assertion-button.component'
import { CvcCanPerformEndorsementActionsPipe } from '@app/components/endorsements/endorsement-pipes/can-perform-endorsement-actions.pipe'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { CvcEndorsementItemComponent } from '@app/components/endorsements/endorsement-item/endorsement-item.component'
import { CvcCanCreateEndorsementPipe } from '@app/components/endorsements/endorsement-pipes/can-create-endorsement.pipe'
import { CvcEndorsementActionTooltipPipe } from '@app/components/endorsements/endorsement-pipes/endorsement-action-tooltip.pipe'

@NgModule({
  declarations: [CvcEndorsementListComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzAlertModule,
    NzButtonModule,
    NzListModule,
    NzIconModule,
    NzAvatarModule,
    NzTypographyModule,
    NzEmptyModule,
    NzDividerModule,
    CvcPipesModule,
    CvcEndorseAssertionButtonComponent,
    CvcCanPerformEndorsementActionsPipe,
    CvcCanCreateEndorsementPipe,
    CvcEndorsementActionTooltipPipe,
    CvcEndorsementItemComponent,
  ],
  exports: [CvcEndorsementListComponent],
})
export class CvcEndorsementListModule {}

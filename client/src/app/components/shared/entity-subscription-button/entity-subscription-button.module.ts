import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEntitySubscriptionButtonComponent } from './entity-subscription-button.component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'

@NgModule({
  declarations: [CvcEntitySubscriptionButtonComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    LetDirective,
    PushPipe,
  ],
  exports: [CvcEntitySubscriptionButtonComponent],
})
export class CvcEntitySubscriptionButtonModule {}

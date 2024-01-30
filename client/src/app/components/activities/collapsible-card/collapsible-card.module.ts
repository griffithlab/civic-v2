import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcCollapsibleCardComponent } from './collapsible-card.component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'

@NgModule({
  declarations: [CvcCollapsibleCardComponent],
  imports: [
    CommonModule,
    PushPipe,
    LetDirective,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
  ],
  exports: [CvcCollapsibleCardComponent],
})
export class CvcCollapsibleCardModule {}

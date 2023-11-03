import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcModerateEntityButtonsComponent } from './moderate-entity-buttons.component'

@NgModule({
  declarations: [CvcModerateEntityButtonsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzToolTipModule,
    NzSpinModule,
    NzSpaceModule,
    NzGridModule,
    LetDirective,
    PushPipe,
  ],
  exports: [CvcModerateEntityButtonsComponent],
})
export class CvcModerateEntityButtonsModule {}

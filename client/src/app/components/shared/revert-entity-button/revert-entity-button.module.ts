import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcRevertEntityButtonComponent } from './revert-entity-button.component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzInputModule } from 'ng-zorro-antd/input'

@NgModule({
  declarations: [CvcRevertEntityButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzModalModule,
    NzInputModule,
    NzSpinModule,
    NzSpaceModule,
    LetDirective,
    PushPipe,
  ],
  exports: [CvcRevertEntityButtonComponent],
})
export class CvcRevertEntityButtonModule {}

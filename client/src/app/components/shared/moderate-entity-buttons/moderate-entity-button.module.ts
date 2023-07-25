import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcModerateEntityButtonsComponent } from './moderate-entity-button'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSpaceModule } from 'ng-zorro-antd/space'

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
    CvcOrgSelectorBtnGroupModule,
  ],
  exports: [CvcModerateEntityButtonsComponent],
})
export class CvcModerateEntityButtonsModule {}

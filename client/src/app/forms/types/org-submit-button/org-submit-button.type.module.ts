import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { FormlyModule } from '@ngx-formly/core'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcOrgSubmitButtonDirective } from './org-submit-button.directive'
import { CvcOrgSubmitButtonComponent } from './org-submit-button.type'

const typeConfig = {
  types: [
    { name: 'org-submit-button', component: CvcOrgSubmitButtonComponent },
  ],
}

@NgModule({
  declarations: [CvcOrgSubmitButtonComponent, CvcOrgSubmitButtonDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,
    FormlyModule.forChild(typeConfig),
    NzIconModule,
    NzAvatarModule,
    NzButtonModule,
    NzDropDownModule,
    NzToolTipModule,
  ],
  exports: [CvcOrgSubmitButtonComponent, CvcOrgSubmitButtonDirective],
})
export class CvcOrgSubmitButtonTypeModule {}

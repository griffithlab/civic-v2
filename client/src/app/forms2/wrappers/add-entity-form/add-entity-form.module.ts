import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PushModule } from '@ngrx/component'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { AddEntityFormHostDirective } from './add-entity-form.directive'
import { CvcAddEntityFormWrapper } from './add-entity-form.wrapper'

const wrapperConfig: ConfigOption = {
  wrappers: [{ name: 'add-entity-form', component: CvcAddEntityFormWrapper }],
}
@NgModule({
  declarations: [CvcAddEntityFormWrapper, AddEntityFormHostDirective],
  imports: [
    CommonModule,
    PushModule,
    FormlyModule.forChild(wrapperConfig),
    NzButtonModule,
    NzPopoverModule,
    NzIconModule,
    NzGridModule,
  ],
  exports: [CvcAddEntityFormWrapper],
})
export class CvcAddEntityFormWrapperModule {}

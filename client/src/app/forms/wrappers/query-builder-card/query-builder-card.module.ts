import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcQueryBuilderCardWrapper } from './query-builder-card.wrapper'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module'

const wrapperConfig: ConfigOption = {
  wrappers: [
    { name: 'query-builder-card', component: CvcQueryBuilderCardWrapper },
  ],
}

@NgModule({
  declarations: [CvcQueryBuilderCardWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(wrapperConfig),
    NzAlertModule,
    NzFormModule,
    NzGridModule,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzSpaceModule,
    NzIconModule,
    NzToolTipModule,
    CvcAutoHeightCardModule,
  ],
  exports: [CvcQueryBuilderCardWrapper],
})
export class CvcQueryBuilderCardModule {}

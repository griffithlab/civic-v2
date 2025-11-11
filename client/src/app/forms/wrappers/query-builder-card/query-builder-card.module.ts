import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcQueryBuilderCardWrapper } from './query-builder-card.wrapper'
import { NzSpaceModule } from 'ng-zorro-antd/space'

const wrapperConfig: ConfigOption = {
  wrappers: [
    { name: 'query-builder-card', component: CvcQueryBuilderCardWrapper },
  ],
}

@NgModule({
  declarations: [CvcQueryBuilderCardWrapper],
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule.forChild(wrapperConfig),
    NzGridModule,
    NzCardModule,
    NzCheckboxModule,
    NzSpaceModule,
  ],
  exports: [CvcQueryBuilderCardWrapper],
})
export class CvcQueryBuilderCardModule {}

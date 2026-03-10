import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcQueryStructCardWrapper } from './query-struct-card.wrapper'
import { NzSpaceModule } from 'ng-zorro-antd/space'

const wrapperConfig: ConfigOption = {
  wrappers: [
    { name: 'query-struct-card', component: CvcQueryStructCardWrapper },
  ],
}

@NgModule({
  declarations: [CvcQueryStructCardWrapper],
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule.forChild(wrapperConfig),
    NzCardModule,
    NzSpaceModule,
  ],
  exports: [CvcQueryStructCardWrapper],
})
export class CvcQueryStructCardModule {}

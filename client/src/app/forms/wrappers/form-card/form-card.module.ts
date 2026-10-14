import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcFormLegendComponent } from '@app/forms/components/form-legend/form-legend.component'
import { CvcFormCardWrapper } from './form-card.wrapper'

const wrapperConfig: ConfigOption = {
  wrappers: [{ name: 'form-card', component: CvcFormCardWrapper }],
}

@NgModule({
  declarations: [CvcFormCardWrapper],
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule.forChild(wrapperConfig),
    NzGridModule,
    NzCardModule,
    NzCheckboxModule,
    CvcFormLegendComponent,
  ],
  exports: [CvcFormCardWrapper],
})
export class CvcFormCardModule {}

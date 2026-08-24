import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { EmptyValueComponent } from './empty-value.component'

@NgModule({
  declarations: [EmptyValueComponent],
  imports: [CommonModule, NzTooltipModule, NzIconModule],
  exports: [EmptyValueComponent],
})
export class CvcEmptyValueModule {}

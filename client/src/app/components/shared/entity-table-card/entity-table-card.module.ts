import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEntityTableCardComponent } from './entity-table-card.component'
import { NzCardModule } from 'ng-zorro-antd/card'

@NgModule({
  declarations: [CvcEntityTableCardComponent],
  imports: [CommonModule, NzCardModule],
  exports: [CvcEntityTableCardComponent],
})
export class CvcEntityTableCardModule {}

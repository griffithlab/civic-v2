import { Component, input } from '@angular/core'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { RouterModule } from '@angular/router'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'

export type CuratableEntityCounts = {
  id: number
  flags: { totalCount: number }
  revisions: { totalCount: number }
  comments: { totalCount: number }
}

@Component({
  selector: 'cvc-entity-child-counts',
  imports: [
    RouterModule,
    NzTagModule,
    NzSpaceModule,
    NzIconModule,
    NzToolTipModule,
  ],
  templateUrl: './entity-child-counts.component.component.html',
  styleUrl: './entity-child-counts.component.component.less',
  standalone: true,
})
export class CvcEntityChildCounts {
  cvcEntity = input.required<CuratableEntityCounts>()
  cvcRoute = input.required<string>()
}

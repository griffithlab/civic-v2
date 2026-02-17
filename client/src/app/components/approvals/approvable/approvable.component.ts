import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'

export type CvcApprovableCounts = {
  flags: number
  approvals: number
  vcepApprovals: number
}

@Component({
  selector: '[cvcApprovable]',
  imports: [
    CommonModule,
    NzBadgeModule,
    NzIconModule,
    NzToolTipModule,
    NzSpaceModule,
  ],
  templateUrl: './approvable.component.html',
  styleUrl: './approvable.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcApprovableDirective {
  counts = input<CvcApprovableCounts>(
    { flags: 0, approvals: 0, vcepApprovals: 0 },
    { alias: 'cvcApprovableCounts' }
  )

  flags = computed(() => this.counts().flags)
  approvals = computed(() => this.counts().approvals)
  vcepApprovals = computed(() => this.counts().vcepApprovals)

  isFlagged = computed(() => this.flags() > 0)
  isApproved = computed(() => this.approvals() > 0 || this.vcepApprovals() > 0)

  flaggedColor = computed(() => {
    if (this.isApproved()) {
      if (this.vcepApprovals() > 0) {
        return getEntityColor('VcepApproval')
      } else {
        return getEntityColor('Approval')
      }
    } else {
      return getEntityColor('Flag')
    }
  })
}

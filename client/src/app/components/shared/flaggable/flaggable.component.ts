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

export type CvcFlaggableCounts = {
  flags: number
  endorsements: number
}

@Component({
  selector: '[cvcFlaggable]',
  imports: [
    CommonModule,
    NzBadgeModule,
    NzIconModule,
    NzToolTipModule,
    NzSpaceModule,
  ],
  templateUrl: './flaggable.component.html',
  styleUrl: './flaggable.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFlaggableComponent {
  counts = input<CvcFlaggableCounts>(
    { flags: 0, endorsements: 0 },
    { alias: 'cvcFlaggableCounts' }
  )

  flags = computed(() => this.counts().flags)
  endorsements = computed(() => this.counts().endorsements)

  isFlagged = computed(() => this.flags() > 0)
  isEndorsed = computed(() => this.endorsements() > 0)

  flaggedColor = computed(() => {
    return this.isEndorsed()
      ? getEntityColor('Endorsement')
      : getEntityColor('Flag')
  })
}

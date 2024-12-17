import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-icon-badges',
  templateUrl: './icon-badges.component.html',
  styleUrls: ['./icon-badges.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcIconBadgesComponent {
  @Input() hasRevisions: Maybe<boolean> = false
  @Input() flagged: Maybe<boolean> = false
  @Input() hasComments: Maybe<boolean> = false
  @Input() entityColor: string = '#AAA'

  flagColor = getEntityColor('Flag')
  constructor() {}
}

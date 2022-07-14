import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getEntityColor } from '@app/core/utilities/get-entity-color';

@Component({
  selector: 'cvc-icon-badges',
  templateUrl: './icon-badges.component.html',
  styleUrls: ['./icon-badges.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcIconBadgesComponent {
  @Input() hasRevisions: boolean = false
  @Input() hasFlags: boolean = false
  @Input() hasComments: boolean = false
  @Input() entityColor: string = '#AAA'

  flagColor = getEntityColor('Flag')
  constructor() {}

}

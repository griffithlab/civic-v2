import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getEntityColor } from '@app/core/utilities/get-entity-color';

@Component({
  selector: 'cvc-icon-badges',
  templateUrl: './icon-badges.component.html',
  styleUrls: ['./icon-badges.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcIconBadgesComponent {
  @Input() hasRevisions!: boolean
  @Input() hasFlags!: boolean
  @Input() hasComments!: boolean
  @Input() entityColor!: string

  flagColor = getEntityColor('Flag')
  constructor() {}

}

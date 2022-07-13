import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

  constructor() { }

}

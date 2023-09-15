import { Component, Input } from '@angular/core'
import { Maybe, Ranks, Stats } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.less'],
})
export class CvcStatsCardComponent {
  @Input() cvcStats!: Stats
  @Input() cvcRanks!: Ranks
}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { Maybe, Ranks, Stats } from '@app/generated/civic.apollo'
import { BehaviorSubject } from 'rxjs'

@Component({
    selector: 'cvc-stats-card',
    templateUrl: './stats-card.component.html',
    styleUrls: ['./stats-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcStatsCardComponent implements OnInit {
  @Input() cvcStats!: Stats
  @Input() cvcRanks!: Ranks
  @Input() cvcSubGroupStats?: Stats

  // SOURCES
  showSubGroupStat$: BehaviorSubject<boolean>

  // PRESENTATION
  stat$: BehaviorSubject<Maybe<Stats>>

  get showSubGroupStats(): boolean {
    return this.showSubGroupStat$.value
  }
  set showSubGroupStats(show: boolean) {
    this.updateModel(show)
  }

  constructor() {
    this.stat$ = new BehaviorSubject<Maybe<Stats>>(void 0)
    this.showSubGroupStat$ = new BehaviorSubject<boolean>(true)
  }

  updateModel(show: boolean) {
    if (show === true && this.cvcSubGroupStats !== undefined) {
      this.showSubGroupStat$.next(true)
      this.stat$.next(this.cvcSubGroupStats)
    } else {
      this.showSubGroupStat$.next(false)
      this.stat$.next(this.cvcStats)
    }
  }

  ngOnInit(): void {
    this.updateModel(this.cvcSubGroupStats !== undefined)
  }
}

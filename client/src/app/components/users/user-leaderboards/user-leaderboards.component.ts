import { ChangeDetectionStrategy, Component } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { userList } from './mock-data'

enum TimeWindow {
  All = 'ALL',
  Week = 'WEEK',
  Month = 'MONTH',
  Year = 'YEAR',
}

@Component({
  selector: 'cvc-user-leaderboards',
  templateUrl: './user-leaderboards.component.html',
  styleUrls: ['./user-leaderboards.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcUserLeaderboardsComponent {
  timeWindow$: BehaviorSubject<TimeWindow>
  tabIndex$: BehaviorSubject<number>
  userList$: BehaviorSubject<any[]>

  constructor() {
    this.tabIndex$ = new BehaviorSubject<number>(0)
    this.timeWindow$ = new BehaviorSubject<TimeWindow>(TimeWindow.All)
    this.userList$ = new BehaviorSubject<any[]>(userList.slice(1, 6))
  }
}

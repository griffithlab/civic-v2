import { Component, OnInit } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  CivicStatsGQL,
  CivicStatsQuery,
  CivicTimepointStats,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

type StatTimeOption = 'allTime' | 'newThisYear' | 'newThisMonth' | 'newThisWeek'

@Component({
  selector: 'cvc-site-stats-card',
  templateUrl: './site-stats-card.component.html',
  styleUrls: ['./site-stats-card.component.less'],
  standalone: false,
})
export class CvcSiteStatsCardComponent implements OnInit {
  private statsRef!: QueryRef<CivicStatsQuery, {}>
  private response$!: Observable<ApolloQueryResult<CivicStatsQuery>>

  isLoading$!: Observable<boolean>
  stats$!: Observable<CivicTimepointStats>

  statsLabel = {
    allTime: 'Total',
    newThisYear: 'Yearly',
    newThisMonth: 'Monthly',
    newThisWeek: 'Weekly',
  }

  statsType: StatTimeOption = 'allTime'

  constructor(private statsGql: CivicStatsGQL) {}

  label(): string {
    return this.statsLabel[this.statsType]
  }

  ngOnInit() {
    this.statsRef = this.statsGql.watch({})
    this.response$ = this.statsRef.valueChanges

    this.isLoading$ = this.response$.pipe(pluck('loading'), filter(isNonNulled))

    this.stats$ = this.response$.pipe(
      pluck('data', 'timepointStats'),
      filter(isNonNulled)
    )
  }
}

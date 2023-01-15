import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  CivicStatsGQL,
  CivicStatsQuery,
  CivicTimepointStats,
} from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter } from 'rxjs/operators';
import { pluck } from 'rxjs-etc/operators';

@Component({
  selector: 'cvc-site-stats-card',
  templateUrl: './site-stats-card.component.html',
  styleUrls: ['./site-stats-card.component.less'],
})
export class CvcSiteStatsCardComponent implements OnInit {
  private statsRef!: QueryRef<CivicStatsQuery, {}>;
  private response$!: Observable<ApolloQueryResult<CivicStatsQuery>>;

  isLoading$!: Observable<boolean>;
  stats$!: Observable<CivicTimepointStats>;
  statsType: string;
  statsTypes: { [index: string]: string };

  constructor(private statsGql: CivicStatsGQL) {
    this.statsTypes = {
      Total: 'allTime',
      Yearly: 'newThisYear',
      Monthly: 'newThisMonth',
      Weekly: 'newThisWeek',
    };

    this.statsType = 'Total'; // set default filter value
  }

  ngOnInit() {
    this.statsRef = this.statsGql.watch({});
    this.response$ = this.statsRef.valueChanges;

    this.isLoading$ = this.response$.pipe(
      pluck('loading'),
      filter(isNonNulled)
    );

    this.stats$ = this.response$.pipe(
      pluck('data', 'timepointStats'),
      filter(isNonNulled)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CivicStatsGQL, CivicStatsQuery, CivicTimepointStats, TimePointCounts } from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cvc-site-stats-card',
  templateUrl: './site-stats-card.component.html',
  styleUrls: ['./site-stats-card.component.less']
})
export class CvcSiteStatsCardComponent implements OnInit {
  private statsRef!: QueryRef<CivicStatsQuery, {}>;
  stats$!: Observable<CivicTimepointStats>;
  statsType: string;

  constructor(private statsGql: CivicStatsGQL) {
    const statsTypes = {
      Total: 'allTime',
      Yearly: 'newThisYear',
      Monthly: 'newThisMonth',
      Weekly: 'newThisWeek',
    }

    this.statsType = 'Total'; // set default filter value
  }

  ngOnInit() {
    this.statsRef = this.statsGql.watch({});
    this.stats$ = this.statsRef.valueChanges
      .pipe(map(r => r.data.timepointStats));
  }
}

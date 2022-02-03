import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { CivicStatsGQL, CivicStatsQuery } from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  private statsRef!: QueryRef<CivicStatsQuery, {}>;
  stats$!: Observable<ApolloQueryResult<CivicStatsQuery>>;
  constructor(private statsGql: CivicStatsGQL) {

  }

  statsFilter = "Total";

  ngOnInit() {
    this.statsRef = this.statsGql.watch({});
    this.stats$ = this.statsRef.valueChanges;
  }

}

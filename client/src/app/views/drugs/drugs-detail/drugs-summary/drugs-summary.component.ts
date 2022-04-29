import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrugsSummaryFieldsFragment, DrugsSummaryGQL, DrugsSummaryQuery, DrugsSummaryQueryVariables, Maybe } from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs'
import { pluck, startWith } from 'rxjs/operators';

@Component({
  selector: 'cvc-drugs-summary',
  templateUrl: './drugs-summary.component.html',
  styleUrls: ['./drugs-summary.component.less']
})
export class DrugsSummaryComponent implements OnDestroy {
  routeSub: Subscription;
  drugId?: number;

  queryRef?: QueryRef<DrugsSummaryQuery, DrugsSummaryQueryVariables>

  loading$?: Observable<boolean>;
  drug$?: Observable<Maybe<DrugsSummaryFieldsFragment>>

  constructor(
    private route: ActivatedRoute, private gql: DrugsSummaryGQL
  ) {
    this.routeSub = this.route.params
      .subscribe((params) => {
        this.drugId = +params.drugId;

        this.queryRef = this.gql
          .watch({ drugId: this.drugId });

        let observable = this.queryRef.valueChanges
        this.loading$ = observable
          .pipe(
            pluck('loading'),
            startWith(true));

        this.drug$ = observable
          .pipe(
            pluck('data', 'drug'));
      });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

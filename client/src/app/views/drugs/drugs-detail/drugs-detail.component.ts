import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maybe, Drug, DrugDetailGQL, DrugDetailQuery, DrugDetailQueryVariables } from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { pluck, startWith } from "rxjs/operators";

@Component({
  selector: 'cvc-drugs-detail',
  templateUrl: './drugs-detail.component.html',
  styleUrls: ['./drugs-detail.component.less']
})

export class DrugsDetailComponent implements OnDestroy {
  drugId?: number
  routeSub: Subscription
  queryRef?: QueryRef<DrugDetailQuery, DrugDetailQueryVariables>
  loading$?: Observable<boolean>
  drug$?: Observable<Maybe<Drug>>

  constructor(private route: ActivatedRoute, private gql: DrugDetailGQL) {

    this.routeSub = this.route.params
      .subscribe((params) => {
        this.drugId = +params.drugId;

        this.queryRef = this.gql
          .watch({ drugId: this.drugId });

        let observable = this.queryRef.valueChanges;

        this.loading$ = observable
          .pipe(
            pluck('loading'),
            startWith(true));

        this.drug$ = observable
          .pipe(
            pluck('data', 'drug'));
      });
  }

  ngOnDestroy() { this.routeSub.unsubscribe() }

}

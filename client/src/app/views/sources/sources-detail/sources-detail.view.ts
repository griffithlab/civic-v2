import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';
import {
    Maybe,
    SourceDetailFieldsFragment,
    SourceDetailGQL,
    SourceDetailQuery,
    SourceDetailQueryVariables
} from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { pluck, startWith } from "rxjs/operators";

@Component({
  selector: 'cvc-sources-detail',
  templateUrl: './sources-detail.view.html',
  styleUrls: ['./sources-detail.view.less']
})

export class SourcesDetailView implements OnDestroy {
  viewer$?: Observable<Viewer>;
  routeSub: Subscription;
  sourceId?: number;

  queryRef?: QueryRef<SourceDetailQuery, SourceDetailQueryVariables>

  loading$?: Observable<boolean>;
  source$?: Observable<Maybe<SourceDetailFieldsFragment>>

  constructor(private viewerService: ViewerService,
              private route: ActivatedRoute,
              private gql: SourceDetailGQL) {

    this.viewer$ = this.viewerService.viewer$;

    this.routeSub = this.route.params.subscribe((params) => {
      this.sourceId = +params.sourceId;

      this.queryRef = this.gql.watch({
        sourceId: this.sourceId
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(
        pluck('loading'),
        startWith(true));

      this.source$ = observable.pipe(
          pluck('data', 'source'));
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}

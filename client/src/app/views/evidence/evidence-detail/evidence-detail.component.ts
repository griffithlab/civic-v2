import { Component, OnDestroy } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import {
  EvidenceDetailFieldsFragment,
  EvidenceDetailGQL,
  EvidenceDetailQuery,
  EvidenceDetailQueryVariables,
  Maybe,
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo';
import {
  Viewer,
  ViewerService,
} from '@app/shared/services/viewer/viewer.service';
import { ActivatedRoute } from '@angular/router';
import { pluck, startWith } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'evidence-detail',
  templateUrl: './evidence-detail.component.html',
  styleUrls: ['./evidence-detail.component.less'],
})
export class EvidenceDetailComponent implements OnDestroy {
  queryRef?: QueryRef<EvidenceDetailQuery, EvidenceDetailQueryVariables>;

  evidence$?: Observable<Maybe<EvidenceDetailFieldsFragment>>;
  loading$?: Observable<boolean>;
  commentsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  revisionsTotal$?: Observable<number>;
  viewer$?: Observable<Viewer>;

  routeSub: Subscription;
  subscribable?: SubscribableInput;

  constructor(
    private gql: EvidenceDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({ evidenceId: +params.evidenceId });

      let observable = this.queryRef.valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.evidence$ = observable.pipe(pluck('data', 'evidenceItem'));

      this.commentsTotal$ = this.evidence$.pipe(
        pluck('comments', 'totalCount')
      );

      this.flagsTotal$ = this.evidence$.pipe(pluck('flags', 'totalCount'));

      this.revisionsTotal$ = this.evidence$.pipe(
        pluck('revisions', 'totalCount')
      );

      this.subscribable = {
        id: +params.evidenceId,
        entityType: SubscribableEntities.EvidenceItem
      }

      this.viewer$ = this.viewerService.viewer$;
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

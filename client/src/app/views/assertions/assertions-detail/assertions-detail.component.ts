import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Maybe,
  AssertionDetailFieldsFragment,
  AssertionDetailGQL,
  AssertionDetailQueryVariables,
  SubscribableInput,
  SubscribableEntities,
} from '@app/generated/civic.apollo';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import { QueryRef } from 'apollo-angular';
import { AssertionDetailQuery } from '@app/generated/civic.apollo';
import { pluck, startWith } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component';

@Component({
  selector: 'assertions-detail',
  templateUrl: './assertions-detail.component.html',
  styleUrls: ['./assertions-detail.component.less'],
})
export class AssertionsDetailComponent implements OnDestroy {
  queryRef?: QueryRef<AssertionDetailQuery, AssertionDetailQueryVariables>;

  assertion$?: Observable<Maybe<AssertionDetailFieldsFragment>>;
  loading$?: Observable<boolean>;
  commentsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  revisionsTotal$?: Observable<number>;
  viewer$?: Observable<Viewer>;

  paramsSub: Subscription;
  subscribable?: SubscribableInput;

  tabs: RouteableTab[]

  constructor(
    private gql: AssertionDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.paramsSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({ assertionId: +params.assertionId });

      let observable = this.queryRef.valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.assertion$ = observable.pipe(pluck('data', 'assertion'));

      this.commentsTotal$ = this.assertion$.pipe(
        pluck('comments', 'totalCount')
      );

      this.flagsTotal$ = this.assertion$.pipe(pluck('flags', 'totalCount'));

      this.revisionsTotal$ = this.assertion$.pipe(
        pluck('revisions', 'totalCount')
      );

      this.subscribable = {
        id: +params.assertionId,
        entityType: SubscribableEntities.Assertion
      }

      this.viewer$ = this.viewerService.viewer$;
    });

    this.tabs = [
      {
        routeName: 'summary',
        iconName: 'pic-left',
        tabLabel: 'Summary'
      },
      {
        routeName: 'comments',
        iconName: 'civic:comment',
        tabLabel: 'Comments'
      },
      {
        routeName: 'revisions',
        iconName: 'civic:revision',
        tabLabel: 'Revisions'
      },
      {
        routeName: 'flags',
        iconName: 'civic:flag',
        tabLabel: 'Flags'
      }
    ]
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}

import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Maybe,
  AssertionDetailFieldsFragment,
  AssertionDetailGQL,
  AssertionDetailQueryVariables,
  SubscribableInput,
  SubscribableEntities,
  EvidenceStatus,
} from '@app/generated/civic.apollo';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import { QueryRef } from 'apollo-angular';
import { AssertionDetailQuery } from '@app/generated/civic.apollo';
import { pluck, startWith, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component';

@Component({
  selector: 'assertions-detail',
  templateUrl: './assertions-detail.view.html',
  styleUrls: ['./assertions-detail.view.less'],
})
export class AssertionsDetailView implements OnDestroy {
  queryRef?: QueryRef<AssertionDetailQuery, AssertionDetailQueryVariables>;

  assertion$?: Observable<Maybe<AssertionDetailFieldsFragment>>;
  loading$?: Observable<boolean>;
  commentsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  viewer$?: Observable<Viewer>;

  paramsSub: Subscription;
  subscribable?: SubscribableInput;

  tabs$: BehaviorSubject<RouteableTab[]>;
  destroy$ = new Subject<void>();
  defaultTabs: RouteableTab[] = [
    {
      routeName: 'summary',
      iconName: 'pic-left',
      tabLabel: 'Summary',
    },
    {
      routeName: 'comments',
      iconName: 'civic-comment',
      tabLabel: 'Comments',
    },
    {
      routeName: 'revisions',
      iconName: 'civic-revision',
      tabLabel: 'Revisions',
    },
    {
      routeName: 'flags',
      iconName: 'civic-flag',
      tabLabel: 'Flags',
    },
    {
      routeName: 'events',
      iconName: 'civic-event',
      tabLabel: 'Events',
    },
  ];

  errors: string[] = [];
  successMessage: Maybe<string>;

  constructor(
    private gql: AssertionDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs);

    this.paramsSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({ assertionId: +params.assertionId });

      let observable = this.queryRef.valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.assertion$ = observable.pipe(pluck('data', 'assertion'));

      this.commentsTotal$ = this.assertion$.pipe(
        pluck('comments', 'totalCount')
      );

      this.flagsTotal$ = this.assertion$.pipe(pluck('flags', 'totalCount'));

      this.assertion$
        .pipe(pluck('revisions', 'totalCount'), takeUntil(this.destroy$))
        .subscribe({
          next: (count) => {
            this.tabs$.next(
              this.defaultTabs.map((tab) => {
                if (tab.tabLabel === 'Revisions') {
                  return {
                    badgeCount: count as number,
                    ...tab,
                  };
                } else {
                  return tab;
                }
              })
            );
          },
        });

      this.subscribable = {
        id: +params.assertionId,
        entityType: SubscribableEntities.Assertion,
      };

      this.viewer$ = this.viewerService.viewer$;
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  onRevertCompleted(res: true | string[]) {
    if (res === true) {
      this.errors = [];
      this.successMessage = 'Assertion reverted to submitted status.';
      this.queryRef?.refetch();
    } else {
      this.errors = res;
      this.successMessage = undefined;
    }
  }

  onErrorBannerClose(err: string) {
    this.errors = this.errors?.filter((e) => e != err);
  }

  onSuccessBannerClose() {
    this.successMessage = undefined;
  }

  onModerateCompleted(res: EvidenceStatus | string[]) {
    if (Array.isArray(res)) {
      this.errors = res;
      this.successMessage = undefined;
    } else {
      this.errors = [];
      this.successMessage = `Assertion successfully ${res}.`;
      this.queryRef?.refetch();
    }
  }
}

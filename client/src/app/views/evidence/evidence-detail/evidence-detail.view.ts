import { Component, OnDestroy } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import {
  EvidenceDetailFieldsFragment,
  EvidenceDetailGQL,
  EvidenceDetailQuery,
  EvidenceDetailQueryVariables,
  EvidenceStatus,
  Maybe,
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import { ActivatedRoute } from '@angular/router';
import { pluck, startWith, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component';

@Component({
  selector: 'evidence-detail',
  templateUrl: './evidence-detail.view.html',
  styleUrls: ['./evidence-detail.view.less'],
})
export class EvidenceDetailView implements OnDestroy {
  queryRef?: QueryRef<EvidenceDetailQuery, EvidenceDetailQueryVariables>;

  evidence$?: Observable<Maybe<EvidenceDetailFieldsFragment>>;
  loading$?: Observable<boolean>;
  commentsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  viewer$?: Observable<Viewer>;

  errors: string[] = []
  successMessage: Maybe<string>

  routeSub: Subscription;
  subscribable?: SubscribableInput;

  tabs$: BehaviorSubject<RouteableTab[]>;
  destroy$ = new Subject<void>();

  defaultTabs: RouteableTab[] = [
    {
      routeName: 'summary',
      iconName: 'pic-left',
      tabLabel: 'Summary'
    },
    {
      routeName: 'comments',
      iconName: 'civic-comment',
      tabLabel: 'Comments'
    },
    {
      routeName: 'revisions',
      iconName: 'civic-revision',
      tabLabel: 'Revisions',
    },
    {
      routeName: 'flags',
      iconName: 'civic-flag',
      tabLabel: 'Flags'
    },
    {
      routeName: 'events',
      iconName: 'civic-event',
      tabLabel: 'Events'
    },
  ]


  constructor(
    private gql: EvidenceDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs);

    this.routeSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({ evidenceId: +params.evidenceId });

      let observable = this.queryRef.valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.evidence$ = observable.pipe(pluck('data', 'evidenceItem'));

      this.commentsTotal$ = this.evidence$.pipe(
        pluck('comments', 'totalCount')
      );

      this.flagsTotal$ = this.evidence$.pipe(pluck('flags', 'totalCount'));

      this.evidence$.pipe(
        pluck('revisions', 'totalCount'),
        takeUntil(this.destroy$)
      ).subscribe({
        next: (count) => {
          this.tabs$.next(
            this.defaultTabs.map((tab) => {
              if (tab.tabLabel === 'Revisions') {
                return {
                  badgeCount: count as number,
                  ...tab
                }
              }
              else {
                return tab
              }
            }
          ))
        }
      })

      this.subscribable = {
        id: +params.evidenceId,
        entityType: SubscribableEntities.EvidenceItem
      }

      this.viewer$ = this.viewerService.viewer$;
    });

  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.destroy$.next()
    this.destroy$.unsubscribe();
  }

  onRevertCompleted(res: true | string[]) {
    if(res === true){
      this.errors = [];
      this.successMessage = "Evidence Item reverted to submitted status.";
      this.queryRef?.refetch();
    } else {
      this.errors = res;
      this.successMessage = undefined;
    }
  }

  onModerateCompleted(res: EvidenceStatus | string[]) {
    if(Array.isArray(res)) {
      this.errors = res;
      this.successMessage = undefined;
    } else {
      this.errors = [];
      this.successMessage = `Evidence successfully ${res}.`;
      this.queryRef?.refetch();
    }
  }

  onErrorBannerClose(err: string) {
    this.errors = this.errors?.filter(e => e != err);
  }

  onSuccessBannerClose() {
    this.successMessage = undefined;
  }
}

import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Maybe,
  MolecularProfileDetailFieldsFragment,
  MolecularProfileDetailGQL,
  MolecularProfileDetailQuery,
  MolecularProfileDetailQueryVariables,
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import { QueryRef } from 'apollo-angular';
import { pluck, startWith, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component';

@Component({
  selector: 'molecular-profiles-detail',
  templateUrl: './molecular-profiles-detail.view.html',
  styleUrls: ['./molecular-profiles-detail.view.less'],
})
export class MolecularProfilesDetailView implements OnDestroy {
  queryRef?: QueryRef<
    MolecularProfileDetailQuery,
    MolecularProfileDetailQueryVariables
  >;

  molecularProfile$?: Observable<Maybe<MolecularProfileDetailFieldsFragment>>;
  loading$?: Observable<boolean>;
  commentsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  viewer$?: Observable<Viewer>;

  routeSub: Subscription;
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

  constructor(
    private gql: MolecularProfileDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs);

    this.routeSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({ mpId: +params.molecularProfileId });

      let observable = this.queryRef.valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.molecularProfile$ = observable.pipe(
        pluck('data', 'molecularProfile')
      );

      this.commentsTotal$ = this.molecularProfile$.pipe(
        pluck('comments', 'totalCount')
      );

      this.flagsTotal$ = this.molecularProfile$.pipe(
        pluck('flags', 'totalCount')
      );

      this.molecularProfile$
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
        id: +params.molecularProfileId,
        entityType: SubscribableEntities.MolecularProfile,
      };

      this.viewer$ = this.viewerService.viewer$;
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}

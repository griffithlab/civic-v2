import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { pluck, startWith, takeUntil } from 'rxjs/operators';
import {
  GeneDetailFieldsFragment,
  GeneDetailGQL,
  Maybe,
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component';

@Component({
  selector: 'genes-detail',
  templateUrl: './genes-detail.view.html',
  styleUrls: ['./genes-detail.view.less'],
})
export class GenesDetailView implements OnDestroy {
  loading$?: Observable<boolean>;
  gene$?: Observable<Maybe<GeneDetailFieldsFragment>>;
  viewer$?: Observable<Viewer>;
  commentsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  routeSub: Subscription;
  subscribable?: SubscribableInput

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
        tabLabel: 'Revisions'
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
      }
    ]

  constructor(
    private gql: GeneDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs);

    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({ geneId: +params.geneId }).valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.gene$ = observable.pipe(pluck('data', 'gene'));

      this.commentsTotal$ = this.gene$.pipe(pluck('comments', 'totalCount'));

      this.flagsTotal$ = this.gene$.pipe(pluck('flags', 'totalCount'));

      this.gene$.pipe(
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
        id: +params.geneId,
        entityType: SubscribableEntities.Gene
      }

      this.viewer$ = this.viewerService.viewer$;
    });
  }

  filterCurators = (u: any): boolean => {
    return u.role == 'curator';
  }
  filterEditors = (u: any): boolean => {
    return u.role == 'editor' || u.role == 'admin';
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}

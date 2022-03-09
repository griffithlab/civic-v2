import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { pluck, startWith } from 'rxjs/operators';
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
  revisionsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  routeSub: Subscription;
  subscribable?: SubscribableInput

  tabs: RouteableTab[]

  constructor(
    private gql: GeneDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({ geneId: +params.geneId }).valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.gene$ = observable.pipe(pluck('data', 'gene'));

      this.commentsTotal$ = this.gene$.pipe(pluck('comments', 'totalCount'));

      this.flagsTotal$ = this.gene$.pipe(pluck('flags', 'totalCount'));

      this.revisionsTotal$ = this.gene$.pipe(pluck('revisions', 'totalCount'));

      this.subscribable = {
        id: +params.geneId,
        entityType: SubscribableEntities.Gene
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
      }
    ]

  }

  filterCurators = (u: any): boolean => {
    return u.role == 'curator';
  }
  filterEditors = (u: any): boolean => {
    return u.role == 'editor' || u.role == 'admin';
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

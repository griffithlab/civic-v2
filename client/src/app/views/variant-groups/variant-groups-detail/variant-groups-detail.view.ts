import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import {
  Maybe,
  VariantGroupDetailFieldsFragment,
  SubscribableEntities,
  SubscribableInput,
  VariantGroupDetailGQL
} from '@app/generated/civic.apollo';
import { ActivatedRoute } from '@angular/router';
import { pluck, startWith } from 'rxjs/operators';
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component';

@Component({
  selector: 'cvc-variant-groups-detail',
  templateUrl: './variant-groups-detail.view.html',
  styleUrls: ['./variant-groups-detail.view.less']
})
export class VariantGroupsDetailView implements OnInit {
  loading$?: Observable<boolean>;
  variantGroup$?: Observable<Maybe<VariantGroupDetailFieldsFragment>>;
  viewer$?: Observable<Viewer>;
  commentsTotal$?: Observable<number>;
  revisionsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  routeSub: Subscription;
  subscribable?: SubscribableInput

  tabs: RouteableTab[]

  constructor(
    private gql: VariantGroupDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.viewer$ = this.viewerService.viewer$;

    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({ variantGroupId: +params.variantGroupId }).valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.variantGroup$ = observable.pipe(pluck('data', 'variantGroup'));

      this.commentsTotal$ = this.variantGroup$.pipe(pluck('comments', 'totalCount'));

      this.flagsTotal$ = this.variantGroup$.pipe(pluck('flags', 'totalCount'));

      this.revisionsTotal$ = this.variantGroup$.pipe(pluck('revisions', 'totalCount'));

      this.subscribable = {
        id: +params.variantGroupId,
        entityType: SubscribableEntities.VariantGroup
      }

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

  ngOnInit(): void {
  }

}

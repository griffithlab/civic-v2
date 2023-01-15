import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Maybe,
  UserDetailFieldsFragment,
  UserDetailGQL,
  UserDetailQuery,
  UserDetailQueryVariables,
} from '@app/generated/civic.apollo';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import { QueryRef } from 'apollo-angular';
import { startWith } from 'rxjs/operators';
import { pluck } from 'rxjs-etc/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component';

@Component({
  selector: 'users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.less'],
})
export class UsersDetailComponent implements OnDestroy {
  queryRef?: QueryRef<UserDetailQuery, UserDetailQueryVariables>;
  user$?: Observable<Maybe<UserDetailFieldsFragment>>;
  loading$?: Observable<boolean>;
  viewer$?: Observable<Viewer>;
  ownProfile$ = new BehaviorSubject<boolean>(false);
  uploadError = false;
  updateSuccess = false;

  updateCoiModalVisible = false;
  updateProfileModalVisible = false;

  routeSub: Subscription;
  viewerSub?: Subscription;

  tabs$: BehaviorSubject<RouteableTab[]>;

  defaultTabs: RouteableTab[] = [
    {
      routeName: 'activity',
      tabLabel: 'Activity',
      iconName: 'civic-event',
    },
    {
      routeName: 'evidence',
      tabLabel: 'Evidence Items',
      iconName: 'civic-evidence',
    },
    {
      routeName: 'assertions',
      tabLabel: 'Assertions',
      iconName: 'civic-assertion',
    },
    {
      routeName: 'source-suggestions',
      tabLabel: 'Source Suggestions',
      iconName: 'file-add',
    },
    // {
    //   routeName: 'badges',
    //   tabLabel: 'Badges',
    //   iconName: 'safety-certificate',
    // },
  ];

  constructor(
    private gql: UserDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs);

    this.routeSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({ userId: +params.userId });
      let observable = this.queryRef.valueChanges;
      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.user$ = observable.pipe(pluck('data', 'user'));

      this.viewerSub = this.viewerService.viewer$.subscribe((v) => {
        if (v.id === +params.userId) {
          let notificationTab: RouteableTab = {
            routeName: 'notifications',
            tabLabel: 'Notifications',
            iconName: 'bell',
          };

          this.tabs$.next([...this.defaultTabs, notificationTab]);
          this.ownProfile$.next(true);
        }
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.viewerSub?.unsubscribe();
  }

  profileUploadComplete(success: boolean) {
    if (success) {
      this.queryRef?.refetch();
      this.updateSuccess = true;
    } else {
      this.uploadError = true;
    }
  }

  coiUpdated() {
    this.updateCoiModalVisible = false;
    this.queryRef?.refetch();
  }

  profileUpdated() {
    this.updateProfileModalVisible = false;
    this.queryRef?.refetch();
  }

  handleCoiModalCancel() {
    this.updateCoiModalVisible = false;
  }

  handleProfileModalCancel() {
    this.updateProfileModalVisible = false;
  }
}

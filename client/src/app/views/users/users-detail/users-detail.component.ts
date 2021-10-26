import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maybe, UserDetailFieldsFragment, UserDetailGQL, UserDetailQuery, UserDetailQueryVariables } from "@app/generated/civic.apollo";
import { Viewer, ViewerService } from "@app/core/services/viewer/viewer.service";
import { QueryRef } from "apollo-angular";
import { pluck, startWith, tap } from "rxjs/operators";
import { Observable, Subscription } from 'rxjs';
import { RouteableTab } from "@app/components/shared/tab-navigation/tab-navigation.component";

@Component({
    selector: 'users-detail',
    templateUrl: './users-detail.component.html',
    styleUrls: ['./users-detail.component.less']
})

export class UsersDetailComponent implements OnDestroy {
    queryRef?: QueryRef<UserDetailQuery, UserDetailQueryVariables>;
    user$?: Observable<Maybe<UserDetailFieldsFragment>>;
    loading$?: Observable<boolean>;
    viewer$?: Observable<Viewer>;

    routeSub: Subscription;
    viewerSub?: Subscription

    tabs: RouteableTab[]

    constructor(private gql: UserDetailGQL, private viewerService: ViewerService, private route: ActivatedRoute) {

        this.routeSub = this.route.params.subscribe((params) => {
            this.queryRef = this.gql.watch({userId: +params.userId});
            let observable = this.queryRef.valueChanges
            this.loading$ = observable.pipe(
                pluck('loading'),
                startWith(true));

            this.user$ = observable.pipe(
            pluck('data', 'user'));

            this.viewerSub = this.viewerService.viewer$.subscribe((v => {
                if (v.id === +params.userId) {
                    let notificationTab: RouteableTab = {
                        routeName: 'notifications',
                        tabLabel: 'Notifications',
                        iconName: 'safety-certificate'

                    }
                    this.tabs.push(notificationTab)
                }
            }))
        })

        this.tabs = [
            {
                routeName: 'activity',
                tabLabel: 'Activity',
                iconName: 'civic:event'
            },
            {
                routeName: 'evidence',
                tabLabel: 'Evidence Items',
                iconName: 'civic:evidence'
            },
            {
                routeName: 'assertions',
                tabLabel: 'Assertions',
                iconName: 'civic:assertion'
            },
            {
                routeName: 'source-suggestions',
                tabLabel: 'Source Suggestions',
                iconName: 'file-add'
            },
            {
                routeName: 'badges',
                tabLabel: 'Badges',
                iconName: 'safety-certificate'
            },
        ]
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
        this.viewerSub?.unsubscribe();
    }
}

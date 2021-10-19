import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maybe, UserDetailFieldsFragment, UserDetailGQL, UserDetailQuery, UserDetailQueryVariables } from "@app/generated/civic.apollo";
import { Viewer, ViewerService } from "@app/core/services/viewer/viewer.service";
import { QueryRef } from "apollo-angular";
import { pluck, startWith } from "rxjs/operators";
import { Observable, Subscription } from 'rxjs';

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

    constructor(private gql: UserDetailGQL, private viewerService: ViewerService, private route: ActivatedRoute) {

        this.routeSub = this.route.params.subscribe((params) => {
            this.queryRef = this.gql.watch({userId: +params.userId});
            let observable = this.queryRef.valueChanges
            this.loading$ = observable.pipe(
                pluck('loading'),
                startWith(true));

            this.user$ = observable.pipe(
            pluck('data', 'user'));

            this.viewer$ = this.viewerService.viewer$;
        })
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

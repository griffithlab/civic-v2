import { Component, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maybe, OrganizationMembersQuery, OrganizationMembersFieldsFragment, OrganizationMembersGQL, OrganizationMembersQueryVariables, PageInfo } from "@app/generated/civic.apollo";
import { Viewer, ViewerService } from "@app/core/services/viewer/viewer.service";
import { QueryRef } from "apollo-angular";
import { filter, map, pluck, startWith } from "rxjs/operators";
import { isNotNullish } from "rxjs-etc";
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'cvc-organizations-members',
    templateUrl: './organizations-members.component.html',
    standalone: false
})
export class OrganizationsMembersComponent implements OnDestroy {
  queryRef?: QueryRef<
    OrganizationMembersQuery,
    OrganizationMembersQueryVariables
  >

  members$?: Observable<Maybe<OrganizationMembersFieldsFragment>[]>
  loading$?: Observable<boolean>
  viewer$?: Observable<Viewer>
  pageInfo$?: Observable<PageInfo>
  routeSub: Subscription

  initialPageSize = 20

  constructor(
    private gql: OrganizationMembersGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({
        organizationId: [+params.organizationId],
        first: this.initialPageSize,
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))


      this.members$ = observable.pipe(
        pluck('data', 'browseUsers', 'edges'),
        filter(isNotNullish),
        map((edges) => {
          return edges.map((e) => e.node)
        })
      )

      this.pageInfo$ = observable.pipe(pluck('data', 'browseUsers', 'pageInfo'))

      this.viewer$ = this.viewerService.viewer$
    })
  }

  loadMore(cursor: Maybe<string>) {
    this.queryRef?.fetchMore({
      variables: {
        after: cursor,
      },
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }
}

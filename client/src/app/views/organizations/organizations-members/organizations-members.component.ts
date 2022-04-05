import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maybe, OrganizationMembersQuery, OrganizationMembersFieldsFragment, OrganizationMembersGQL, OrganizationMembersQueryVariables, PageInfo } from "@app/generated/civic.apollo";
import { Viewer, ViewerService } from "@app/core/services/viewer/viewer.service";
import { QueryRef } from "apollo-angular";
import { map, pluck, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-organizations-members',
  templateUrl: './organizations-members.component.html',
  styleUrls: ['./organizations-members.component.less']
})
export class OrganizationsMembersComponent {
  queryRef: QueryRef<OrganizationMembersQuery, OrganizationMembersQueryVariables>;

  members$: Observable<Maybe<OrganizationMembersFieldsFragment>[]>;
  loading$: Observable<boolean>;
  viewer$: Observable<Viewer>;
  pageInfo$?: Observable<PageInfo>

  initialPageSize = 20

  constructor(private gql: OrganizationMembersGQL, private viewerService: ViewerService, private route: ActivatedRoute) {

      const organizationId: number = +this.route.snapshot.params['organizationId'];

      this.queryRef = this.gql.watch({
        organizationId: organizationId,
        first: this.initialPageSize,
      });

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(
          pluck('loading'),
          startWith(true));

      this.members$ = observable.pipe(
        pluck('data', 'users', 'edges'),
        map((edges) => {
          return edges.map((e) => e.node)
        })
      );

      this.pageInfo$ = observable.pipe(
        pluck('data', 'users', 'pageInfo')
      )

      this.viewer$ = this.viewerService.viewer$;
  }

  loadMore(cursor: Maybe<string>) {
    this.queryRef.fetchMore({variables: {
      after: cursor
    }})
  }
}

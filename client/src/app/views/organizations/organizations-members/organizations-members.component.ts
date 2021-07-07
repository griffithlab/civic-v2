import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maybe, OrganizationMembersQuery, OrganizationMembersFieldsFragment, OrganizationMembersGQL, OrganizationMembersQueryVariables } from "@app/generated/civic.apollo";
import { Viewer, ViewerService } from "@app/shared/services/viewer/viewer.service";
import { QueryRef } from "apollo-angular";
import { pluck, startWith } from "rxjs/operators";
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

  constructor(private gql: OrganizationMembersGQL, private viewerService: ViewerService, private route: ActivatedRoute) {

      const organizationId: number = +this.route.snapshot.params['organizationId'];

      this.queryRef = this.gql.watch({organizationId: organizationId});

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(
          pluck('loading'),
          startWith(true));
    
      this.members$ = observable.pipe(
      pluck('data', 'organization', 'members', 'edges'));
  
      this.viewer$ = this.viewerService.viewer$;
  }
}
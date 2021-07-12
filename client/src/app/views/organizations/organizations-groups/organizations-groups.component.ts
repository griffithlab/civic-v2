import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maybe, OrganizationGroupsQuery, OrganizationGroupsFieldsFragment, OrganizationGroupsGQL, OrganizationGroupsQueryVariables } from "@app/generated/civic.apollo";
import { Viewer, ViewerService } from "@app/shared/services/viewer/viewer.service";
import { QueryRef } from "apollo-angular";
import { pluck, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-organizations-groups',
  templateUrl: './organizations-groups.component.html',
  styleUrls: ['./organizations-groups.component.less']
})
export class OrganizationsGroupsComponent {
  queryRef: QueryRef<OrganizationGroupsQuery, OrganizationGroupsQueryVariables>;

  organizations$: Observable<Maybe<OrganizationGroupsFieldsFragment>[]>;
  loading$: Observable<boolean>;
  viewer$: Observable<Viewer>;

  constructor(private gql: OrganizationGroupsGQL, private viewerService: ViewerService, private route: ActivatedRoute) {

      const organizationId: number = +this.route.snapshot.params['organizationId'];

      this.queryRef = this.gql.watch({organizationId: organizationId});

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(
          pluck('loading'),
          startWith(true));
    
      this.organizations$ = observable.pipe(
      pluck('data', 'organization', 'subGroups'));
  
      this.viewer$ = this.viewerService.viewer$;
  }
}
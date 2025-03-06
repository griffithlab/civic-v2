import { Component, Input, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  Maybe,
  OrganizationGroupsQuery,
  OrganizationGroupsFieldsFragment,
  OrganizationGroupsGQL,
  OrganizationGroupsQueryVariables,
} from '@app/generated/civic.apollo'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { QueryRef } from 'apollo-angular'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { Observable, Subscription } from 'rxjs'

@Component({
    selector: 'cvc-organizations-groups',
    templateUrl: './organizations-groups.component.html',
    styleUrls: ['./organizations-groups.component.less'],
    standalone: false
})
export class OrganizationsGroupsComponent implements OnDestroy {
  queryRef?: QueryRef<OrganizationGroupsQuery, OrganizationGroupsQueryVariables>
  routeSub: Subscription

  organizations$?: Observable<Maybe<OrganizationGroupsFieldsFragment>[]>
  loading$?: Observable<boolean>
  viewer$?: Observable<Viewer>

  constructor(
    private gql: OrganizationGroupsGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.routeSub = route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({
        organizationId: +params.organizationId,
      })

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.organizations$ = observable.pipe(
        pluck('data', 'organization', 'subGroups')
      )

      this.viewer$ = this.viewerService.viewer$
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }
}

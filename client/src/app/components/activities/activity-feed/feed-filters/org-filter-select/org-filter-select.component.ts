import { Component, input, model, Signal } from '@angular/core'
import { ActivityFeedFilterOptions } from '../../activity-feed.types'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CommonModule } from '@angular/common'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { FormsModule } from '@angular/forms'
import {
  BrowseOrganization,
  Organization,
  OrgFilterSearchGQL,
  OrgFilterSearchQuery,
  OrgFilterSearchQueryVariables,
} from '@app/generated/civic.apollo'
import { from, map, Subject, switchMap } from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { tag } from 'rxjs-spy/operators'
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'cvc-org-filter-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzSelectModule,
    CvcPipesModule,
  ],
  templateUrl: './org-filter-select.component.html',
  styleUrl: './org-filter-select.component.less',
})
export class CvcOrgFilterSelect {
  cvcParticipatingOrganizations =
    input.required<ActivityFeedFilterOptions['participatingOrganizations']>()
  cvcOrganizationId = model.required<number[]>()

  onSearch$: Subject<string>
  onSearch: Signal<string>
  queryRef!: QueryRef<OrgFilterSearchQuery, OrgFilterSearchQueryVariables>
  filteredOrganizations: Signal<BrowseOrganization[]>

  constructor(private gql: OrgFilterSearchGQL) {
    this.onSearch$ = new Subject<string>()
    const filteredOrganizations$ = this.onSearch$.pipe(
      tag(`filteredOrganizations$`),
      switchMap((nameStr) => {
        const query = { name: nameStr, first: 25 }
        if (this.queryRef) {
          const refetch = this.queryRef.refetch({ name: nameStr })
          return from(refetch)
        } else {
          this.queryRef = this.gql.watch({ name: nameStr })
          return this.queryRef.valueChanges
        }
      }),
      map(
        (result) =>
          result.data?.organizations.edges.map(
            (e) => e.node! as BrowseOrganization
          ) ?? []
      ),
      tag(`${this.constructor.name} filteredOrganizations$ after`)
    )
    this.filteredOrganizations = toSignal(filteredOrganizations$, {
      initialValue: [],
    })
    this.onSearch = toSignal(this.onSearch$, { initialValue: '' })
  }
}

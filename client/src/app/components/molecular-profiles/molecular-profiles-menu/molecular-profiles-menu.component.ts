import { Component, Input, OnInit } from '@angular/core'
import {
  Maybe,
  PageInfo,
  MenuMolecularProfileFragment,
  MolecularProfileMenuQuery,
  MolecularProfileConnection,
  MolecularProfileMenuQueryVariables,
  MolecularProfileMenuGQL,
  AssociatedEvidenceStatusFilter,
} from '@app/generated/civic.apollo'
import { map, debounceTime, filter, startWith } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { ApolloQueryResult } from '@apollo/client/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { isNonNulled } from 'rxjs-etc'

@UntilDestroy()
@Component({
  selector: 'cvc-molecular-profile-menu',
  templateUrl: './molecular-profiles-menu.component.html',
  styleUrls: ['./molecular-profiles-menu.component.less'],
  standalone: false,
})
export class CvcMolecularProfilesMenuComponent implements OnInit {
  @Input() featureId?: number

  menuMolecularProfiles$?: Observable<Maybe<MenuMolecularProfileFragment>[]>
  totalMolecularProfiles$?: Observable<number>
  queryRef$!: QueryRef<
    MolecularProfileMenuQuery,
    MolecularProfileMenuQueryVariables
  >
  pageInfo$?: Observable<PageInfo>
  loading$?: Observable<boolean>

  mpNameFilter: Maybe<string>
  statusFilter: AssociatedEvidenceStatusFilter =
    AssociatedEvidenceStatusFilter.All

  private debouncedQuery = new Subject<void>()
  private result$!: Observable<ApolloQueryResult<MolecularProfileMenuQuery>>
  connection$!: Observable<MolecularProfileConnection>
  private initialQueryVars!: MolecularProfileMenuQueryVariables
  pageSize = 50

  constructor(private gql: MolecularProfileMenuGQL) {}

  ngOnInit() {
    if (this.featureId === undefined) {
      throw new Error(
        'Must pass a feature id into molecular profile menu component.'
      )
    }

    this.initialQueryVars = {
      featureId: this.featureId,
      evidenceStatusFilter: this.statusFilter,
      first: this.pageSize,
    }

    this.queryRef$ = this.gql.watch(this.initialQueryVars)
    this.result$ = this.queryRef$.valueChanges

    this.loading$ = this.result$.pipe(
      map(({ data, loading }) => loading && !data),
      filter(isNonNulled),
      startWith(true)
    )

    this.connection$ = this.result$.pipe(
      map((r) => r.data?.molecularProfiles),
      filter(isNonNulled)
    ) as Observable<MolecularProfileConnection>

    this.pageInfo$ = this.connection$.pipe(
      map((c) => c.pageInfo),
      filter(isNonNulled)
    )

    this.menuMolecularProfiles$ = this.connection$.pipe(
      map((c) => c.edges.map((e) => e.node), filter(isNonNulled))
    )

    this.totalMolecularProfiles$ = this.connection$.pipe(
      map((c) => c.totalCount)
    )

    this.debouncedQuery
      .pipe(debounceTime(500), untilDestroyed(this))
      .subscribe((_) => this.refresh())
  }

  onModelUpdated() {
    this.debouncedQuery.next()
  }

  onMolecularProfileStatusFilterChanged(
    filter: AssociatedEvidenceStatusFilter
  ) {
    this.queryRef$.refetch({
      first: this.pageSize,
      evidenceStatusFilter: filter,
    })
  }

  refresh() {
    if (this.featureId === undefined) {
      throw new Error(
        'Must pass a feature id into molecular profile menu component.'
      )
    }
    this.queryRef$.refetch({
      featureId: this.featureId,
      mpName: this.mpNameFilter,
      first: this.pageSize,
    })
  }

  fetchMore(endCursor: string) {
    this.queryRef$.fetchMore({
      variables: {
        first: this.pageSize,
        after: endCursor,
      },
    })
  }
}

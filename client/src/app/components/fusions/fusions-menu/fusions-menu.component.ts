import { Component, Input, OnInit } from '@angular/core'
import {
  Maybe,
  PageInfo,
  MenuFusionFragment,
  FusionMenuQuery,
  FusionConnection,
  FusionMenuQueryVariables,
  FusionMenuGQL,
} from '@app/generated/civic.apollo'
import { map, debounceTime, filter, startWith } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { ApolloQueryResult } from '@apollo/client/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { isNonNulled } from 'rxjs-etc'

@UntilDestroy()
@Component({
  selector: 'cvc-fusions-menu',
  templateUrl: './fusions-menu.component.html',
  styleUrls: ['./fusions-menu.component.less'],
})
export class CvcFusionsMenuComponent implements OnInit {
  @Input() geneId?: number

  menuFusions$?: Observable<Maybe<MenuFusionFragment>[]>
  totalFusions$?: Observable<number>
  queryRef$!: QueryRef<FusionMenuQuery, FusionMenuQueryVariables>
  pageInfo$?: Observable<PageInfo>
  loading$?: Observable<boolean>

  mpNameFilter: Maybe<string>

  private debouncedQuery = new Subject<void>()
  private result$!: Observable<ApolloQueryResult<FusionMenuQuery>>
  connection$!: Observable<FusionConnection>
  private initialQueryVars!: FusionMenuQueryVariables
  pageSize = 50

  constructor(private gql: FusionMenuGQL) {}

  ngOnInit() {
    if (this.geneId === undefined) {
      throw new Error('Must pass a gene id into fusion menu component.')
    }

    this.initialQueryVars = {
      genePartnerId: this.geneId,
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
      map((r) => r.data?.fusions),
      filter(isNonNulled)
    ) as Observable<FusionConnection>

    this.pageInfo$ = this.connection$.pipe(
      map((c) => c.pageInfo),
      filter(isNonNulled)
    )

    this.menuFusions$ = this.connection$.pipe(
      map((c) => c.edges.map((e) => e.node), filter(isNonNulled))
    )

    this.totalFusions$ = this.connection$.pipe(map((c) => c.totalCount))

    //this.debouncedQuery
    //  .pipe(debounceTime(500), untilDestroyed(this))
    //  .subscribe((_) => this.refresh())
  }

  //onModelUpdated() {
  //  this.debouncedQuery.next()
  //}

  //refresh() {
  //  if (this.geneId === undefined) {
  //    throw new Error(
  //      'Must pass a gene id into molecular profile menu component.'
  //    )
  //  }
  //  this.queryRef$.refetch({
  //    genePartnerId: this.geneId,
  //    first: this.pageSize,
  //  })
  //}

  fetchMore(endCursor: string) {
    this.queryRef$.fetchMore({
      variables: {
        first: this.pageSize,
        after: endCursor,
      },
    })
  }
}

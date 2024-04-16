import { Component, Input, OnInit } from '@angular/core'
import {
  VariantsMenuGQL,
  Maybe,
  MenuVariantFragment,
  VariantsMenuQuery,
  VariantsMenuQueryVariables,
  PageInfo,
  VariantMenuSortColumns,
  SortDirection,
  MenuVariantTypeFragment,
  VariantTypesForFeatureGQL,
} from '@app/generated/civic.apollo'
import { map, debounceTime, filter, startWith } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { ApolloQueryResult } from '@apollo/client/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { isNonNulled } from 'rxjs-etc'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { LinkableFeature } from '@app/components/features/feature-tag/feature-tag.component'

@UntilDestroy()
@Component({
  selector: 'cvc-variant-menu',
  templateUrl: './variants-menu.component.html',
  styleUrls: ['./variants-menu.component.less'],
})
export class CvcVariantsMenuComponent implements OnInit {
  @Input() feature?: LinkableFeature
  featureId?: number

  menuVariants$?: Observable<Maybe<MenuVariantFragment>[]>
  menuVariantTypes$?: Observable<Maybe<MenuVariantTypeFragment>[]>
  totalVariants$?: Observable<number>
  queryRef$!: QueryRef<VariantsMenuQuery, VariantsMenuQueryVariables>
  pageInfo$?: Observable<PageInfo>
  loading$?: Observable<boolean>

  sortBy: VariantMenuSortColumns = VariantMenuSortColumns.Name
  variantNameFilter: Maybe<string>
  variantTypeFilter: Maybe<MenuVariantTypeFragment[]> = []
  hasNoVariantType: boolean = false

  private debouncedQuery = new Subject<void>()
  private result$!: Observable<ApolloQueryResult<VariantsMenuQuery>>
  private initialQueryVars!: VariantsMenuQueryVariables
  pageSize = 50

  iconColor = getEntityColor('VariantType')

  constructor(
    private gql: VariantsMenuGQL,
    private variantTypeGql: VariantTypesForFeatureGQL
  ) {}

  ngOnInit() {
    if (this.feature === undefined) {
      throw new Error('Must pass a feature into variant menu component.')
    }

    this.featureId = this.feature.id

    this.initialQueryVars = {
      featureId: this.featureId,
      first: this.pageSize,
    }

    this.queryRef$ = this.gql.watch(this.initialQueryVars)
    this.result$ = this.queryRef$.valueChanges

    this.loading$ = this.result$.pipe(
      map(({ data, loading }) => loading && !data),
      filter(isNonNulled),
      startWith(true)
    )

    const connection$ = this.result$.pipe(
      map((r) => r.data?.variants),
      filter(isNonNulled)
    )

    this.pageInfo$ = connection$.pipe(
      map((c) => c.pageInfo),
      filter(isNonNulled)
    )

    this.menuVariants$ = connection$.pipe(
      map((c) => c.nodes),
      filter(isNonNulled)
    )

    this.totalVariants$ = connection$.pipe(map((c) => c.totalCount))

    this.debouncedQuery
      .pipe(debounceTime(500), untilDestroyed(this))
      .subscribe((_) => this.refresh())

    this.menuVariantTypes$ = this.variantTypeGql
      .watch({ featureId: this.featureId })
      .valueChanges.pipe(
        map((c) => c.data?.variantTypes.edges?.map((e) => e.node)),
        filter(isNonNulled)
      )
  }

  onModelUpdated() {
    this.debouncedQuery.next()
  }

  onVariantSortOrderChanged(col: VariantMenuSortColumns) {
    let dir =
      col == VariantMenuSortColumns.CoordinateEnd
        ? SortDirection.Desc
        : SortDirection.Asc
    this.queryRef$.refetch({
      first: this.pageSize,
      sortBy: {
        column: col,
        direction: dir,
      },
    })
  }

  refresh() {
    if (this.featureId === undefined) {
      throw new Error('Must pass a feature id into variant menu component.')
    }

    this.queryRef$.refetch({
      featureId: this.featureId,
      variantName: this.variantNameFilter,
      hasNoVariantType: this.hasNoVariantType,
      variantTypeIds: this.variantTypeFilter?.map((vt) => vt.id),
      first: this.pageSize,
      sortBy: {
        column: this.sortBy,
        direction: SortDirection.Asc,
      },
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

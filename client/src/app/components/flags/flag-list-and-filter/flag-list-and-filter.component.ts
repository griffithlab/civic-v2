import { Component, Input, OnInit, output } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  FlaggableInput,
  FlagFragment,
  FlagListQuery,
  FlagListQueryVariables,
  Maybe,
  FlagState,
  FlagListGQL,
  PageInfo,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc'

export interface UniqueFlaggingUsers {
  id: number
  username: string
  profileImagePath?: string
}

export interface SelectableFlagState {
  id: number
  displayName: string
  value: FlagState
}

@Component({
  selector: 'cvc-flag-list-and-filter',
  templateUrl: './flag-list-and-filter.component.html',
  styleUrls: ['./flag-list-and-filter.component.less'],
  standalone: false,
})
export class CvcFlagListAndFilterComponent implements OnInit {
  @Input() flaggable!: FlaggableInput
  onFlagsUpdated = output<void>()

  private queryRef!: QueryRef<FlagListQuery, FlagListQueryVariables>
  private results$!: Observable<ApolloQueryResult<FlagListQuery>>
  private defaultPageSize = 5
  flags$!: Observable<FlagFragment[]>
  pageInfo$?: Observable<Maybe<PageInfo>>
  uniqueFlaggingUsers$: Maybe<Observable<Maybe<UniqueFlaggingUsers[]>>>
  uniqueResolvingUsers$: Maybe<Observable<Maybe<UniqueFlaggingUsers[]>>>
  unfilteredCount$: Maybe<Observable<Maybe<number>>>

  selectableStates: SelectableFlagState[] = [
    { id: 1, displayName: 'Open', value: FlagState.Open },
    { id: 2, displayName: 'Resolved', value: FlagState.Resolved },
  ]

  refresh!: () => void

  constructor(private gql: FlagListGQL) {}

  ngOnInit() {
    if (this.flaggable == undefined) {
      throw new Error('Must pass a flaggable into flag list')
    }

    this.queryRef = this.gql.watch({
      first: this.defaultPageSize,
      flaggable: this.flaggable,
      state: FlagState.Open,
    })

    this.refresh = () => {
      this.queryRef.refetch()
      this.onFlagsUpdated.emit()
    }

    this.results$ = this.queryRef.valueChanges
    this.flags$ = this.results$.pipe(
      pluck('data', 'flags', 'edges'),
      filter(isNonNulled),
      map((edges) => {
        return edges.map((e) => e.node as FlagFragment)
      })
    )

    this.pageInfo$ = this.results$.pipe(pluck('data', 'flags', 'pageInfo'))

    this.unfilteredCount$ = this.results$.pipe(
      pluck('data', 'flags', 'unfilteredCountForSubject')
    )

    this.uniqueFlaggingUsers$ = this.results$.pipe(
      map(({ data }) => {
        return data.flags?.uniqueFlaggingUsers
      })
    )

    this.uniqueResolvingUsers$ = this.results$.pipe(
      map(({ data }) => {
        return data.flags?.uniqueResolvingUsers
      })
    )
  }

  onFlaggingUsersSelected(user: UniqueFlaggingUsers) {
    this.queryRef.refetch({
      flaggable: {
        id: this.flaggable.id,
        entityType: this.flaggable.entityType,
      },
      flaggingUserId: user ? user.id : undefined,
    })
  }

  onResolvingUsersSelected(user: UniqueFlaggingUsers) {
    this.queryRef.refetch({
      flaggable: {
        id: this.flaggable.id,
        entityType: this.flaggable.entityType,
      },
      resolvingUserId: user ? user.id : undefined,
    })
  }

  onStateSelected(state: Maybe<SelectableFlagState>) {
    this.queryRef.refetch({
      flaggable: {
        id: this.flaggable.id,
        entityType: this.flaggable.entityType,
      },
      state: state ? state.value : undefined,
    })
  }

  loadMore(afterCursor: Maybe<string>): void {
    this.queryRef?.fetchMore({
      variables: {
        first: this.defaultPageSize,
        after: afterCursor,
      },
    })
  }
}

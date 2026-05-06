import { Component, input, model, Signal } from '@angular/core'
import { ActivityFeedFilterOptions } from '../../activity-feed.types'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { FormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CommonModule } from '@angular/common'
import { from, map, Subject, switchMap } from 'rxjs'
import {
  BrowseUser,
  UserFilterSearchGQL,
  UserFilterSearchQuery,
  UserFilterSearchQueryVariables,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'cvc-user-filter-select',
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzSelectModule,
    CvcPipesModule,
  ],
  templateUrl: './user-filter-select.component.html',
  styleUrl: './user-filter-select.component.less',
})
export class CvcUserFilterSelect {
  cvcUniqueParticipants =
    input.required<ActivityFeedFilterOptions['uniqueParticipants']>()
  cvcUserId = model.required<number[]>()

  onSearch$: Subject<string>
  onSearch: Signal<string>
  queryRef!: QueryRef<UserFilterSearchQuery, UserFilterSearchQueryVariables>
  filteredUsers: Signal<BrowseUser[]>

  constructor(private gql: UserFilterSearchGQL) {
    this.onSearch$ = new Subject<string>()
    const filteredUser$ = this.onSearch$.pipe(
      // skip(1),
      // filter(isNonNulled),
      switchMap((nameStr) => {
        const query = {
          name: nameStr,
          first: 25,
        }
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
          result.data?.browseUsers.edges.map((e) => e.node! as BrowseUser) ?? []
      )
    )
    this.filteredUsers = toSignal(filteredUser$, { initialValue: [] })
    this.onSearch = toSignal(this.onSearch$, { initialValue: '' })
  }
}

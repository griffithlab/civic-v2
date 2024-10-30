import {
  Component,
  input,
  model,
  output,
  Signal,
  WritableSignal,
} from '@angular/core'
import { ActivityFeedFilterOptions } from '../../activity-feed.types'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { FormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CommonModule } from '@angular/common'
import { from, map, skip, startWith, Subject, switchMap } from 'rxjs'
import {
  BrowseUser,
  User,
  UserFilterSearchGQL,
  UserFilterSearchQuery,
  UserFilterSearchQueryVariables,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { tag } from 'rxjs-spy/operators'
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'cvc-user-filter-select',
  standalone: true,
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
      tag(`filteredUser$`),
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
          result.data?.users.edges.map((e) => e.node! as BrowseUser) ?? []
      ),
      tag(`${this.constructor.name} filteredUser$ after`)
    )
    this.filteredUsers = toSignal(filteredUser$, { initialValue: [] })
    this.onSearch = toSignal(this.onSearch$, { initialValue: '' })
  }
}

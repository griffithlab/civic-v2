import { Component, Input, OnInit } from '@angular/core'
import {
  EndorsementListGQL,
  EndorsementListNodeFragment,
  EndorsementListQuery,
  EndorsementListQueryVariables,
  Maybe,
  PageInfo,
} from '@app/generated/civic.apollo'

import { QueryRef } from 'apollo-angular'

import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map, pluck } from 'rxjs/operators'

@Component({
  selector: 'cvc-endorsement-list',
  templateUrl: './endorsement-list.component.html',
  styleUrls: ['./endorsement-list.component.less'],
  standalone: false,
})
export class CvcEndorsementListComponent implements OnInit {
  @Input() assertionId!: number

  loading$?: Observable<boolean>
  pageInfo$?: Observable<PageInfo>
  endorsements$?: Observable<Maybe<EndorsementListNodeFragment>[]>

  private queryRef$!: QueryRef<
    EndorsementListQuery,
    EndorsementListQueryVariables
  >

  private pageSize = 5

  constructor(private gql: EndorsementListGQL) {}

  ngOnInit() {
    this.queryRef$ = this.gql.watch({
      assertionId: this.assertionId,
      last: this.pageSize,
    })

    let results = this.queryRef$.valueChanges

    this.pageInfo$ = results.pipe(
      pluck('data'),
      filter(isNonNulled),
      map(({ endorsements }) => endorsements.pageInfo)
    )

    this.loading$ = results.pipe(map(({ loading }) => loading))

    this.endorsements$ = results.pipe(
      pluck('data'),
      filter(isNonNulled),
      map(({ endorsements }) => endorsements.edges.map((e) => e.node))
    )
  }

  onLoadMore(cursor: Maybe<string>): void {
    this.queryRef$.fetchMore({
      variables: {
        last: this.pageSize,
        before: cursor,
      },
    })
  }

  refreshList() {
    this.queryRef$.refetch()
  }
}

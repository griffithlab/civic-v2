import { Component, Input, OnInit } from '@angular/core'
import {
  CommentableInput,
  CommentListGQL,
  CommentListNodeFragment,
  CommentListQuery,
  CommentListQueryVariables,
  CommentTagSegment,
  DateSortColumns,
  Maybe,
  PageInfo,
  SortDirection,
  UserRole,
} from '@app/generated/civic.apollo'

import { QueryRef } from 'apollo-angular'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { TagLinkableUser } from '@app/components/users/user-tag/user-tag.component'

interface CommentTagSegmentWithId {
  id: string
  tag: CommentTagSegment
}

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less'],
})
export class CvcCommentListComponent implements OnInit {
  @Input() commentable!: CommentableInput
  @Input() creationComment?: CommentListNodeFragment

  loading$?: Observable<boolean>
  pageInfo$?: Observable<PageInfo>
  comments$?: Observable<Maybe<CommentListNodeFragment>[]>
  commenters$?: Observable<TagLinkableUser[]>
  mentionedUsers$?: Observable<TagLinkableUser[]>
  mentionedRoles$?: Observable<CommentTagSegmentWithId[]>
  mentionedEntities$?: Observable<CommentTagSegmentWithId[]>
  unfilteredCount$: Maybe<Observable<Maybe<number>>>

  private queryRef$!: QueryRef<CommentListQuery, CommentListQueryVariables>

  private pageSize = 5

  constructor(private gql: CommentListGQL) {}

  ngOnInit() {
    this.queryRef$ = this.gql.watch({
      subject: this.commentable,
      last: this.pageSize,
      sortBy: {
        column: DateSortColumns.Created,
        direction: SortDirection.Asc,
      },
    })

    let results = this.queryRef$.valueChanges

    this.pageInfo$ = results.pipe(map(({ data }) => data.comments.pageInfo))

    this.loading$ = results.pipe(map(({ loading }) => loading))

    this.comments$ = results.pipe(
      map(({ data }) => data.comments.edges.map((e) => e.node))
    )

    this.commenters$ = results.pipe(
      map(({ data }) => data.comments.uniqueCommenters)
    )

    this.mentionedUsers$ = results.pipe(
      map(({ data }) => data.comments.mentionedUsers)
    )

    this.mentionedRoles$ = results.pipe(
      map(({ data }) =>
        data.comments.mentionedRoles.map((t) => {
          return { id: `${t.entityId}-${t.tagType}`, tag: t }
        })
      )
    )

    this.mentionedEntities$ = results.pipe(
      map(({ data }) =>
        data.comments.mentionedEntities.map((t) => {
          return { id: `${t.entityId}-${t.tagType}`, tag: t }
        })
      )
    )

    this.unfilteredCount$ = results.pipe(
      pluck('data', 'comments', 'unfilteredCountForSubject')
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

  onCommenterSelected(u: Maybe<TagLinkableUser>): void {
    this.queryRef$.refetch({
      originatingUserId: u?.id,
    })
  }

  onMentionedUserSelected(u: Maybe<TagLinkableUser>): void {
    this.queryRef$.refetch({
      mentionedUserId: u?.id,
    })
  }

  onMentionedRoleSelected(r: Maybe<CommentTagSegmentWithId>): void {
    if (r) {
      let enumVal = (<any>UserRole)[
        r.tag.displayName[0].toUpperCase() + r.tag.displayName.slice(1)
      ]
      this.queryRef$.refetch({
        mentionedRole: enumVal,
      })
    } else {
      this.queryRef$.refetch({
        mentionedRole: undefined,
      })
    }
  }

  onMentionedEntitySelected(r: Maybe<CommentTagSegmentWithId>): void {
    if (r) {
      this.queryRef$.refetch({
        mentionedEntity: { entityType: r.tag.tagType, id: r.tag.entityId },
      })
    } else {
      this.queryRef$.refetch({
        mentionedEntity: undefined,
      })
    }
  }

  refreshList() {
    this.queryRef$.refetch()
  }
}

import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommentableInput, CommentListGQL, CommentListNodeFragment, CommentListQuery, CommentListQueryVariables, DateSort, DateSortColumns, Maybe, PageInfo, SortDirection } from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';
import { QueryRef } from 'apollo-angular';

import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { TagLinkableUser } from '@app/components/users/user-tag/user-tag.component';

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less'],
})
export class CvcCommentListComponent implements OnInit {
  @Input() commentable!: CommentableInput;

  viewer$?: Observable<Viewer>;
  loading$?: Observable<boolean>;
  pageInfo$?: Observable<PageInfo>;
  comments$?: Observable<Maybe<CommentListNodeFragment>[]>;
  participants$?: Observable<TagLinkableUser[]>

  private queryRef$!: QueryRef<CommentListQuery, CommentListQueryVariables>;

  private pageSize = 5;

  constructor(private gql: CommentListGQL, private viewerService: ViewerService) { }

  ngOnInit() {
    this.queryRef$ = this.gql.watch({
      subject: this.commentable,
      last: this.pageSize,
      sortBy: {
        column: DateSortColumns.Created,
        direction: SortDirection.Asc
      }});

    this.viewer$ = this.viewerService.viewer$;

    let results = this.queryRef$.valueChanges;

    this.pageInfo$ = results.pipe(
      map(({data}) => data.comments.pageInfo)
    );

    this.loading$ = results.pipe(
      map(({loading}) => loading)
    );

    this.comments$ = results.pipe(
      map(({ data }) => data.comments.edges.map((e) => e.node))
    );

    this.participants$ = results.pipe(
      map(({ data }) => data.comments.uniqueCommenters)
    );
  }

  onLoadMore(cursor: Maybe<string>): void {
    this.queryRef$.fetchMore({
      variables: {
        last: this.pageSize,
        before: cursor,
      },
    });
  }

  onParticipantSelected(u: Maybe<TagLinkableUser>): void {
    this.queryRef$.refetch({
      first: this.pageSize,
      originatingUserId: u?.id
    })
  }

  refreshList() {
    this.queryRef$.refetch();
  }
}

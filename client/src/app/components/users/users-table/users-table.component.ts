import { Component, Input, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Maybe, PageInfo, UsersSortColumns, OrganizationFilter, UserRole, UsersBrowseQuery, UsersBrowseQueryVariables, UsersBrowseGQL, UserBrowseTableRowFieldsFragment, SortDirection } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from 'rxjs';
import { map, pluck, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.less']
})
export class CvcUsersTableComponent implements OnInit {

  private debouncedQuery = new Subject<void>();
  initialPageSize = 25;
  fetchMorePageSize = 25;

  private queryRef!: QueryRef<UsersBrowseQuery, UsersBrowseQueryVariables>;

  isLoading$?: Observable<boolean>;
  users$?: Observable<Maybe<UserBrowseTableRowFieldsFragment>[]>;
  totalCount$?: Observable<number>;
  pageInfo$?: Observable<PageInfo>;

  textInputCallback?: () => void;

  // filters

  sortColumns: typeof UsersSortColumns = UsersSortColumns
  nameInput: Maybe<string>
  orgNameInput: Maybe<string>
  roleInput: Maybe<UserRole>

  orgName: Maybe<OrganizationFilter>
  
  constructor(private gql: UsersBrowseGQL) { }

  ngOnInit(): void {

    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      sortBy: {
        column: UsersSortColumns.LastAction,
        direction: SortDirection.Desc
      }
    });

    let observable = this.queryRef.valueChanges;

    this.isLoading$ = observable.pipe(
      pluck('loading'), startWith(true)
    );

    this.users$ = observable.pipe(
      pluck('data', 'users', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    );

    this.totalCount$ = observable.pipe(
      pluck('data', 'users', 'totalCount')
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'users', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );
    
    this.textInputCallback = () => { this.debouncedQuery.next(); }
  }

  refresh() {
    this.queryRef.refetch({
      userName: this.nameInput ? this.nameInput : undefined,
      orgName: this.orgNameInput? { "name": this.orgNameInput } : undefined ,
      userRole: this.roleInput ? this.roleInput : undefined
    })
  }

  onModelChanged() {
    this.debouncedQuery.next();
  }

  onSortChanged(e: SortDirectionEvent) {
    this.queryRef.refetch({ sortBy: buildSortParams(e) })
  }

  ngOnDestroy() {
    this.debouncedQuery.unsubscribe();
  }

  loadMore(afterCursor: Maybe<string>): void {
    this.queryRef.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: afterCursor
      }
    })
  }
}

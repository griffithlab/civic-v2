import { Component, OnDestroy, OnInit } from '@angular/core';
import { Maybe, OrganizationBrowseTableRowFieldsFragment, OrganizationsBrowseGQL, OrganizationsBrowseQuery, OrganizationsBrowseQueryVariables, OrganizationSortColumns, PageInfo } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-organizations-table',
  templateUrl: './organizations-table.component.html',
  styleUrls: ['./organizations-table.component.less']
})
export class CvcOrganizationsTableComponent implements OnInit {
  private initialPageSize = 25
  private queryRef!: QueryRef<OrganizationsBrowseQuery, OrganizationsBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  organizations$?: Observable<Maybe<OrganizationBrowseTableRowFieldsFragment>[]>
  totalCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>

  tableView: boolean = true

  textInputCallback?: () => void

  //filters
  orgNameInput: Maybe<string>
  idInput: Maybe<string>

  sortColumns: typeof OrganizationSortColumns = OrganizationSortColumns

  constructor(private gql: OrganizationsBrowseGQL) { }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      cardView: !this.tableView
    });

    let observable = this.queryRef.valueChanges;

    this.isLoading$ = observable.pipe(
      pluck('loading'), startWith(true)
    );

    this.organizations$ = observable.pipe(
      pluck('data', 'organizations', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    );

    this.totalCount$ = observable.pipe(
      pluck('data', 'organizations', 'totalCount')
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'organizations', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );

    this.textInputCallback = () => { this.debouncedQuery.next(); }
  }

  refresh() {
    this.queryRef.refetch({
      orgName: this.orgNameInput,
      id: this.idInput ? +this.idInput : undefined,
      cardView: !this.tableView
    })
  }

  onModelChanged() { this.debouncedQuery.next(); }

  onSortChanged(e: SortDirectionEvent) {
    this.queryRef.refetch({ sortBy: buildSortParams(e), cardView: !this.tableView })
  }

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

}

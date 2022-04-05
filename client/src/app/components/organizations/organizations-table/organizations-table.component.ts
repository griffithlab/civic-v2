import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Maybe, OrganizationBrowseTableRowFieldsFragment, OrganizationsBrowseGQL, OrganizationsBrowseQuery, OrganizationsBrowseQueryVariables, OrganizationSortColumns, PageInfo } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'cvc-organizations-table',
  templateUrl: './organizations-table.component.html',
  styleUrls: ['./organizations-table.component.less']
})
export class CvcOrganizationsTableComponent implements OnInit {
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  private initialPageSize = 25
  private queryRef!: QueryRef<OrganizationsBrowseQuery, OrganizationsBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  organizations$?: Observable<Maybe<OrganizationBrowseTableRowFieldsFragment>[]>
  filteredCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>

  tableView: boolean = true

  totalCount?: number
  visibleCount: number = this.initialPageSize

  loadedPages: number =  1

  textInputCallback?: () => void

  //filters
  orgNameInput: Maybe<string>
  idInput: Maybe<string>

  sortColumns: typeof OrganizationSortColumns = OrganizationSortColumns

  fetchMorePageSize = 25;

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

    this.filteredCount$ = observable.pipe(
      pluck('data', 'organizations', 'totalCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
      value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize + this.fetchMorePageSize * (this.loadedPages - 1)
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      }
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
    this.loadedPages = 1
    this.queryRef.refetch({
      orgName: this.orgNameInput,
      id: this.idInput ? +this.idInput : undefined,
      cardView: !this.tableView
    })
  }

  onModelChanged() { this.debouncedQuery.next(); }

  onSortChanged(e: SortDirectionEvent) {
    this.loadedPages = 1
    this.queryRef.refetch({ sortBy: buildSortParams(e), cardView: !this.tableView })
  }

  loadMore(afterCursor: Maybe<string>):void {
    this.queryRef?.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: afterCursor
      },
    });

    this.loadedPages += 1
  }

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

}

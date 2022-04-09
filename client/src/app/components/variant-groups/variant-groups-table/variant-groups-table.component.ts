import { Component, Input, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { BrowseVariantGroupRowFieldsFragment, BrowseVariantGroupsGQL, BrowseVariantGroupsQuery, Maybe, PageInfo, QueryBrowseVariantGroupsArgs, VariantGroupsSortColumns } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from "@app/core/utilities/datatable-helpers";
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from "rxjs";
import { map, pluck, startWith, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'cvc-variant-groups-table',
  templateUrl: './variant-groups-table.component.html',
  styleUrls: ['./variant-groups-table.component.less']
})
export class CvcVariantGroupsTableComponent implements OnInit {
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseVariantGroupsQuery, QueryBrowseVariantGroupsArgs>;
  data$?: Observable<ApolloQueryResult<BrowseVariantGroupsQuery>>;
  isLoading$?: Observable<boolean>;
  variantGroups$?: Observable<Maybe<BrowseVariantGroupRowFieldsFragment>[]>;
  pageInfo$?: Observable<PageInfo>;
  filteredCount$?: Observable<number>

  textInputCallback?: () => void

  //filters
  nameInput: Maybe<string>
  geneNameInput: Maybe<string>
  variantNameInput: Maybe<string>

  pageSize = 25
  sortColumns: typeof VariantGroupsSortColumns = VariantGroupsSortColumns

  totalCount?: number
  visibleCount: number = this.pageSize
  loadedPages: number = 1

  constructor(private gql: BrowseVariantGroupsGQL) {}

  ngOnInit() {
    this.queryRef = this.gql.watch({ first: this.pageSize })

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        }
      })
    );

    this.isLoading$ = this.data$.pipe(pluck('loading'), startWith(true));

    this.variantGroups$ = this.data$.pipe(
      pluck('data', 'browseVariantGroups', 'edges'),
      map((edges) => {
        return edges.map(e => e.node)
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseVariantGroups', 'pageInfo')
    );

    this.filteredCount$ = this.data$.pipe(
      pluck('data', 'browseVariantGroups', 'filteredCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
      value => {
        if (value < this.pageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.pageSize * this.loadedPages
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      }
    )

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );

      this.textInputCallback = () => { this.debouncedQuery.next(); }
  }

  refresh() {
    this.loadedPages = 1
    this.queryRef?.refetch({
      name: this.nameInput,
      geneNames: this.geneNameInput,
      variantNames: this.variantNameInput
    })
  }

  onSortChanged(e: SortDirectionEvent) {
    this.loadedPages = 1
    this.queryRef?.refetch({sortBy: buildSortParams(e)})
  }

  onModelChanged() {
    this.debouncedQuery.next()
  }

  ngOnDestroy() {
    this.debouncedQuery.unsubscribe();
  }

  loadMore(cursor: Maybe<string>) {
    this.queryRef?.fetchMore({
      variables: {
        first: this.pageSize,
        after: cursor
      }
    });

    this.loadedPages += 1
  }
}

import { Component, Input, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { BrowseDiseaseRowFieldsFragment, BrowseDiseasesGQL, BrowseDiseasesQuery, BrowseVariantGroupsGQL, DiseasesSortColumns, Maybe, PageInfo, QueryBrowseDiseasesArgs } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from "@app/core/utilities/datatable-helpers";
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from "rxjs";
import { map, pluck, startWith, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'cvc-diseases-table',
  templateUrl: './diseases-table.component.html',
  styleUrls: ['./diseases-table.component.less']
})
export class CvcDiseasesTableComponent implements OnInit {
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseDiseasesQuery, QueryBrowseDiseasesArgs>;
  data$?: Observable<ApolloQueryResult<BrowseDiseasesQuery>>;
  isLoading$?: Observable<boolean>;
  diseases$?: Observable<Maybe<BrowseDiseaseRowFieldsFragment>[]>;
  pageInfo$?: Observable<PageInfo>;

  textInputCallback?: () => void

  //filters
  nameInput: Maybe<string>
  geneNameInput: Maybe<string>
  doidInput: Maybe<string>

  initialPageSize = 25
  sortColumns: typeof DiseasesSortColumns = DiseasesSortColumns

  filteredCount$?: Observable<number>
  totalCount?: number
  visibleCount: number = this.initialPageSize

  loadedPages: number = 1

  constructor(private gql: BrowseDiseasesGQL) {}

  ngOnInit() {
    this.queryRef = this.gql.watch({ first: this.initialPageSize })

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

    this.diseases$ = this.data$.pipe(
      pluck('data', 'browseDiseases', 'edges'),
      map((edges) => {
        return edges.map(e => e.node)
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseDiseases', 'pageInfo')
    );

    this.filteredCount$ = this.data$.pipe(
      pluck('data', 'browseDiseases', 'totalCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
      value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize * this.loadedPages
          if (this.totalCount && this.visibleCount > this.totalCount) {
            this.visibleCount = this.totalCount
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
      doid: this.doidInput
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
        first: this.initialPageSize,
        after: cursor
      }
    });

    this.loadedPages += 1
  }
}

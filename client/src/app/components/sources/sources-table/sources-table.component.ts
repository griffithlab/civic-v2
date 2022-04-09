import { Component, Input, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { BrowseSourceRowFieldsFragment, BrowseSourcesGQL, BrowseSourcesQuery, Maybe, PageInfo, QueryBrowseSourcesArgs, SourceSource, SourcesSortColumns } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from "@app/core/utilities/datatable-helpers";
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from "rxjs";
import { map, pluck, startWith, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'cvc-sources-table',
  templateUrl: './sources-table.component.html',
  styleUrls: ['./sources-table.component.less']
})
export class CvcSourcesTableComponent implements OnInit {
  @Input() clinicalTrialId: Maybe<number>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseSourcesQuery, QueryBrowseSourcesArgs>;
  data$?: Observable<ApolloQueryResult<BrowseSourcesQuery>>;
  isLoading$?: Observable<boolean>;
  sources$?: Observable<Maybe<BrowseSourceRowFieldsFragment>[]>;
  pageInfo$?: Observable<PageInfo>;
  filteredCount$?: Observable<number>

  textInputCallback?: () => void

  //filters
  citationIdInput: Maybe<string>
  authorInput: Maybe<string>
  yearInput: Maybe<string>
  journalInput: Maybe<string>
  nameInput: Maybe<string>
  sourceTypeInput: Maybe<SourceSource>

  pageSize = 25
  sortColumns: typeof SourcesSortColumns = SourcesSortColumns

  totalCount?: number
  visibleCount: number = this.pageSize
  loadedPages: number = 1

  constructor(private gql: BrowseSourcesGQL) {}
  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.pageSize,
      clinicalTrialId: this.clinicalTrialId
    })

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

    this.sources$ = this.data$.pipe(
      pluck('data', 'browseSources', 'edges'),
      map((edges) => {
        return edges.map(e => e.node)
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseSources', 'pageInfo')
    );

    this.filteredCount$ = this.data$.pipe(
      pluck('data', 'browseSources', 'filteredCount')
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
      citationId: this.citationIdInput ? +this.citationIdInput : undefined,
      author: this.authorInput,
      year: this.yearInput ? +this.yearInput : undefined,
      journal: this.journalInput,
      name: this.nameInput,
      sourceType: this.sourceTypeInput
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

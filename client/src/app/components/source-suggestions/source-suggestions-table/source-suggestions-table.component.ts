import { Component, Input, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { BrowseSourceSuggestionRowFieldsFragment, BrowseSourceSuggestionsGQL, BrowseSourceSuggestionsQuery, Maybe, PageInfo, QuerySourceSuggestionsArgs, SourceSource, SourceSuggestionsSortColumns, SourceSuggestionStatus, UpdateSourceSuggestionGQL, UpdateSourceSuggestionMutation, UpdateSourceSuggestionMutationVariables } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from "@app/core/utilities/datatable-helpers";
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from "rxjs";
import { map, pluck, startWith, debounceTime, take } from 'rxjs/operators';
import { Viewer, ViewerService } from "@app/core/services/viewer/viewer.service";
import { NetworkErrorsService } from "@app/core/services/network-errors.service";

@Component({
  selector: 'cvc-source-suggestions-table',
  templateUrl: './source-suggestions-table.component.html',
  styleUrls: ['./source-suggestions-table.component.less']
})
export class CvcSourceSuggestionsTableComponent implements OnInit, OnDestroy {
  @Input() sourceId: Maybe<number>
  @Input() submitterId: Maybe<number>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseSourceSuggestionsQuery, QuerySourceSuggestionsArgs>;
  data$?: Observable<ApolloQueryResult<BrowseSourceSuggestionsQuery>>;
  isLoading$?: Observable<boolean>;
  sourceSuggestions$?: Observable<Maybe<BrowseSourceSuggestionRowFieldsFragment>[]>;
  pageInfo$?: Observable<PageInfo>;
  viewer$?: Observable<Viewer>
  filteredCount$?: Observable<number>

  textInputCallback?: () => void

  //filters
  citationIdInput: Maybe<string>
  sourceTypeInput: Maybe<SourceSource>
  sourceIdInput: Maybe<number>
  geneNameInput: Maybe<string>
  variantNameInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  commentInput: Maybe<string>
  submitterInput: Maybe<string>
  citationInput: Maybe<string>
  statusInput = SourceSuggestionStatus.New

  pageSize: number = 25
  sortColumns: typeof SourceSuggestionsSortColumns = SourceSuggestionsSortColumns
  status: typeof SourceSuggestionStatus = SourceSuggestionStatus


  selectedSourceId?: number
  selectedStatus?: SourceSuggestionStatus
  showManageForm = false

  totalCount?: number
  visibleCount: number = this.pageSize
  loadedPages: number = 1

  constructor(
    private gql: BrowseSourceSuggestionsGQL,
    private viewerService: ViewerService,
    private networkErrorService: NetworkErrorsService,
    ) { }

  ngOnInit() {

    this.queryRef = this.gql.watch({
      first: this.pageSize,
      sourceId: this.sourceId,
      submitterId: this.submitterId,
      status: this.status.New
    })

    this.viewer$ = this.viewerService.viewer$

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

    this.sourceSuggestions$ = this.data$.pipe(
      pluck('data', 'sourceSuggestions', 'edges'),
      map((edges) => {
        return edges.map(e => e.node)
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'sourceSuggestions', 'pageInfo')
    );

    this.filteredCount$ = this.data$.pipe(
      pluck('data', 'sourceSuggestions', 'filteredCount')
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
      sourceType: this.sourceTypeInput ? this.sourceTypeInput : undefined,
      sourceId: this.sourceIdInput ? +this.sourceIdInput : undefined,
      geneName: this.geneNameInput,
      variantName: this.variantNameInput,
      diseaseName: this.diseaseNameInput,
      comment: this.commentInput,
      submitter: this.submitterInput,
      citation: this.citationInput,
      status: this.statusInput? this.statusInput : undefined
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

  setFormInputs(selectedId: number, selectedStatus: SourceSuggestionStatus): void {
    this.selectedSourceId = selectedId
    this.selectedStatus = selectedStatus
    this.showManageForm = true
  }

  closePopover() {
    this.showManageForm = false
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

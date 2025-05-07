import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  buildSortParams,
  SortDirectionEvent,
} from '@app/core/utilities/datatable-helpers'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import {
  BrowseSourceSuggestionRowFieldsFragment,
  BrowseSourceSuggestionsGQL,
  BrowseSourceSuggestionsQuery,
  Maybe,
  PageInfo,
  QuerySourceSuggestionsArgs,
  SortDirection,
  SourceSource,
  SourceSuggestionConnection,
  SourceSuggestionsSortColumns,
  SourceSuggestionStatus,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  skip,
  take,
  takeWhile,
  withLatestFrom,
} from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

export interface SourceSuggestionTableFilters {
  citationIdInput?: Maybe<string>
  citationInput?: Maybe<string>
  commentInput?: Maybe<string>
  diseaseNameInput?: Maybe<string>
  molecularProfileNameInput?: Maybe<string>
  sourceIdInput?: Maybe<number>
  sourceTypeInput?: Maybe<SourceSource>
  submitterInput?: Maybe<string>
}

@UntilDestroy()
@Component({
    selector: 'cvc-source-suggestions-table',
    templateUrl: './source-suggestions-table.component.html',
    styleUrls: ['./source-suggestions-table.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcSourceSuggestionsTableComponent implements OnInit {
  @Input() cvcHeight?: string
  @Input() sourceId: Maybe<number>
  @Input() submitterId: Maybe<number>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>
  @Input() initialPageSize = 35
  @Input()
  set initialUserFilters(f: Maybe<SourceSuggestionTableFilters>) {
    // assign any attributes in filters object to this class
    if (f) Object.assign(this, f)
  }

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>
  sortChange$: Subject<SortDirectionEvent>
  filterChange$: Subject<void>

  // INTERMEDIATE STREAMS
  queryRef!: QueryRef<BrowseSourceSuggestionsQuery, QuerySourceSuggestionsArgs>
  result$!: Observable<ApolloQueryResult<BrowseSourceSuggestionsQuery>>
  connection$!: Observable<SourceSuggestionConnection>

  // PRESENTATION STREAMS
  pageInfo$!: Observable<PageInfo>
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<BrowseSourceSuggestionRowFieldsFragment>[]>
  scrollIndex$: Subject<number>
  noMoreRows$: BehaviorSubject<boolean>

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling = false

  //filters
  citationIdInput: Maybe<string>
  sourceTypeInput: Maybe<SourceSource>
  sourceIdInput: Maybe<number>
  molecularProfileNameInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  commentInput: Maybe<string>
  submitterInput: Maybe<string>
  citationInput: Maybe<string>
  statusInput = SourceSuggestionStatus.New

  sortColumns = SourceSuggestionsSortColumns
  status = SourceSuggestionStatus

  selectedSourceId?: number
  selectedStatus?: SourceSuggestionStatus

  showManageForm = false

  isSignedIn!: boolean

  constructor(
    private gql: BrowseSourceSuggestionsGQL,
    private viewerService: ViewerService,
    private cdr: ChangeDetectorRef
  ) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.sortChange$ = new Subject<SortDirectionEvent>()
    this.filterChange$ = new Subject<void>()
    this.scrollIndex$ = new Subject<number>()

    // provide viewer signed in
    this.viewerService.viewer$
      .pipe(
        map((v) => v.signedIn),
        untilDestroyed(this)
      )
      .subscribe((si) => (this.isSignedIn = si as boolean))
  }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      sourceId: this.sourceId,
      submitterId: this.submitterId,
      status: this.status.New,
      sortBy: {
        column: this.sortColumns.CreatedAt,
        direction: SortDirection.Desc,
      },
    })

    this.result$ = this.queryRef.valueChanges

    // toggles table overlay 'Loading...' spinner
    this.initialLoading$ = this.result$.pipe(
      pluck('loading'),
      distinctUntilChanged(),
      takeWhile((l) => l !== false, true)
    ) // only activate on 1st true/false sequence

    // toggles table header 'Loading...' tag
    this.moreLoading$ = this.result$.pipe(
      pluck('loading'),
      distinctUntilChanged(),
      skip(2)
    ) // skip 1st true/false sequence

    // entity relay connection
    this.connection$ = this.result$.pipe(
      pluck('data', 'sourceSuggestions'),
      filter(isNonNulled)
    ) as Observable<SourceSuggestionConnection>

    // entity row nodes
    this.row$ = this.connection$.pipe(
      pluck('edges'),
      filter(isNonNulled),
      map((edges) => edges.map((e) => e.node))
    )

    // provided to table-scroll directive for fetchMore queries
    this.pageInfo$ = this.connection$.pipe(
      pluck('pageInfo'),
      filter(isNonNulled)
    )

    // refetch when column sort changes
    this.sortChange$
      .pipe(untilDestroyed(this))
      .subscribe((e: SortDirectionEvent) => {
        this.queryRef.refetch({ sortBy: buildSortParams(e) })
      })

    // refresh when filters change
    this.filterChange$
      .pipe(debounceTime(500), untilDestroyed(this))
      .subscribe(() => {
        this.refresh()
      })

    // for every onScrolled event, convert to bool & set isScrolling
    this.scrollEvent$
      .pipe(
        map((e: ScrollEvent) => (e === 'stop' ? false : true)),
        distinctUntilChanged(),
        untilDestroyed(this)
      )
      .subscribe((e) => {
        this.isScrolling = e
        this.cdr.detectChanges()
      })

    // emit event from noMoreRow$ if hasNextPage false
    this.scrollEvent$
      .pipe(
        filter((e) => e === 'bottom'),
        withLatestFrom(this.pageInfo$),
        map(([_, pageInfo]: [ScrollEvent, PageInfo]) => pageInfo),
        untilDestroyed(this)
      )
      .subscribe((pageInfo: PageInfo) => {
        if (!pageInfo.hasNextPage) {
          this.noMoreRows$.next(true)
          this.cdr.detectChanges()

          // need to send a followup 'false' here or else
          // ng won't interpret subsequent 'true' events as changes
          setInterval(() => this.noMoreRows$.next(false))
        }
      })
  } // ngOnInit
  refresh() {
    this.queryRef
      .refetch({
        citationId: this.citationIdInput ? +this.citationIdInput : undefined,
        sourceType: this.sourceTypeInput ? this.sourceTypeInput : undefined,
        sourceId: this.sourceIdInput ? +this.sourceIdInput : undefined,
        molecularProfileName: this.molecularProfileNameInput,
        diseaseName: this.diseaseNameInput,
        comment: this.commentInput,
        submitter: this.submitterInput,
        citation: this.citationInput,
        status: this.statusInput ? this.statusInput : undefined,
      })
      .then(() => this.scrollIndex$.next(0))

    this.cdr.detectChanges()
  }

  setFormInputs(
    selectedId: number,
    selectedStatus: SourceSuggestionStatus
  ): void {
    this.selectedSourceId = selectedId
    this.selectedStatus = selectedStatus
    this.showManageForm = true
  }

  closePopover() {
    this.showManageForm = false
  }

  // virtual scroll helpers
  trackByIndex(_: number, data: Maybe<BrowseSourceSuggestionRowFieldsFragment>): Maybe<number> {
    return data?.id
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  Signal,
  computed,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  SortDirectionEvent,
} from '@app/core/utilities/datatable-helpers'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import {
  RevisionSetConnection,
  RevisionsBrowseGQL,
  RevisionsBrowseQuery,
  RevisionsBrowseQueryVariables,
  Maybe,
  PageInfo,
  RevisionSet,
  ViewerFieldsFragment,
  ActivitySubjectInput,
  RevisionFragment,
  RevisionSetBrowseFieldsFragment,
  RevisionActivityDetailFragment,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  skip,
  takeUntil,
  takeWhile,
  withLatestFrom,
} from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { ActivatedRoute } from '@angular/router'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { TagInfo } from '@app/components/shared/tag-overflow/tag-overflow.component'
import { EnumToTitlePipe } from '@app/core/pipes/enum-to-title-pipe'

@UntilDestroy()
@Component({
  selector: 'cvc-revisions-table',
  templateUrl: './revisions-table.component.html',
  styleUrls: ['./revisions-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcRevisionsTableComponent implements OnInit {
  @Input() cvcHeight: Maybe<string>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>

  // INTERMEDIATE STREAMS
  result$!: Observable<ApolloQueryResult<RevisionsBrowseQuery>>
  connection$!: Observable<RevisionSetConnection>
  pageInfo$!: Observable<PageInfo>

  // PRESENTATION STREAMS
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<RevisionSet>[]>
  scrollIndex$: Subject<number>
  noMoreRows$: BehaviorSubject<boolean>
  queryRef!: QueryRef<RevisionsBrowseQuery, RevisionsBrowseQueryVariables>
  expandSet = new Set<number>()
  expandDetails = new Map<number, Observable<Maybe<RevisionSetBrowseFieldsFragment>[]>>();
  detailRevision$: undefined | Observable<Maybe<RevisionFragment>> = undefined

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling: boolean = false
  
  private debouncedQuery = new Subject<void>()

  isLoading$?: Observable<boolean>
  filteredCount$?: Observable<number>

  isLoading = false

  initialPageSize = 25
  totalCount?: number
  fetchMorePageSize = 25
  isLoadingDelay = 300
  visibleCount: number = this.initialPageSize

  loadedPages: number = 1

  tableView: boolean = true

  textInputCallback?: () => void

  showTooltips = true

  //filters
  fieldNameInput: Maybe<string>
  originatingUserNameInput: Maybe<string>
  organizationNameInput: Maybe<string>
  subjectTypeInput: Maybe<ActivitySubjectInput>

  statusFilterVisible = false
  excludeOwnRevisions = false
  viewer: Signal<Maybe<Viewer>>
  user: Signal<Maybe<ViewerFieldsFragment>>

  private destroy$ = new Subject<void>()

  constructor(
    private gql: RevisionsBrowseGQL,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private viewerService: ViewerService,
  ) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.scrollIndex$ = new Subject<number>()
    this.viewer = toSignal(this.viewerService.viewer$)
    this.user = computed(() => {
      return this.viewer()?.user
    })
  }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      excludeRevisionsFromUserId: this.excludeOwnRevisions ? this.user()?.id : undefined,
    })

    this.result$ = this.queryRef.valueChanges

    // for controlling nzTable's loading overlay, which covers the whole table -
    // good for the initial load as it's hard to miss
    this.initialLoading$ = this.result$.pipe(
      pluck('loading'),
      distinctUntilChanged(),
      takeWhile((l) => l !== false, true)
    ) // only activate on 1st true/false sequence

    // controls the smaller [Loading...] indicator, better for not distracting
    // users by overlaying the row data they're focusing on
    this.moreLoading$ = this.result$.pipe(
      pluck('loading'),
      distinctUntilChanged(),
      skip(2)
    ) // skip 1st true/false sequence

    this.connection$ = this.result$.pipe(
      pluck('data', 'revisionSets'),
      filter(isNonNulled)
    ) as Observable<RevisionSetConnection>

    this.row$ = this.connection$.pipe(
      pluck('edges'),
      filter(isNonNulled),
      map((edges) => edges.map((e) => e.node))
    )

    this.pageInfo$ = this.connection$.pipe(
      pluck('pageInfo'),
      filter(isNonNulled)
    )

    this.debouncedQuery
      .pipe(takeUntil(this.destroy$), debounceTime(500))
      .subscribe((_) => this.refresh())

    this.textInputCallback = () => {
      this.debouncedQuery.next()
    }

    // for every onScrolled event, convert to bool, share multicast
    // false on 'scroll', true on 'stop'
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

    // emit event from noMoreRow$ when scroll viewport hits bottom
    // and no next page exists
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
  } // ngOnInit()

  // filtering, sorting callbacks
  onModelChanged() {
    this.debouncedQuery.next()
  }

  // refetch results, replacing current rows
  refresh() {
    this.isLoading = true
    this.loadedPages = 1
    this.queryRef.refetch({
      fieldName: this.fieldNameInput,
      originatingUserName: this.originatingUserNameInput,
      excludeRevisionsFromUserId: this.excludeOwnRevisions ? this.user()?.id : undefined,
      organizationName: this.organizationNameInput,
      subjectType: this.subjectTypeInput ? this.subjectTypeInput : undefined,
    })
  }

  // fetch more results, append to current rows
  loadMore(cursor: Maybe<string>) {
    this.isLoading = true
    this.queryRef.fetchMore({
      variables: { after: cursor },
    })

    this.loadedPages += 1
  }

  excludeOwnRevisionsChanged() {
    this.debouncedQuery.next()
    this.statusFilterVisible = false
  }

  // virtual scroll helpers
  trackByIndex(
    _: number,
    data: Maybe<RevisionSet>
  ): Maybe<number> {
    return data?.id
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  queryRevisionDetails(setId: number): Observable<Maybe<RevisionSetBrowseFieldsFragment>[]> {
    if (this.expandDetails.has(setId)) {
      return this.expandDetails.get(setId)!
    } else{
      const query = this.gql.fetch({
        id: setId,
        requestDetails: true,
      })
      const results = query.pipe(
        pluck('data', 'revisionSets', 'edges'),
        filter(isNonNulled),
        map((edges) => edges.map((e) => e.node))
      )
      this.expandDetails.set(setId, results)
      return results
    }
  }
  
  castToRevisionActivityDetailFragment(revision: any): RevisionActivityDetailFragment {
    return revision as RevisionActivityDetailFragment
  }

  revisionsToTagOverFlowInput(revisions: any[]): string[] {
    return revisions.map(revision => {
      if (revision.subject.__typename === 'ExonCoordinate' ) {
        const coordinateType = new EnumToTitlePipe().transform(revision.subject.coordinateType)
        return revision.fieldDisplayName + ' (' + coordinateType + ')'
      } else {
        return revision.fieldDisplayName
      }
    })
  }
}
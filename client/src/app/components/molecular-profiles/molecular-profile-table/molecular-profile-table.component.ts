import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  buildSortParams,
  SortDirectionEvent,
} from '@app/core/utilities/datatable-helpers'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import {
  BrowseMolecularProfilesFieldsFragment,
  Maybe,
  PageInfo,
  BrowseMolecularProfilesQuery,
  BrowseMolecularProfilesQueryVariables,
  BrowseMolecularProfileConnection,
  MolecularProfilesSortColumns,
  BrowseMolecularProfilesGQL,
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
  takeWhile,
  withLatestFrom,
} from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

export interface MolecularProfileTableUserFilters {
  variantNameInput?: Maybe<string>
  diseaseNameInput?: Maybe<string>
  therapyNameInput?: Maybe<string>
}

@UntilDestroy()
@Component({
    selector: 'cvc-molecular-profiles-table',
    templateUrl: './molecular-profile-table.component.html',
    styleUrls: ['./molecular-profile-table.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcMolecularProfilesTableComponent implements OnInit {
  @Input() cvcHeight?: Maybe<string>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>
  @Input() initialPageSize: number = 35
  @Input() variantId: Maybe<number>
  @Input()
  set initialUserFilters(f: Maybe<MolecularProfileTableUserFilters>) {
    // assign any attributes in filters object to this class
    if (f) Object.assign(this, f)
  }

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>
  sortChange$: Subject<SortDirectionEvent>
  filterChange$: Subject<void>

  // INTERMEDIATE STREAMS
  queryRef!: QueryRef<
    BrowseMolecularProfilesQuery,
    BrowseMolecularProfilesQueryVariables
  >
  result$!: Observable<ApolloQueryResult<BrowseMolecularProfilesQuery>>
  connection$!: Observable<BrowseMolecularProfileConnection>

  // PRESENTATION STREAMS
  pageInfo$!: Observable<PageInfo>
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<BrowseMolecularProfilesFieldsFragment>[]>
  scrollIndex$: Subject<number>
  noMoreRows$: BehaviorSubject<boolean>

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling: boolean = false

  // filters
  mpNameInput: Maybe<string>
  variantNameInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  therapyNameInput: Maybe<string>
  aliasInput: Maybe<string>

  private initialQueryArgs?: BrowseMolecularProfilesQueryVariables

  sortColumns = MolecularProfilesSortColumns

  constructor(
    private gql: BrowseMolecularProfilesGQL,
    private cdr: ChangeDetectorRef
  ) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.sortChange$ = new Subject<SortDirectionEvent>()
    this.filterChange$ = new Subject<void>()
    this.scrollIndex$ = new Subject<number>()
  }

  ngOnInit(): void {
    this.initialQueryArgs = {
      first: this.initialPageSize,
      variantId: this.variantId,
    }

    this.queryRef = this.gql.watch(this.initialQueryArgs)

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

    this.connection$ = this.result$.pipe(
      pluck('data', 'browseMolecularProfiles'),
      filter(isNonNulled)
    ) as Observable<BrowseMolecularProfileConnection>

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
  } // ngOnInit()

  // fetch a new set of records
  refresh() {
    this.queryRef
      .refetch({
        molecularProfileName: this.mpNameInput,
        diseaseName: this.diseaseNameInput,
        therapyName: this.therapyNameInput,
        variantName: this.variantNameInput ? this.variantNameInput : undefined,
        molecularProfileAlias: this.aliasInput ? this.aliasInput : undefined,
      })
      .then(() => this.scrollIndex$.next(0))

    this.cdr.detectChanges()
  }

  // virtual scroll helpers
  trackByIndex(
    _: number,
    data: Maybe<BrowseMolecularProfilesFieldsFragment>
  ): Maybe<number> {
    return data?.id
  }
}

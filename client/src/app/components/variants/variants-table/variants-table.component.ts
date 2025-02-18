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
  BrowseVariantConnection,
  BrowseVariantsFieldsFragment,
  BrowseVariantsGQL,
  BrowseVariantsQuery,
  BrowseVariantsQueryVariables,
  Maybe,
  PageInfo,
  VariantsSortColumns,
  VariantCategories,
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

export interface VariantTableUserFilters {
  variantNameInput?: Maybe<string>
  featureNameInput?: Maybe<string>
  diseaseNameInput?: Maybe<string>
  therapyNameInput?: Maybe<string>
  variantAliasInput?: Maybe<string>
}

@UntilDestroy()
@Component({
  selector: 'cvc-variants-table',
  templateUrl: './variants-table.component.html',
  styleUrls: ['./variants-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcVariantsTableComponent implements OnInit {
  @Input() cvcHeight?: number
  @Input() variantTypeId: Maybe<number>
  @Input() variantGroupId: Maybe<number>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>
  @Input() initialPageSize: number = 35
  @Input()
  set initialUserFilters(f: Maybe<VariantTableUserFilters>) {
    // assign any attributes in filters object to this class
    if (f) Object.assign(this, f)
  }

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>
  sortChange$: Subject<SortDirectionEvent>
  filterChange$: Subject<void>

  // INTERMEDIATE STREAMS
  queryRef!: QueryRef<BrowseVariantsQuery, BrowseVariantsQueryVariables>
  result$!: Observable<ApolloQueryResult<BrowseVariantsQuery>>
  connection$!: Observable<BrowseVariantConnection>

  // PRESENTATION STREAMS
  pageInfo$!: Observable<PageInfo>
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<BrowseVariantsFieldsFragment>[]>
  scrollIndex$: Subject<number>
  noMoreRows$: BehaviorSubject<boolean>

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling: boolean = false

  // filters
  variantNameInput: Maybe<string>
  featureNameInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  therapyNameInput: Maybe<string>
  variantAliasInput: Maybe<string>
  variantTypeNameInput: Maybe<string>
  variantCategoryInput: Maybe<VariantCategories>
  hasNoVariantTypeInput: boolean = false

  variantCategories = VariantCategories

  private initialQueryArgs?: BrowseVariantsQueryVariables

  sortColumns = VariantsSortColumns

  constructor(
    private gql: BrowseVariantsGQL,
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
      variantTypeId: this.variantTypeId,
      variantGroupId: this.variantGroupId,
      hasNoVariantType: this.hasNoVariantTypeInput,
      variantCategory: this.variantCategoryInput,
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
      pluck('data', 'browseVariants'),
      filter(isNonNulled)
    ) as Observable<BrowseVariantConnection>

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
        diseaseName: this.diseaseNameInput,
        therapyName: this.therapyNameInput,
        variantName: this.variantNameInput ? this.variantNameInput : undefined,
        variantAlias: this.variantAliasInput
          ? this.variantAliasInput
          : undefined,
        featureName: this.featureNameInput,
        variantTypeName: this.variantTypeNameInput
          ? this.variantTypeNameInput
          : undefined,
        hasNoVariantType: this.hasNoVariantTypeInput,
        variantCategory: this.variantCategoryInput,
      })
      .then(() => this.scrollIndex$.next(0))

    this.cdr.detectChanges()
  }

  // virtual scroll helpers
  trackByIndex(
    _: number,
    data: Maybe<BrowseVariantsFieldsFragment>
  ): Maybe<number> {
    return data?.id
  }

  onHasNoVariantTypeInputChange(value: boolean[]) {
    this.hasNoVariantTypeInput = value[0]
    this.filterChange$.next()
  }
}

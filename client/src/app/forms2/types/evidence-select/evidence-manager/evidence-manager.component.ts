import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChildren,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import { CvcInputEnum } from '@app/forms2/forms2.types'
import {
  EvidenceDirection,
  EvidenceItem,
  EvidenceItemConnection,
  EvidenceLevel,
  EvidenceManagerGQL,
  EvidenceManagerQuery,
  EvidenceManagerQueryVariables,
  EvidenceSignificance,
  EvidenceSortColumns,
  EvidenceType,
  Maybe,
  PageInfo,
  SortDirection,
  TherapyInteraction,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import {
  NzTableFilterList,
  NzTableQueryParams,
  NzThAddOnComponent,
} from 'ng-zorro-antd/table'
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
  Observable,
  of,
  ReplaySubject,
  shareReplay,
  startWith,
  Subject,
  take,
  throttleTime,
  withLatestFrom,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'
import { $enum, EnumWrapper } from 'ts-enum-util'
import {
  colTypeGuards,
  ColumnPrefsModel,
  CvcFilterChange,
  CvcSortChange,
  CvcTableQueryParams,
  EvidenceManagerColKey,
  EvidenceManagerRowData,
  EvidenceManagerTableConfig,
  hasFilterOptions,
  hasSortOptions,
  QueryParamKey,
  QuerySortParams,
  RequestError,
  RowSelection,
} from './evidence-manager.types'
import { ScrollFetch } from './table-scroller.directive'

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-manager',
  templateUrl: './evidence-manager.component.html',
  styleUrls: ['./evidence-manager.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidenceManagerComponent implements OnChanges, AfterViewInit {
  @Input() cvcTableFilters?: NzTableFilterList
  @Input() cvcSelectedIds?: number[]
  @Output() cvcSelectedIdsChange = new EventEmitter<number[]>()

  @ViewChildren('enumTableFilter') tableFilterRefs?: QueryList<
    NzThAddOnComponent<any>
  >

  // SOURCE STREAMS
  sortChanges$: Observable<CvcSortChange>[]
  filterChanges$: Observable<CvcFilterChange>[]
  onRowSelected$: Subject<RowSelection>
  onScroll$: BehaviorSubject<ScrollEvent> // emitted from tableScroller directive
  onPreferenceChange$: Subject<ColumnPrefsModel>
  onResetFilter$: Subject<void>

  // @Input STREAMS
  onSetTableFilter$: BehaviorSubject<NzTableFilterList>
  onSetSelectedRow$: BehaviorSubject<Set<number>>

  // INTERMEDIATE STREAMS
  onFetch$: Subject<ScrollFetch>
  setPreference$!: Observable<ColumnPrefsModel>
  queryRequest$: Subject<CvcTableQueryParams>
  queryResult$: ReplaySubject<ApolloQueryResult<EvidenceManagerQuery>>
  connection$: Observable<EvidenceItemConnection>

  // PRESENTION STREAMS
  col$: BehaviorSubject<EvidenceManagerTableConfig>
  row$?: Observable<Maybe<EvidenceManagerRowData>[]>
  loading$: Observable<boolean>
  noMoreRows$: BehaviorSubject<boolean>
  queryError$: Subject<RequestError>
  isFetchMore$: Subject<boolean>

  // passed to tableScroller
  pageInfo$: Observable<PageInfo>
  scrollToIndex$: Subject<number>

  // apollo query ref
  queryRef?: QueryRef<EvidenceManagerQuery, EvidenceManagerQueryVariables>

  // initial column configurations
  managerTableConfig: EvidenceManagerTableConfig

  // colum keys included here will be hidden in preference panel, preventing
  // defaults from being changed by the user
  omittedFromPrefs: EvidenceManagerColKey[] = ['selected', 'id']

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling = false

  columnKeyToSortColumnMap: {
    [key in EvidenceManagerColKey]?: EvidenceSortColumns
  } = {
    description: EvidenceSortColumns.Description,
    disease: EvidenceSortColumns.DiseaseName,
    evidenceDirection: EvidenceSortColumns.EvidenceDirection,
    evidenceLevel: EvidenceSortColumns.EvidenceLevel,
    evidenceRating: EvidenceSortColumns.EvidenceRating,
    evidenceType: EvidenceSortColumns.EvidenceType,
    id: EvidenceSortColumns.Id,
    significance: EvidenceSortColumns.Significance,
    status: EvidenceSortColumns.Status,
    therapies: EvidenceSortColumns.TherapyName,
    variantOrigin: EvidenceSortColumns.VariantOrigin,
  }

  // entity browse query vars include filter vars for values
  // not part of the evidence row model, this maps between
  // the columnKey and entity browse query field
  columnKeyToFilterParamMap: {
    [key in EvidenceManagerColKey]?: keyof Pick<
      EvidenceManagerQueryVariables,
      'molecularProfileName' | 'diseaseName' | 'therapyName' | 'id'
    >
  } = {
    molecularProfile: 'molecularProfileName',
    disease: 'diseaseName',
    therapies: 'therapyName',
    evidenceItem: 'id',
  }

  colGuards = colTypeGuards

  constructor(private gql: EvidenceManagerGQL, private cdr: ChangeDetectorRef) {
    this.onSetTableFilter$ = new BehaviorSubject<NzTableFilterList>([])
    this.onSetTableFilter$.pipe(tag('onSetTableFilter$')).subscribe()
    // this.onTableQueryParams$
    //   .pipe(tag('TQ >>>>> onTableQueryParam$'))
    //   .subscribe()

    this.sortChanges$ = []
    this.filterChanges$ = []

    this.onFetch$ = new Subject<ScrollFetch>()
    this.onRowSelected$ = new Subject<RowSelection>()
    this.onPreferenceChange$ = new Subject<ColumnPrefsModel>()
    this.onResetFilter$ = new Subject<void>()
    this.onScroll$ = new BehaviorSubject<ScrollEvent>('stop')

    this.queryRequest$ = new Subject<CvcTableQueryParams>()
    // this.queryRequest$.pipe(tag('OQ >>>>> queryRequest$')).subscribe()
    this.queryResult$ = new ReplaySubject<
      ApolloQueryResult<EvidenceManagerQuery>
    >(1)
    this.onSetSelectedRow$ = new BehaviorSubject<Set<number>>(new Set<number>())
    this.scrollToIndex$ = new Subject<number>()
    this.queryError$ = new Subject<RequestError>()
    this.isFetchMore$ = new BehaviorSubject<boolean>(false)
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)

    this.managerTableConfig = [
      {
        key: 'selected',
        label: 'Select',
        type: 'select',
        width: '25px',
        align: 'center',
        fixedLeft: true,
        checkbox: {
          th: {
            showCheckbox: false,
          },
          td: {
            showCheckbox: true,
            checkedChange: this.onRowSelected$,
          },
        },
      },
      {
        hidden: true,
        key: 'id',
        label: 'ID',
        type: 'default',
        width: '30px',
      },
      {
        hidden: true,
        key: 'status',
        label: 'Status',
        type: 'default',
        width: '50px',
      },
      {
        key: 'id',
        label: 'Evidence',
        type: 'entity-tag',
        width: '95px',
        context: 'evidenceItem',
        fixedLeft: true,
        tag: {
          fullWidth: true,
        },
        sort: {
          default: 'ascend',
        },
        filter: {
          inputType: 'numeric',
          options: [{ key: 'EID', value: null }],
        },
      },
      {
        key: 'molecularProfile',
        label: 'Molecular Profile',
        type: 'entity-tag',
        width: '240px',
        sort: {},
        tag: {
          truncateLabel: '200px',
        },
        filter: {
          inputType: 'default',
          options: [
            {
              key: 'Filter Therapy Names',
              value: null,
            },
          ],
        },
      },
      {
        key: 'disease',
        type: 'entity-tag',
        label: 'Disease',
        width: '240px',
        sort: {},
        tag: {
          truncateLabel: '200px',
        },
        filter: {
          inputType: 'default',
          options: [
            {
              key: 'Filter Disease Names',
              value: null,
            },
          ],
        },
      },
      {
        key: 'therapies',
        label: 'Therapies',
        type: 'entity-tag',
        width: '250px',
        sort: {},
        tag: {
          maxTags: 2,
          truncateLabel: '150px',
        },
        filter: {
          inputType: 'default',
          options: [
            {
              key: 'Filter Therapy Names',
              value: null,
            },
          ],
        },
      },
      {
        key: 'therapyInteractionType',
        label: 'INT',
        tooltip: 'Therapy Interaction Type',
        type: 'enum-tag',
        width: '40px',
        align: 'center',
        sort: {},
        filter: {
          options: this.getAttributeFilters($enum(TherapyInteraction)),
        },
      },
      {
        key: 'description',
        label: 'DSC',
        tooltip: 'Evidence Description',
        type: 'text-tag',
        width: '40px',
        align: 'center',
        fixedRight: true,
        filter: {
          options: [{ key: 'Search Descriptions', value: null }],
        },
      },
      {
        key: 'evidenceType',
        label: 'ET',
        tooltip: 'Evidence Type',
        type: 'enum-tag',
        width: '40px',
        align: 'center',
        fixedRight: true,
        sort: {},
        filter: {
          options: this.getAttributeFilters(
            $enum(EvidenceType)
            // EvidenceType.Predictive
          ),
        },
      },
      {
        key: 'evidenceLevel',
        label: 'EL',
        tooltip: 'Evidence Level',
        type: 'enum-tag',
        width: '40px',
        align: 'center',
        fixedRight: true,
        sort: {},
        filter: {
          options: this.getAttributeFilters($enum(EvidenceLevel)),
        },
      },
      {
        key: 'evidenceDirection',
        label: 'ED',
        tooltip: 'Evidence Direction',
        type: 'enum-tag',
        width: '40px',
        align: 'center',
        fixedRight: true,
        sort: {},
        filter: {
          options: this.getAttributeFilters($enum(EvidenceDirection)),
        },
      },
      {
        key: 'significance',
        label: 'SI',
        tooltip: 'Significance',
        type: 'enum-tag',
        align: 'center',
        width: '40px',
        fixedRight: true,
        sort: {},
        filter: {
          options: this.getAttributeFilters($enum(EvidenceSignificance)),
        },
      },
      {
        key: 'evidenceRating',
        label: 'ER',
        tooltip: 'Evidence Rating',
        type: 'enum-tag',
        width: '45px',
        align: 'center',
        fixedRight: true,
        tag: {
          showLabel: 'short-string',
        },
        sort: {},
        filter: {
          options: [1, 2, 3, 4, 5].map((n) => {
            return { value: n, text: `${n} stars` }
          }),
        },
      },
    ]

    // create filter & sort Subjects
    this.managerTableConfig.forEach((opt, i) => {
      if (hasSortOptions(opt)) {
        opt.sort.changes = new BehaviorSubject<CvcSortChange>({
          key: opt.key,
          value: opt.sort.default ?? null,
        })
        this.sortChanges$.push(
          opt.sort.changes.pipe(tag(`${opt.key} sort changes`))
          // opt.sort.changes
        )
      }
      if (hasFilterOptions(opt)) {
        const defaultValue = opt.filter.options.find((o) => o.byDefault)?.value
        opt.filter.changes = new BehaviorSubject<CvcFilterChange>({
          key: opt.key,
          value: defaultValue ?? null,
        })
        this.filterChanges$.push(
          opt.filter.changes.pipe(tag(`${opt.key} filter changes`))
          // opt.filter.changes
        )
      }
    })

    // create combined observables from sort & filter Subject arrays
    const filterChange$ = combineLatest(this.filterChanges$)
    // filter any sort changes w/ more than two columns set, as we do not support multi-sort
    const sortChange$ = combineLatest(this.sortChanges$).pipe(
      filter((changes) => {
        return changes.filter((change) => change.value !== null).length <= 1
      })
    )

    // observe all sort and filter changes, convert to refetch queryParams
    const refetch$: Observable<CvcTableQueryParams> = combineLatest([
      sortChange$,
      filterChange$,
    ]).pipe(
      map(([sorts, filters]) => {
        const queryParams: CvcTableQueryParams = {
          query: 'refetch',
          sort: sorts,
          filter: filters,
        }
        return queryParams
      })
    )

    // observe onFetch events, convert to fetchMore queryParams
    const fetchMore$: Observable<CvcTableQueryParams> = this.onFetch$.pipe(
      map((fetchParams) => {
        return {
          query: 'fetchMore',
          fetchMore: {
            ...fetchParams,
          },
        } as CvcTableQueryParams
      })
    )

    // merge table refetch and scroller fetchMore events, issue queries for each
    // NOTE: onResetFilter causes every col sort & filter to emit an update event that ends up here.
    // The debounceTime operator ensures that only one event makes it through to an apollo query.
    merge(refetch$, fetchMore$)
      .pipe(
        debounceTime(50),
        // tag('>>>>> QUERY'),
        untilDestroyed(this)
      )
      .subscribe((params: CvcTableQueryParams) => {
        const queryVars = this.getQueryVars(params)
        if (!this.queryRef) {
          this.isFetchMore$.next(false)
          this.queryError$.next({})
          this.queryRef = this.gql.watch(queryVars)
          // NOTE: refetch and fetchMore results from valueChanges do not include network or gql
          // errors, so this extra queryError$ stuff below is required to catch and forward any errors.
          // bug report: https://github.com/apollographql/apollo-client/issues/6857
          this.queryRef.valueChanges
            .pipe(
              // tag('queryRef.valueChanges'),
              untilDestroyed(this)
            )
            .subscribe((result) => {
              // this.queryResult$.pipe(tag('<<<<<<<<< queryResult$')).subscribe()
              this.queryResult$.next(result)
              // queryRef.valueChanges should be emitting errors,
              // but updating queryError$ just in case
              if (result.error || result.errors) {
                this.queryError$.next(this.getRequestErrors(result))
              }
            })
        } else {
          // clear errors
          this.queryError$.next({})
          if (params.query === 'refetch') {
            this.isFetchMore$.next(false)
            this.queryRef
              .refetch(queryVars)
              .then((result) => {
                if (result.error || result.errors) {
                  this.queryError$.next(this.getRequestErrors(result))
                }
              })
              .then(() => {
                this.scrollToIndex$.next(0)
              })
          } else {
            this.isFetchMore$.next(true)
            this.queryRef.fetchMore({ variables: queryVars }).then((result) => {
              if (result.error || result.errors) {
                this.queryError$.next(this.getRequestErrors(result))
              }
            })
          }
        }
      })

    this.loading$ = this.queryResult$.pipe(
      pluck('loading'),
      distinctUntilChanged()
    )

    this.connection$ = this.queryResult$.pipe(
      pluck('data', 'evidenceItems'),
      filter(isNonNulled)
    ) as Observable<EvidenceItemConnection>

    // provided to table-scroll directive for fetchMore queries
    this.pageInfo$ = this.connection$.pipe(
      pluck('pageInfo'),
      filter(isNonNulled)
    )

    // emit rows from query responses after appending a 'selected' column
    this.row$ = combineLatest([
      // this.connection$.pipe(pluck('nodes'), filter(isNonNulled)),
      this.connection$.pipe(
        pluck('edges'),
        filter(isNonNulled),
        map((edges) => edges.map((e) => e.node))
      ),
      this.onSetSelectedRow$,
    ]).pipe(
      map(([rows, selected]: [Maybe<EvidenceItem>[], Set<number>]) => {
        return rows.map((row) => {
          if (!row) return
          return {
            ...row,
            evidenceItem: {
              __typename: 'EvidenceItem',
              id: row.id,
              name: row.name,
              link: row.link,
              status: row.status,
            },
            selected: selected.has(row.id),
          }
        })
      }),
      startWith([])
    )

    // col$ provide column-level configuration in nz-table's thead and tbody elements.
    // Preference panel has a bidirectional link w/ cols$, subscribing to its updates
    // to generate its options with setPreference$, and updating
    // col$ when those options change, via onPreferenceChange$
    this.col$ = new BehaviorSubject<EvidenceManagerTableConfig>(
      this.managerTableConfig
    )
    // this.col$.pipe(tag('col$')).subscribe()

    this.setPreference$ = this.col$.pipe(
      map((cols) => this.getColPrefsFromConfig(cols))
    )

    // when row select, get old selected rows, emit updated rows
    // & output new selected ids array
    this.onRowSelected$
      .pipe(withLatestFrom(this.onSetSelectedRow$), untilDestroyed(this))
      .subscribe(([event, selected]: [RowSelection, Set<number>]) => {
        if (event.selected) {
          selected.add(event.id)
        } else {
          selected.delete(event.id)
        }
        this.onSetSelectedRow$.next(selected)
        this.cvcSelectedIdsChange.next(Array.from(selected))
      })

    // this.setPreference$
    //   .pipe(tag('setPreference$'))
    //   .subscribe()

    this.onPreferenceChange$
      .pipe(
        withLatestFrom(this.col$),
        map(([prefs, cols]) => this.getConfigFromColPrefs(prefs, cols)),
        untilDestroyed(this)
      )
      .subscribe((cols) => {
        this.col$.next(cols)
      })

    // TODO: consolidate these two onScroll$ subscriptions
    // for every onScrolled event, convert to bool & set isScrolling
    this.onScroll$
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
    this.onScroll$
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
  }

  ngAfterViewInit(): void {
    if (!this.tableFilterRefs) {
      console.error(
        'evidence-manager could not get reference to its #enumTableFilter templates, cannot initialize onResetFilter$.'
      )
      return
    }

    this.onResetFilter$
      .pipe(withLatestFrom(of(this.managerTableConfig)), untilDestroyed(this))
      .subscribe(([_, config]) => {
        const newConfig: EvidenceManagerTableConfig = []
        config.forEach((c) => {
          if (hasSortOptions(c)) {
            const reset = { key: c.key, value: c.sort.default ?? null }
            if (c.sort.changes) {
              c.sort.changes.next(reset)
            }
          }
          if (hasFilterOptions(c)) {
            const defVal = c.filter.options.find(
              (opt) => opt.byDefault == true
            )?.value
            if (c.filter.changes) {
              c.filter.changes.next({ key: c.key, value: defVal || null })
            }
          }
          newConfig.push(c)
        })
        this.col$.next(newConfig)
      })
  }

  getAttributeFilters(
    attrEnums: EnumWrapper,
    byDefault?: CvcInputEnum
  ): NzTableFilterList {
    const filters = attrEnums.getValues().map((value) => {
      return {
        text: formatEvidenceEnum(value),
        value: value,
        byDefault: byDefault === value,
      }
    })
    return filters
  }

  getRequestErrors(
    result: ApolloQueryResult<EvidenceManagerQuery>
  ): RequestError {
    return {
      query: result.errors,
      network: result.error,
    }
  }

  getQueryVars(
    params: CvcTableQueryParams
  ): EvidenceManagerQueryVariables | {} {
    const filters = this.getQueryFilterParams(params)
    const sort = this.getQuerySortParams(params)
    const queryVars = {
      ...sort,
      ...filters,
      ...params.fetchMore,
    }
    return queryVars
  }

  getQuerySortParams(params: CvcTableQueryParams): Maybe<QuerySortParams> {
    if (!params.sort) return
    const colSort = params.sort
    const queryParam = colSort.find((p) => p.value !== null)
    if (!queryParam) return
    // return {
    //   sortBy: {
    //     column: this.getSortColumnFromKey('id' as EvidenceManagerColKey),
    //     direction: SortDirection.Asc,
    //   },
    // }
    const column = this.getSortColumnFromKey(
      queryParam.key as EvidenceManagerColKey
    )
    return {
      sortBy: {
        column: column,
        direction:
          queryParam.value === 'ascend'
            ? SortDirection.Asc
            : SortDirection.Desc || undefined,
      },
    }
  }

  getQueryFilterParams(
    params: CvcTableQueryParams
  ): Maybe<EvidenceManagerQueryVariables> {
    if (!params.filter) return
    let filters: { [key in QueryParamKey]?: any } = {}
    // create an object with any specified filter attributes
    params.filter.forEach((f) => {
      filters[f.key as QueryParamKey] = f.value !== null ? f.value : undefined
    })
    return filters
  }

  getNzTableParamsFromTableConfig(
    cols: EvidenceManagerTableConfig
  ): NzTableQueryParams {
    let params: NzTableQueryParams = {
      pageIndex: 0,
      pageSize: 0,
      sort: [],
      filter: [],
    }
    cols.forEach((col) => {
      const isSort = hasSortOptions(col)
      const isFilter = hasFilterOptions(col)
      // copy any sort options
      if (isSort && col.sort?.default !== undefined) {
        params.sort.push({ key: col.key, value: col.sort.default })
      }
      // find default options, add to filter array
      if (isFilter) {
        const def = col.filter.options.find((opt) => opt.byDefault == true)
        params.filter.push({
          key: col.key,
          value: def !== undefined ? def.value : null,
        })
      }
    })
    return params
  }

  getConfigFromColPrefs(
    prefs: ColumnPrefsModel,
    cols: EvidenceManagerTableConfig
  ): EvidenceManagerTableConfig {
    cols.forEach((col) => {
      if (this.omittedFromPrefs.find((c) => c === col.key)) return
      const pref = prefs.find((pref) => pref.value === col.key)
      if (pref?.checked) {
        col.hidden = false
      } else {
        col.hidden = true
      }
    })
    return [...cols]
  }

  getColPrefsFromConfig(cols: EvidenceManagerTableConfig): ColumnPrefsModel {
    let options: ColumnPrefsModel = []
    cols.forEach((col) => {
      if (this.omittedFromPrefs.find((c) => c === col.key)) return
      options.push({
        label: col.tooltip || col.label,
        value: col.key,
        checked: !col.hidden,
      })
    })
    return options
  }

  getSortColumnFromKey(key: EvidenceManagerColKey): Maybe<EvidenceSortColumns> {
    return this.columnKeyToSortColumnMap[key]
  }

  trackByIndex(_: number, data: Maybe<EvidenceManagerRowData>): Maybe<number> {
    return data?.id
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcTableFilters) {
      const filters = changes.cvcTableFilters.currentValue
      this.onSetTableFilter$.next(filters)
    }

    if (changes.cvcSelectedIds) {
      const ids = changes.cvcSelectedIds.currentValue
      const idSet: Set<number> = new Set()
      if (ids !== undefined) {
        ids.forEach((id: number) => idSet.add(id))
      }
      this.onSetSelectedRow$.next(idSet)
    }
  }
}

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
  EvidenceManagerFieldsFragment,
  EvidenceManagerGQL,
  EvidenceManagerQuery,
  EvidenceManagerQueryVariables,
  EvidenceSignificance,
  EvidenceSortColumns,
  EvidenceType,
  Maybe,
  PageInfo,
  SortDirection,
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
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  ReplaySubject,
  startWith,
  Subject,
  withLatestFrom,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'
import { $enum, EnumWrapper } from 'ts-enum-util'
import {
  ColumnPrefsModel,
  colTypeGuards,
  CustomFilter,
  CvcTableQueryParams,
  EvidenceManagerColKey,
  EvidenceManagerConnection,
  EvidenceManagerRowData,
  EvidenceManagerTableConfig,
  QueryParamKey,
  QuerySortParams,
  RequestError,
  RowSelection,
  isSortColumn,
  isFilterColumn,
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
  @Input() cvcTableQueryParams?: Partial<NzTableQueryParams>
  @Input() cvcSelectedIds?: number[]
  @Output() cvcSelectedIdsChange = new EventEmitter<number[]>()

  @ViewChildren('enumTableFilter') tableFilterRefs?: QueryList<
    TemplateRef<NzThAddOnComponent<any>>
  >

  // SOURCE STREAMS
  onTableQueryParams$: ReplaySubject<NzTableQueryParams>
  onCustomFilter$: ReplaySubject<CustomFilter>
  onFetch$: BehaviorSubject<ScrollFetch>
  onQuery$: ReplaySubject<CvcTableQueryParams>
  onRowSelected$: Subject<RowSelection>
  onPreferenceChange$: Subject<ColumnPrefsModel>
  onResetFilter$: Subject<void>
  onScroll$: BehaviorSubject<ScrollEvent> // emitted from tableScroller directive

  // INTERMEDIATE STREAMS
  queryResult$: ReplaySubject<ApolloQueryResult<EvidenceManagerQuery>>
  connection$: Observable<EvidenceItemConnection>
  selectedRow$: BehaviorSubject<Set<number>>
  updatePreferenceOptions$!: Observable<ColumnPrefsModel>
  tableFilterRef$: ReplaySubject<
    QueryList<TemplateRef<NzThAddOnComponent<CvcInputEnum>>>
  >

  // PRESENTION STREAMS
  col$: BehaviorSubject<EvidenceManagerTableConfig>
  row$?: Observable<Maybe<EvidenceManagerRowData>[]>
  loading$: Observable<boolean>
  noMoreRows$: BehaviorSubject<boolean>
  requestError$: Subject<RequestError>
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
      'molecularProfileName' | 'diseaseName' | 'therapyName'
    >
  } = {
    molecularProfile: 'molecularProfileName',
    disease: 'diseaseName',
    therapies: 'therapyName',
  }

  colGuards = colTypeGuards

  constructor(private gql: EvidenceManagerGQL, private cdr: ChangeDetectorRef) {
    this.onTableQueryParams$ = new ReplaySubject<NzTableQueryParams>()
    this.onCustomFilter$ = new ReplaySubject<CustomFilter>()
    this.onFetch$ = new BehaviorSubject<ScrollFetch>({})
    this.onQuery$ = new ReplaySubject<CvcTableQueryParams>()
    this.onRowSelected$ = new Subject<RowSelection>()
    this.onPreferenceChange$ = new Subject<ColumnPrefsModel>()
    this.onResetFilter$ = new Subject<void>()
    this.onScroll$ = new BehaviorSubject<ScrollEvent>('stop')

    this.queryResult$ = new ReplaySubject<
      ApolloQueryResult<EvidenceManagerQuery>
    >()
    this.selectedRow$ = new BehaviorSubject<Set<number>>(new Set<number>())
    this.scrollToIndex$ = new Subject<number>()
    this.requestError$ = new Subject<RequestError>()
    this.isFetchMore$ = new BehaviorSubject<boolean>(false)
    this.isFetchMore$.pipe(tag('isFetchMore$')).subscribe()
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)

    this.tableFilterRef$ = new ReplaySubject<
      QueryList<TemplateRef<NzThAddOnComponent<any>>>
    >()

    this.managerTableConfig = [
      {
        key: 'selected',
        label: 'Select',
        type: 'select',
        width: '30px',
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
        key: 'evidenceItem',
        label: 'Evidence Item',
        type: 'entity-tag',
        width: '100px',
        fixedLeft: true,
        sort: [],
        filter: {
          options: [{ text: 'Filter EIDs', value: '' }],
        },
      },
      {
        key: 'molecularProfile',
        label: 'Molecular Profile',
        type: 'entity-tag',
        width: '250px',
        sort: [],
        filter: {
          options: [{ text: 'Filter MP Names', value: '' }],
        },
      },
      {
        key: 'disease',
        type: 'entity-tag',
        label: 'Disease',
        width: '250px',
        sort: [],
        filter: {
          options: [{ text: 'Filter Disease Names', value: '' }],
        },
      },
      {
        key: 'therapies',
        label: 'Therapies',
        type: 'entity-tag',
        width: '350px',
        tagGroup: {
          maxTags: 2,
        },
        sort: [],
        filter: {
          options: [{ text: 'Filter Therapy Names', value: '' }],
        },
      },
      {
        key: 'evidenceType',
        label: 'ET',
        tooltip: 'Evidence Type',
        type: 'enum-tag',
        width: '45px',
        align: 'center',
        fixedRight: true,
        sort: [],
        filter: {
          options: this.getAttributeFilters(
            $enum(EvidenceType),
            EvidenceType.Predictive
          ),
        },
      },
      {
        key: 'evidenceLevel',
        label: 'EL',
        tooltip: 'Evidence Level',
        type: 'enum-tag',
        width: '45px',
        align: 'center',
        fixedRight: true,
        sort: [],
        filter: {
          options: this.getAttributeFilters($enum(EvidenceLevel)),
        },
        showLabel: true,
        showIcon: false,
      },
      {
        key: 'evidenceDirection',
        label: 'ED',
        tooltip: 'Evidence Direction',
        type: 'enum-tag',
        width: '45px',
        align: 'center',
        fixedRight: true,
        sort: [],
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
        width: '45px',
        fixedRight: true,
        sort: [],
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
        sort: [],
        showIcon: 'star',
        showLabel: true,
        filter: {
          options: [1, 2, 3, 4, 5].map((n) => {
            return { value: n, text: `${n} stars` }
          }),
        },
      },
    ]

    // when row select, get old selected rows, emit updated rows
    // & output new selected ids array
    this.onRowSelected$
      .pipe(withLatestFrom(this.selectedRow$), untilDestroyed(this))
      .subscribe(([event, selected]: [RowSelection, Set<number>]) => {
        if (event.selected) {
          selected.add(event.id)
        } else {
          selected.delete(event.id)
        }
        this.selectedRow$.next(selected)
        this.cvcSelectedIdsChange.next(Array.from(selected))
      })

    // when custom filters change, merge w/ latest query params,
    // then trigger new refetch query
    this.onCustomFilter$
      .pipe(
        withLatestFrom(this.onQuery$),
        map(([newFilter, params]) => {
          // convert newFilter key to its corresponding query param
          // e.g. 'molecularProfile' to 'molecularProfileName'
          // FIXME: wanted to avoid coercing key to EvidenceManagerColKey below, but
          // wasn't able to get ColumnKeyToFilterParamMap's type specified
          // in a way that worked NOTE: maybe an actual Map would preserve types better
          const mappedKey =
            this.columnKeyToFilterParamMap[
              newFilter.key as EvidenceManagerColKey
            ]
          newFilter.key = mappedKey ? mappedKey : newFilter.key

          // check if new filter already exists in filters array,
          // update it if does, add it if it does not
          let filters = params.filter
          const currentIndex = filters.findIndex((f) => f.key === newFilter.key)
          if (currentIndex !== -1) {
            filters[currentIndex].value = newFilter.value
          } else {
            filters.push(newFilter)
          }
          return { ...params, filter: [...filters] }
        }),
        untilDestroyed(this)
        // tag('onCustomFilter$')
      )
      .subscribe((params) => {
        params.query = 'refetch'
        this.onQuery$.next(params)
      })

    // when nz-table emits event from nzTableQueryChanges,
    // trigger refetch query with updated filter, sort params
    this.onTableQueryParams$
      .pipe(
        // tag('onTableQueryParam$'),
        untilDestroyed(this))
      .subscribe((tableParams) => {
        // omit unused pageIndex, pageSize attributes
        let { pageIndex, pageSize, ...params } = tableParams

        // add query type attribute
        const queryParams: CvcTableQueryParams = {
          ...params,
          query: 'refetch',
        }
        this.onQuery$.next(queryParams)
      })

    // merge tablescroller onFetch w/ latest query params,
    // then trigger new fetchMore query
    this.onFetch$
      .pipe(withLatestFrom(this.onQuery$), untilDestroyed(this))
      .subscribe(([fetchParams, lastQuery]) => {
        const queryParams: CvcTableQueryParams = {
          ...lastQuery,
          query: 'fetchMore',
          fetchMore: {
            ...fetchParams,
          },
        }
        this.onQuery$.next(queryParams)
      })

    this.onQuery$
      .pipe(
        // tag('>>>>>>>>>>>>> onQuery$'),
        untilDestroyed(this))
      .subscribe((params: CvcTableQueryParams) => {
        const queryVars = this.getQueryVars(params)
        // if there's no query ref, create one w/ watch()
        // and emit valueChanges from queryResult$.
        // if query ref exists, call refetch or fetchMore,
        // depending on the params.query setting
        if (!this.queryRef) {
          this.isFetchMore$.next(false)
          this.scrollToIndex$.next(0)
          this.queryRef = this.gql.watch(queryVars)
          // NOTE: refetch and fetchMore results from valueChanges do not include network or gql
          // errors, so this extra requestError$ stuff below is required to catch and forward any errors.
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
              // but updating requestError$ just in case
              if (result.error || result.errors) {
                this.requestError$.next(this.getRequestErrors(result))
              }
            })
        } else {
          if (params.query === 'refetch') {
            this.isFetchMore$.next(false)
            this.queryRef.refetch(queryVars).then((result) => {
              if (result.error || result.errors) {
                this.requestError$.next(this.getRequestErrors(result))
              }
            })
            this.scrollToIndex$.next(0)
          } else {
            // FIXME: fetchMore results are not being appended to row$, for some reason.
            // Probably replacing rather than appending row$ somewhere? or that rows$
            // gets its data from response 'nodes' instead of 'edges' as the other
            // tables do?
            this.isFetchMore$.next(true)
            this.queryRef.fetchMore({ variables: queryVars }).then((result) => {
              if (result.error || result.errors) {
                this.requestError$.next(this.getRequestErrors(result))
              }
            })
          }
        }
      })

    this.loading$ = this.queryResult$.pipe(
      // tag('<<<<<<<<< queryResult$'),
      pluck('loading'),
      tag('.......... loading$'),
      distinctUntilChanged()
    )

    // FIXME: why is this cast to EvidenceItemConnection required here?
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
        map((edges) => edges.map((e) => e.node)),
      ),
      this.selectedRow$,
    ]).pipe(
      map(([rows, selected]: [Maybe<EvidenceItem>[], Set<number>]) => {
        return rows.map((row) => {
          if(!row) return
          return {
            ...row,
            evidenceItem: {
              __typename: 'EvidenceItem',
              id: row.id,
              name: row.name,
              link: row.link,
            },
            selected: selected.has(row.id),
          }
        })
      }),
      startWith([])
    )

    // col$ provide column-level configuration in nz-table's thead and tbody elements.
    // Preference panel has a bidirectional link w/ cols$, subscribing to its updates
    // to generate its options with updatePreferenceOption$, and updating
    // col$ when those options change, via onPreferenceChange$
    this.col$ = new BehaviorSubject<EvidenceManagerTableConfig>(
      this.managerTableConfig
    )

    this.updatePreferenceOptions$ = this.col$.pipe(
      map((cols) => this.getColPrefsFromConfig(cols))
    )

    this.onPreferenceChange$
      .pipe(
        withLatestFrom(this.col$),
        map(([options, cols]) => this.getConfigFromColPrefs(cols, options)),
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

    // reset table with initial table column configuration
    // FIXME: refreshes table rows, but doesn't reset filter option panels, despite
    // updating with col$ w/ default config. Col$ includes the filter's options w/ defaults.
    // Most likely bug w/ nz-table's filter options working w/ server-side filtering?
    // Might need to implement all filters with nz-custom-filter to get access to its
    // reset function, manually reset them
    // NOTE: according to this issue, the table needs to use *ngFor to format the columns,
    // as I initially did, for the filters to be properly be reset:
    // https://github.com/NG-ZORRO/ng-zorro-antd/issues/5304
    // referring to this demo: https://ng.ant.design/components/table/en#components-table-demo-reset-filter
    this.onResetFilter$
      .pipe(
        withLatestFrom(
          of(this.managerTableConfig),
          of(this.tableFilterRefs.toArray())
        ),
        untilDestroyed(this)
      )
      .subscribe(([_, config, refs]) => {
        const nzTableParams = this.getNzTableParamsFromTableConfig(config)
        refs.forEach((ref) => {
          console.log(ref)
        })
        this.col$.next({ ...this.managerTableConfig })
        this.onTableQueryParams$.next(nzTableParams)
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
    const colSort = params.sort
    const queryParam = colSort.find((p) => p.value !== null)
    if (!queryParam) return
    return {
      sortBy: {
        column: this.getSortColumnFromKey(
          queryParam.key as EvidenceManagerColKey
        ),
        direction:
          queryParam.value === 'ascend'
            ? SortDirection.Asc
            : SortDirection.Desc || undefined,
      },
    }
  }

  getQueryFilterParams(
    params: CvcTableQueryParams
  ): EvidenceManagerQueryVariables {
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
      const isSort = isSortColumn(col)
      const isFilter = isFilterColumn(col)
      // copy any sort options
      if (isSort) {
        params.sort.push(col.sort)
      }
      // find default options, add to filter array
      if (isFilter) {
        const filterDefault = col.filter.options.find(
          (opt) => opt.byDefault == true
        )
        if (filterDefault) {
          params.filter.push({ key: col.key, value: filterDefault.value })
        }
      }
    })
    return params
  }

  getConfigFromColPrefs(
    cols: EvidenceManagerTableConfig,
    options: ColumnPrefsModel
  ): EvidenceManagerTableConfig {
    // const objKeys = Object.keys(cols) as Array<keyof typeof cols>
    cols.forEach((col) => {
      const option = options.find((option) => option.value === col.key)
      if (option?.checked) {
        col.hidden = option.checked
      }
    })
    return { ...cols }
  }

  getColPrefsFromConfig(cols: EvidenceManagerTableConfig): ColumnPrefsModel {
    let options: ColumnPrefsModel = []
    // const objKeys = Object.keys(cols) as Array<keyof typeof cols>
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcTableQueryParams) {
      const queryParams = changes.cvcTableQueryParams.currentValue
      this.onTableQueryParams$.next(queryParams)
    }
    if (changes.cvcSelectedIds) {
      const ids = changes.cvcSelectedIds.currentValue
      const idSet: Set<number> = new Set()
      if (ids !== undefined) {
        ids.forEach((id: number) => idSet.add(id))
      }
      this.selectedRow$.next(idSet)
    }
  }

  trackByIndex(_: number, data: Maybe<EvidenceManagerRowData>): Maybe<number> {
    return data?.id
  }
}

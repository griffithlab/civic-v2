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
  EvidenceManagerFieldsFragment,
  EvidenceManagerGQL,
  EvidenceManagerQuery,
  EvidenceManagerQueryVariables,
  EvidenceSortColumns,
  EvidenceType,
  Maybe,
  PageInfo,
  SortDirection,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { NzTableQueryParams, NzThAddOnComponent } from 'ng-zorro-antd/table'
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
  onPreference$: Subject<ColumnPrefsModel>
  onResetFilter$: Subject<void>

  // INTERMEDIATE STREAMS
  queryResult$: Subject<ApolloQueryResult<EvidenceManagerQuery>>
  connection$: Observable<EvidenceManagerConnection>
  selectedRow$: BehaviorSubject<Set<number>>
  preferenceUpdate$!: Observable<ColumnPrefsModel>
  tableFilterRef$: ReplaySubject<
    QueryList<TemplateRef<NzThAddOnComponent<CvcInputEnum>>>
  >

  // PRESENTION STREAMS
  col$: BehaviorSubject<EvidenceManagerTableConfig>
  row$?: Observable<EvidenceManagerRowData[]>
  loading$: Observable<boolean>
  noMoreRows$: BehaviorSubject<boolean>
  requestError$: Subject<RequestError>
  isFetchMore$: Subject<boolean>

  // passed to tableScroller
  pageInfo$: Observable<PageInfo>
  onScroll$: BehaviorSubject<ScrollEvent>
  scrollToIndex$: Subject<number> // TODO: implement scroll-to-index

  // apollo query ref
  queryRef?: QueryRef<EvidenceManagerQuery, EvidenceManagerQueryVariables>

  // initial column configurations
  // managerEvidenceManagerTableConfig: EvidenceManagerTableConfig = evidenceManagerConfig
  managerEvidenceManagerTableConfig: EvidenceManagerTableConfig

  // hide these columns in preferences checkbox list to prevent changes
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
    this.onPreference$ = new Subject<ColumnPrefsModel>()
    this.onResetFilter$ = new Subject<void>()

    this.queryResult$ = new Subject<ApolloQueryResult<EvidenceManagerQuery>>()
    this.selectedRow$ = new BehaviorSubject<Set<number>>(new Set<number>())
    this.scrollToIndex$ = new Subject<number>()
    this.onScroll$ = new BehaviorSubject<ScrollEvent>('stop')
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.requestError$ = new Subject<RequestError>()
    this.isFetchMore$ = new BehaviorSubject<boolean>(false)

    this.tableFilterRef$ = new ReplaySubject<
      QueryList<TemplateRef<NzThAddOnComponent<any>>>
    >()

    this.managerEvidenceManagerTableConfig = [
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
        type: 'string',
        width: '30px'
      },
      {
        hidden: true,
        key: 'status',
        label: 'Status',
        type: 'string',
        width: '50px'
      },
      {
        key: 'evidenceItem',
        label: 'Evidence Item',
        type: 'entity-tag',
        width: '100px',
        fixedLeft: true,
        sort: [],
        filter: {
          options: [{ key: '', value: '' }],
        },
      },
      {
        key: 'molecularProfile',
        label: 'Molecular Profile',
        type: 'entity-tag',
        width: '250px',
        sort: [],
        filter: {
          options: [{ key: 'Search MP Names', value: '' }],
        },
      },
      {
        key: 'disease',
        type: 'entity-tag',
        label: 'Disease',
        width: '250px',
        sort: [],
        filter: {
          options: [{ key: 'Search Disease Names', value: '' }],
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
          options: [{ key: 'Search Therapy Names', value: '' }],
        },
      },
      {
        key: 'evidenceType',
        label: 'ET',
        tooltip: 'Evidence Type',
        type: 'enum-tag',
        width: '45px',
        sort: [],
        filter: {
          options: this.getAttributeFilters(
            $enum(EvidenceType),
            EvidenceType.Predictive
          ),
        },
      },
    ]

    // update row records, emit new selected ids when row selected
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

    // merge custom filter updates w/ latest query params, trigger new refetch query
    this.onCustomFilter$
      .pipe(
        withLatestFrom(this.onQuery$),
        map(([newFilter, params]) => {
          // convert newFilter key to its corresponding query param
          // e.g. 'molecularProfile' to 'molecularProfileName'
          // FIXME: wanted to avoid coercing key to EvidenceManagerColKey below, but
          // wasn't able to get ColumnKeyToFilterParamMap's type specified
          // in a way that worked
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

    // trigger refetch query when nz-table emits a filter/sort update
    this.onTableQueryParams$
      .pipe(untilDestroyed(this))
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
      .pipe(untilDestroyed(this))
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
      pluck('loading'),
      distinctUntilChanged()
    )

    this.connection$ = this.queryResult$.pipe(pluck('data', 'evidenceItems'))

    // provided to table-scroll directive for fetchMore queries
    this.pageInfo$ = this.connection$.pipe(
      pluck('pageInfo'),
      filter(isNonNulled)
    )

    // emit rows from query responses after appending a 'selected' column
    this.row$ = combineLatest([
      this.connection$.pipe(pluck('nodes'), filter(isNonNulled)),
      this.selectedRow$,
    ]).pipe(
      map(
        ([rows, selected]: [EvidenceManagerFieldsFragment[], Set<number>]) => {
          return rows.map((row) => {
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
        }
      ),
      startWith([])
    )

    // col$ provide column-level configuration for table header, and row cells.
    // Preferences feature subscribes to col$ to generate its options, and updates
    // col$ to apply preferences changes
    this.col$ = new BehaviorSubject<EvidenceManagerTableConfig>(
      this.managerEvidenceManagerTableConfig
    )

    // nz-checkbox-groups, used in table prefs, requires a slightly different model
    // than col$, this map function munges col config array to nz-checkbox-group array
    this.preferenceUpdate$ = this.col$.pipe(
      map((cols) => this.getColPrefsFromConfig(cols))
    )

    // update col$ when preferences change
    this.onPreference$
      .pipe(
        withLatestFrom(this.col$),
        map(([options, cols]) => this.updateConfigFromPrefs(cols, options)),
        untilDestroyed(this)
      )
      .subscribe((cols) => {
        this.col$.next(cols)
      })

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
          of(this.managerEvidenceManagerTableConfig),
          of(this.tableFilterRefs.toArray())
        ),
        untilDestroyed(this)
      )
      .subscribe(([_, config, refs]) => {
        console.log('-------tablefilterrefs')
        console.log(refs)
        // const tableParams = this.getTableParamsFromEvidenceManagerTableConfig(config)
        const nzTableParams =
          this.getNzTableParamsFromEvidenceManagerTableConfig(config)
        refs.forEach((ref) => {
          console.log(ref)
        })
        this.col$.next({ ...this.managerEvidenceManagerTableConfig })
        this.onTableQueryParams$.next(nzTableParams)
      })
  }

  getAttributeFilters(
    attrEnums: EnumWrapper,
    byDefault?: CvcInputEnum
  ): NzTableQueryParams['filter'] {
    const filters = attrEnums.getValues().map((value) => {
      return {
        key: formatEvidenceEnum(value),
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
    const colParams = params.sort
    const queryParam = colParams.find((p) => p.value !== null)
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

  // converts EvidenceManagerTableConfig objects to table query params,
  // used by onResetFilter$ to reset table to initial state
  getTableParamsFromEvidenceManagerTableConfig(
    cols: EvidenceManagerTableConfig
  ): CvcTableQueryParams {
    const objKeys = Object.keys(cols) as Array<keyof typeof cols>
    let params: CvcTableQueryParams = {
      query: 'refetch',
      sort: [],
      filter: [],
    }
    // objKeys.forEach((k) => {
    //   if (cols[k].showSort && cols[k].sortOrder) {
    //     params.sort.push({ key: cols[k].key, value: cols[k].sortOrder! })
    //   }
    //   if (cols[k].filter?.options) {
    //     const filterDefault = cols[k].filter!.options.find(
    //       (opt) => opt.byDefault == true
    //     )
    //     if (filterDefault) {
    //       params.filter.push({ key: cols[k].key, value: filterDefault.value })
    //     }
    //   }
    // })
    return params
  }

  getNzTableParamsFromEvidenceManagerTableConfig(
    cols: EvidenceManagerTableConfig
  ): NzTableQueryParams {
    const objKeys = Object.keys(cols) as Array<keyof typeof cols>
    let params: NzTableQueryParams = {
      pageIndex: 0,
      pageSize: 0,
      sort: [],
      filter: [],
    }
    // objKeys.forEach((k) => {
    //   if (cols[k].showSort && cols[k].sortOrder) {
    //     params.sort.push({ key: cols[k].key, value: cols[k].sortOrder! })
    //   }
    //   if (cols[k].filter?.options) {
    //     const filterDefault = cols[k].filter!.options.find(
    //       (opt) => opt.byDefault == true
    //     )
    //     if (filterDefault) {
    //       params.filter.push({ key: cols[k].key, value: filterDefault.value })
    //     }
    //   }
    // })
    return params
  }
  updateConfigFromPrefs(
    cols: EvidenceManagerTableConfig,
    options: ColumnPrefsModel
  ): EvidenceManagerTableConfig {
    const objKeys = Object.keys(cols) as Array<keyof typeof cols>
    // objKeys.forEach((k) => {
    //   const option = options.find((option) => option.value === k)
    //   cols[k].hide = !option!.checked
    // })
    return { ...cols }
  }

  getColPrefsFromConfig(cols: EvidenceManagerTableConfig): ColumnPrefsModel {
    let options: ColumnPrefsModel = []
    const objKeys = Object.keys(cols) as Array<keyof typeof cols>
    // objKeys.forEach((key) => {
    //   if (this.omittedFromPrefs.find((c) => c === cols[key].key)) return
    //   options.push({
    //     label: cols[key].tooltip || cols[key].name,
    //     value: key,
    //     checked: !cols[key].hide,
    //   })
    // })
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

  trackByIndex(_: number, data: EvidenceManagerRowData): number {
    return data.id
  }
}

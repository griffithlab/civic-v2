import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'
import { ApolloError, ApolloQueryResult } from '@apollo/client/core'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import { CvcInputEnum } from '@app/forms2/forms2.types'
import {
  EvidenceDirection,
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
  VariantOrigin,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { GraphQLError } from 'graphql'
import { NzTableFilterValue, NzTableQueryParams } from 'ng-zorro-antd/table'
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  ReplaySubject,
  shareReplay,
  startWith,
  Subject,
  withLatestFrom,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'
import { $enum, EnumWrapper } from 'ts-enum-util'
import { ScrollFetch } from './table-scroller.directive'

export type EvidenceManagerConnection = {
  totalCount: number
  pageCount: number
  pageInfo: PageInfo
  nodes: EvidenceManagerFieldsFragment[]
}

// choose table columns from its query fragment & combine with options extra data
export type RowData = Pick<
  EvidenceManagerFieldsFragment,
  | 'id'
  | 'status'
  | 'molecularProfile'
  | 'disease'
  | 'therapies'
  | 'therapyInteractionType'
  | 'description'
  | 'evidenceType'
  | 'evidenceLevel'
  | 'evidenceRating'
  | 'evidenceDirection'
  | 'significance'
  | 'variantOrigin'
> &
  RowDataExtra

// additional columns added to row data for table templates, logic
export type RowDataExtra = {
  // need evidence object for entity-tag in colum
  evidenceItem: { id: number; name: string; link: string }
  // additional boolean column to handle row selected state
  selected: boolean
}

export type ColKey = keyof RowData
// used in selection events
type RowSelection = {
  selected: boolean
  id: number
}

// filter option for text typeahead input filters
type CustomFilter = { key: string; value: NzTableFilterValue }

// NzTableQueryParam's filter object, typed for easier reference
export type FilterOption = { text: string; value: any; byDefault?: boolean }

// config object for table's columns in TableConfig array
type ColConfig = {
  key: ColKey
  tooltip?: string
  name: string
  width: string
  hide?: boolean
  filter?: {
    options: FilterOption[]
    multiple?: boolean
  }
  showSort?: boolean
}

type TableConfig = {
  [key in ColKey]: ColConfig
}

// types to drive the preferences panel
type ColumnPrefsOption = { label: string; value: string; checked?: boolean }
type ColumnPrefsModel = ColumnPrefsOption[]

export type QueryParamKey = keyof EvidenceManagerQueryVariables
// gql query vars sort params
type QuerySortParams = {
  sortBy: {
    column: any
    direction: SortDirection
  }
}

type QueryType = 'fetch' | 'refetch'

// version of NzTableQueryParams modified for relay pagination,
// replaces 'pageIndex' and 'pageSize' w/ 'first' and 'after'
export type CvcTableQueryParams = Omit<
  NzTableQueryParams,
  'pageIndex' | 'pageSize'
> & { fetchMore?: { first?: number; after?: string }; query: QueryType }

type RequestError = {
  network?: ApolloError
  query?: ReadonlyArray<GraphQLError>
}

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-manager',
  templateUrl: './evidence-manager.component.html',
  styleUrls: ['./evidence-manager.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidenceManagerComponent implements OnChanges {
  @Input() cvcTableQueryParams?: Partial<NzTableQueryParams>
  @Input() cvcSelectedIds?: number[]
  @Output() cvcSelectedIdsChange = new EventEmitter<number[]>()

  // SOURCE STREAMS
  onTableQueryParams$: ReplaySubject<NzTableQueryParams>
  onCustomFilter$: ReplaySubject<CustomFilter>
  onFetch$: BehaviorSubject<ScrollFetch>
  onQuery$: ReplaySubject<CvcTableQueryParams>
  onRowSelected$: Subject<RowSelection>
  onPreference$: Subject<ColumnPrefsModel>

  // INTERMEDIATE STREAMS
  queryResult$: Subject<ApolloQueryResult<EvidenceManagerQuery>>
  connection$: Observable<EvidenceManagerConnection>
  selectedRow$: BehaviorSubject<Set<number>>
  preferenceUpdate$!: Observable<ColumnPrefsModel>

  // PRESENTION STREAMS
  col$: BehaviorSubject<TableConfig>
  row$?: Observable<RowData[]>
  loading$: Observable<boolean>
  noMoreRows$: BehaviorSubject<boolean>
  requestError$: Subject<RequestError>
  isFetchMore$: Subject<boolean>

  // passed to tableScroller
  pageInfo$!: Observable<PageInfo>
  scrollEvent$: BehaviorSubject<ScrollEvent>
  scrollIndex$: Subject<number> // TODO: implement scroll-to-index

  // apollo query ref
  queryRef?: QueryRef<EvidenceManagerQuery, EvidenceManagerQueryVariables>

  // initial column configurations
  managerTableConfig: TableConfig

  // the entity name text filters integrate w/ the nz-table filter options,
  // by using a single-element filter array. 'value' is the input model value
  // and 'text' will be its placeholder text. This filter option can be used to
  // specify an input w/o a placeholder
  nameFilterNoPlaceholder: FilterOption = {
    text: '',
    value: '',
  }

  // hide these columns in preferences checkbox list to prevent changes
  omittedFromPrefs: ColKey[] = ['selected', 'id']

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling = false

  columnKeyToSortColumnMap: { [key in ColKey]?: EvidenceSortColumns } = {
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

  columnKeyToFilterParamMap: {
    [key in ColKey]?: keyof Pick<
      EvidenceManagerQueryVariables,
      'molecularProfileName' | 'diseaseName' | 'therapyName'
    >
  } = {
    molecularProfile: 'molecularProfileName',
    disease: 'diseaseName',
    therapies: 'therapyName',
  }

  constructor(private gql: EvidenceManagerGQL, private cdr: ChangeDetectorRef) {
    this.onTableQueryParams$ = new ReplaySubject<NzTableQueryParams>()
    this.onCustomFilter$ = new ReplaySubject<CustomFilter>()
    this.onFetch$ = new BehaviorSubject<ScrollFetch>({})
    this.onQuery$ = new ReplaySubject<CvcTableQueryParams>()
    this.onRowSelected$ = new Subject<RowSelection>()
    this.onPreference$ = new Subject<ColumnPrefsModel>()

    this.queryResult$ = new Subject<ApolloQueryResult<EvidenceManagerQuery>>()
    this.selectedRow$ = new BehaviorSubject<Set<number>>(new Set<number>())
    this.scrollIndex$ = new Subject<number>()
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.requestError$ = new Subject<RequestError>()
    this.isFetchMore$ = new BehaviorSubject<boolean>(false)

    this.managerTableConfig = {
      selected: {
        name: 'Select',
        key: 'selected',
        hide: false,
        width: '30px',
      },
      id: {
        name: 'ID',
        key: 'id',
        width: '30px',
        hide: true,
        filter: {
          options: [this.nameFilterNoPlaceholder],
        },
      },
      status: {
        name: 'Status',
        key: 'status',
        width: '40px',
        hide: true,
      },
      evidenceItem: {
        name: 'Evidence Item',
        key: 'evidenceItem',
        width: '110px',
        showSort: true,
        filter: {
          options: [{ text: 'Search IDs', value: '' }],
        },
      },
      molecularProfile: {
        name: 'Molecular Profile',
        key: 'molecularProfile',
        width: '250px',
        filter: {
          options: [{ text: 'Search MP Names', value: '' }],
        },
      },
      disease: {
        name: 'Disease',
        key: 'disease',
        width: '250px',
        filter: {
          options: [{ text: 'Search Disease Names', value: '' }],
        },
      },
      therapies: {
        name: 'Therapies',
        key: 'therapies',
        width: '200px',
        filter: {
          options: [{ text: 'Search Therapy Names', value: '' }],
        },
      },
      therapyInteractionType: {
        name: 'IT',
        tooltip: 'Therapy Interaction Type',
        key: 'therapyInteractionType',
        width: '30px',
      },
      description: {
        name: 'DESC',
        tooltip: 'Evidence Description',
        key: 'description',
        width: '40px',
      },
      evidenceType: {
        name: 'ET',
        tooltip: 'Evidence Type',
        key: 'evidenceType',
        width: '40px',
        filter: {
          options: this.getAttributeFilters(
            $enum(EvidenceType),
            EvidenceType.Predictive
          ),
        },
      },
      evidenceDirection: {
        name: 'ED',
        tooltip: 'Evidence Direction',
        key: 'evidenceDirection',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceDirection)),
        },
      },
      evidenceLevel: {
        name: 'EL',
        tooltip: 'Evidence Level',
        key: 'evidenceLevel',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceLevel)),
        },
      },
      significance: {
        name: 'SI',
        tooltip: 'Significance',
        key: 'significance',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceSignificance)),
        },
      },
      variantOrigin: {
        name: 'VO',
        tooltip: 'Variant Origin',
        key: 'variantOrigin',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(VariantOrigin)),
        },
      },
      evidenceRating: {
        name: 'ER',
        tooltip: 'Evidence Rating',
        key: 'evidenceRating',
        width: '40px',
        hide: false,
        filter: {
          options: [1, 2, 3, 4, 5].map((n) => {
            return { value: n, text: `${n} stars` }
          }),
        },
      },
    }

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

    // merge custom filter events w/ current query params, emit new onQuery$ event
    // when custom filter components emit updates
    this.onCustomFilter$
      .pipe(
        withLatestFrom(this.onQuery$),
        map(([newFilter, params]) => {
          // convert newFilter key to its corresponding query param
          // e.g. 'molecularProfile' to 'molecularProfileName'
          const mappedKey =
            this.columnKeyToFilterParamMap[newFilter.key as ColKey]
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

    // add query type to params from table's filter updates &
    // component Input updates, emit from onQuery$
    this.onTableQueryParams$
      .pipe(untilDestroyed(this))
      .subscribe((tableParams) => {
        // omit unused pageIndex, pageSize attributes
        let { pageIndex, pageSize, ...params } = tableParams

        const queryParams: CvcTableQueryParams = {
          ...params,
          query: 'refetch',
        }
        this.onQuery$.next(queryParams)
      })

    // add query type to last onQueryparams, merge tablescroller onFetch, emit onQuery$
    this.onFetch$
      .pipe(withLatestFrom(this.onQuery$), untilDestroyed(this))
      .subscribe(([fetchParams, lastQuery]) => {
        const queryParams: CvcTableQueryParams = {
          ...lastQuery,
          query: 'fetch',
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
          this.queryRef = this.gql.watch(queryVars)
          // NOTE: refetch and fetchMore results from valueChanges do not include network or gql
          // errors, so this extra requestError$ stuff below is required to get errors from
          // those functions' .then() promises. see: https://github.com/apollographql/apollo-client/issues/6857
          this.queryRef.valueChanges
            .pipe(tag('queryRef.valueChanges'), untilDestroyed(this))
            .subscribe((result) => {
              this.queryResult$.next(result)
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

    // entity page info & nodes
    this.connection$ = this.queryResult$.pipe(pluck('data', 'evidenceItems'))

    // provided to table-scroll directive for fetchMore queries
    this.pageInfo$ = this.connection$.pipe(
      pluck('pageInfo'),
      filter(isNonNulled)
    )

    // add any additional row attributes as desired, for column data not included response
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

    // emit network & query errors for error tag display
    this.requestError$.pipe(tag('requestError$ end'))

    // col$ provide column-level configuration for table header, and row cells.
    // Preferences feature subscribes to col$ to generate its options, and updates
    // col$ to apply preferences changes
    this.col$ = new BehaviorSubject<TableConfig>(this.managerTableConfig)

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
  }

  getRequestErrors(
    result: ApolloQueryResult<EvidenceManagerQuery>
  ): RequestError {
    return {
      query: result.errors,
      network: result.error,
    }
  }

  getAttributeFilters(
    attrEnums: EnumWrapper,
    byDefault?: CvcInputEnum
  ): FilterOption[] {
    const filters = attrEnums.getValues().map((value) => {
      return {
        text: formatEvidenceEnum(value),
        value: value,
        byDefault: byDefault === value,
      }
    })
    return filters
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
        column: this.getSortColumnFromKey(queryParam.key as ColKey),
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

  updateConfigFromPrefs(
    cols: TableConfig,
    options: ColumnPrefsModel
  ): TableConfig {
    const objKeys = Object.keys(cols) as Array<keyof typeof cols>
    objKeys.forEach((k) => {
      const option = options.find((option) => option.value === k)
      cols[k].hide = !option!.checked
    })
    return { ...cols }
  }

  getColPrefsFromConfig(cols: TableConfig): ColumnPrefsModel {
    let options: ColumnPrefsModel = []
    const objKeys = Object.keys(cols) as Array<keyof typeof cols>
    objKeys.forEach((key) => {
      if (this.omittedFromPrefs.find((c) => c === cols[key].key)) return
      options.push({
        label: cols[key].tooltip || cols[key].name,
        value: key,
        checked: !cols[key].hide,
      })
    })
    return options
  }

  getSortColumnFromKey(key: ColKey): Maybe<EvidenceSortColumns> {
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

  trackByIndex(_: number, data: RowData): number {
    return data.id
  }
}

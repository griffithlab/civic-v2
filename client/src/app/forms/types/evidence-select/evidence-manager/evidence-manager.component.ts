import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'
import { ApolloQueryResult, gql } from '@apollo/client/core'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import { LinkableEntity } from '@app/forms/components/entity-tag/entity-tag.component'
import {
  EvidenceItem,
  EvidenceItemConnection,
  EvidenceManagerGQL,
  EvidenceManagerQuery,
  EvidenceManagerQueryVariables,
  EvidenceSortColumns,
  Maybe,
  PageInfo,
  SortDirection,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Apollo, QueryRef } from 'apollo-angular'
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
  Subject,
  withLatestFrom,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'
import {
  columnKeyToQueryVariableMap,
  columnKeyToSortColumnMap,
  EvidenceManagerConfig,
  omittedFromPrefs,
} from './evidence-manager.config'
import {
  colTypeGuards,
  ColumnPrefsModel,
  ColumnPrefsOption,
  ConvertedQueryVar,
  CvcFilterChange,
  CvcTableQueryParams,
  EvidenceManagerColKey,
  EvidenceManagerRowData,
  EvidenceManagerTableConfig,
  hasFilterOptions,
  hasInputFilterOptions,
  hasSortOptions,
  QuerySortParams,
  RequestError,
  RowSelection,
} from './evidence-manager.types'
import { ScrollFetch } from './table-scroller.directive'

export type EvidenceManagerSettings = {
  filters: CvcFilterChange[]
  preferences: Partial<ColumnPrefsOption>[]
}

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-manager',
  templateUrl: './evidence-manager.component.html',
  styleUrls: ['./evidence-manager.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidenceManagerComponent implements OnChanges, AfterViewInit {
  @Input() cvcTableSettings?: EvidenceManagerSettings
  @Input() cvcSelectedIds?: number[]
  @Output() cvcSelectedIdsChange = new EventEmitter<number[]>()

  // SOURCE @Input STREAMS
  onSetTableFilter$: BehaviorSubject<CvcFilterChange[]>
  onSetTablePref$: BehaviorSubject<Partial<ColumnPrefsOption>[]>
  onSetSelectedRow$: BehaviorSubject<Set<number>>

  // SOURCE STREAMS
  onRowSelected$: Subject<RowSelection>
  onPreferenceChange$: BehaviorSubject<ColumnPrefsModel>
  onScroll$: BehaviorSubject<ScrollEvent> // emitted from tableScroller directive
  onFetchMore$: Subject<ScrollFetch>
  onResetFilter$: Subject<void>

  // INTERMEDIATE STREAMS
  queryRequest$: Subject<CvcTableQueryParams>
  queryResult$: ReplaySubject<ApolloQueryResult<EvidenceManagerQuery>>
  connection$: Observable<EvidenceItemConnection>
  refetch$: Observable<CvcTableQueryParams>
  fetchMore$: Observable<CvcTableQueryParams>
  setPreference$!: Observable<ColumnPrefsModel>

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

  // column configuration
  tableConfig: EvidenceManagerConfig

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling = false

  colGuards = colTypeGuards

  constructor(
    private queryGQL: EvidenceManagerGQL,
    private apollo: Apollo,
    private cdr: ChangeDetectorRef
  ) {
    this.onFetchMore$ = new Subject<ScrollFetch>()
    this.onPreferenceChange$ = new BehaviorSubject<ColumnPrefsModel>([])
    this.onResetFilter$ = new Subject<void>()
    this.onRowSelected$ = new Subject<RowSelection>()
    this.onScroll$ = new BehaviorSubject<ScrollEvent>('stop')
    this.onSetSelectedRow$ = new BehaviorSubject<Set<number>>(new Set<number>())
    this.queryError$ = new Subject<RequestError>()
    this.queryRequest$ = new Subject<CvcTableQueryParams>()
    this.queryResult$ = new ReplaySubject<
      ApolloQueryResult<EvidenceManagerQuery>
    >(1)
    this.isFetchMore$ = new BehaviorSubject<boolean>(false)
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollToIndex$ = new Subject<number>()

    this.tableConfig = new EvidenceManagerConfig()

    // emit all filters when any is updated
    const filterChange$ = combineLatest(this.tableConfig.getFilterStreams())
    const sortChange$ = combineLatest(this.tableConfig.getSortStreams()).pipe(
      // with nz-table's multi-sort feature toggled off, it may emit two
      // events with every sort change: one that is the new sort change, and
      // another that resets the previous col's sort. Here, this filters
      // out those reset events
      filter((changes) => {
        return changes.filter((change) => change.value !== null).length <= 1
      })
    )

    // observe all sort and filter changes, convert to refetch queryParams
    this.refetch$ = combineLatest([sortChange$, filterChange$]).pipe(
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
    this.fetchMore$ = this.onFetchMore$.pipe(
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
    // NOTE: onResetFilter causes every col sort & filter to emit an update
    // event that ends up here. The debounceTime operator ensures that only one
    // event makes it through to emit a query.
    merge(this.refetch$, this.fetchMore$)
      .pipe(debounceTime(50), untilDestroyed(this))
      .subscribe((params: CvcTableQueryParams) => {
        const queryVars = this.getQueryVars(params)
        if (!this.queryRef) {
          this.isFetchMore$.next(false)
          this.queryError$.next({})
          this.queryRef = this.queryGQL.watch(queryVars)

          // NOTE: refetch and fetchMore results from valueChanges do not
          // include network or queryGQL errors, so this extra queryError$ stuff
          // below is required to catch and forward any errors. bug report:
          // https://github.com/apollographql/apollo-client/issues/6857
          this.queryRef.valueChanges
            .pipe(
              // tag('queryRef.valueChanges'),
              untilDestroyed(this)
            )
            .subscribe((result) => {
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
      })
    )

    // col$ provide column-level configuration in nz-table's thead and tbody
    // elements. Preference panel has a bidirectional link w/ cols$, subscribing
    // to its updates to generate its options with setPreference$, and updating
    // col$ when those options change, via onPreferenceChange$
    this.col$ = new BehaviorSubject<EvidenceManagerTableConfig>(
      this.tableConfig.get()
    )

    // update preferences options whenever col options change
    this.setPreference$ = this.col$.pipe(
      map((cols) => this.getColPrefsFromTableConfig(cols))
    )

    // update columns when preferences changed (called by prefs panel)
    this.onPreferenceChange$
      .pipe(
        withLatestFrom(this.col$),
        map(([prefs, cols]) => this.getTableConfigFromColPrefs(prefs, cols)),
        untilDestroyed(this)
      )
      .subscribe((cols) => {
        this.col$.next(cols)
      })

    // emit filter stream updates from OnChanges' cvcTableSettings changes
    this.onSetTableFilter$ = new BehaviorSubject<CvcFilterChange[]>([])
    this.onSetTableFilter$.pipe(untilDestroyed(this)).subscribe((filters) => {
      const cols = this.col$.getValue()
      filters.forEach((filter) => {
        const col = cols.find((col) => col.key === filter.key)
        // if column has an input filter, update its single option value to
        // update the typeahead field value. Since we just have an entity ID,
        // we need to get its name value from the cache to populate the input
        if (hasInputFilterOptions(col)) {
          const currentOption = col.filter.options[0]
          // if filter value null reset input filter
          if (filter.value === null) {
            col.filter.options = [{ ...currentOption, value: null }]
            col.filter.changes!.next(filter)
            return
          } else if (Array.isArray(filter.value) && filter.value.length === 0) {
            col.filter.options = [{ ...currentOption, value: null }]
            col.filter.changes!.next({ ...filter, value: null })
            return
          }

          let id: Maybe<number>

          // if this is an array of ids, just take the 1st one
          if (Array.isArray(filter.value)) {
            if (filter.value.length > 0) {
              id = filter.value[0]
            }
          } else {
            id = filter.value
          }
          const typename = col.filter.typename
          if (!typename || !id) {
            console.error(
              `evidence-manager requires column config '${col.key}' provide a typename for cvcTablePrefs Input to set its filter`
            )
            return
          }
          const entityName = this.getEntityName(typename, id)
          if (!entityName) return
          col.filter.options = [{ ...currentOption, value: entityName }]
          col.filter.changes!.next({ ...filter, value: entityName })
        } else if (hasFilterOptions(col)) {
          col.filter.changes!.next(filter)
        }
      })
    })

    // emit prefs updates from OnChanges' cvcTableSettings changes
    this.onSetTablePref$ = new BehaviorSubject<Partial<ColumnPrefsOption>[]>([])
    this.onSetTablePref$
      .pipe(
        withLatestFrom(this.setPreference$),
        map(([newPrefs, currentModel]) => {
          // merge new col prefs w/ current prefs
          const newModel: ColumnPrefsModel = []
          newPrefs.forEach((colPref) => {
            let pref = currentModel.find((p) => p.value === colPref.value)
            if (pref) {
              newModel.push({ ...pref, ...colPref })
            } else {
              console.warn(
                `evidence-manager onSetTablePref$ received updated preferences for column '${colPref.value}', but a column with that key could not be found.`
              )
            }
          })
          return newModel
        }),
        untilDestroyed(this)
      )
      .subscribe((preferences) => {
        this.onPreferenceChange$.next(preferences)
      })

    // emit updated row$, emit updated cvcSelectedIds when row checkbox changes
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

    // TODO: consolidate these two onScroll$ subscriptions for every onScrolled
    // event, convert to bool & set isScrolling
    this.onScroll$
      .pipe(
        map((e: ScrollEvent) => (e === 'stop' ? false : true)),
        distinctUntilChanged(),
        untilDestroyed(this)
      )
      .subscribe((e) => {
        this.isScrolling = e
        this.cdr.markForCheck()
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
    // resets column config to default, emits reset events from all column
    // sort/filter streams
    this.onResetFilter$
      .pipe(withLatestFrom(of(this.tableConfig.get())), untilDestroyed(this))
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
    const column = this.getSortColumnFromColKey(
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
  ): EvidenceManagerQueryVariables {
    let queryVars: EvidenceManagerQueryVariables = {}
    if (!params.filter) return queryVars
    params.filter.forEach((f) => {
      // handle any filter column keys that must be converted to a different
      // query variable (e.g. 'disease' -> 'diseaseName' )
      const queryVar: Maybe<ConvertedQueryVar> =
        columnKeyToQueryVariableMap[f.key as EvidenceManagerColKey]
      const key = queryVar
        ? queryVar
        : (f.key as keyof EvidenceManagerQueryVariables)

      // convert null values to undefined (nz-table prefers 'null' for its
      // filter and sort types to indicate unset, query vars need undefined)
      // convert any empty strings to undefined
      queryVars[key] = f.value === null || f.value === '' ? undefined : f.value
    })
    return queryVars
  }

  // helper fn for queryError$, transforms ApollQueryResult errors into custom
  // error object
  getRequestErrors(
    result: ApolloQueryResult<EvidenceManagerQuery>
  ): RequestError {
    return {
      query: result.errors,
      network: result.error,
    }
  }

  // onPreferencesChange$ helper fn, returns a new column config array
  // updated with col.hidden prefs settings
  getTableConfigFromColPrefs(
    prefs: ColumnPrefsModel,
    cols: EvidenceManagerTableConfig
  ): EvidenceManagerTableConfig {
    cols.forEach((col) => {
      if (omittedFromPrefs.find((c) => c === col.key)) return
      const pref = prefs.find((pref) => pref.value === col.key)
      if (pref) {
        col.hidden = pref?.checked ? false : true
      }
    })
    return [...cols]
  }

  getColPrefsFromTableConfig(
    cols: EvidenceManagerTableConfig
  ): ColumnPrefsModel {
    let options: ColumnPrefsModel = []
    cols.forEach((col) => {
      if (omittedFromPrefs.find((c) => c === col.key)) return
      options.push({
        label: col.tooltip || col.label,
        value: col.key,
        checked: !col.hidden,
      })
    })
    return options
  }

  getSortColumnFromColKey(
    key: EvidenceManagerColKey
  ): Maybe<EvidenceSortColumns> {
    return columnKeyToSortColumnMap[key]
  }

  getEntityName(typename: string, id: number): Maybe<string> {
    const fragment = {
      id: `${typename}:${id}`,
      fragment: gql`
                fragment Linkable${typename}Entity on ${typename} {
                  id
                  name
                  link
                }`,
    }
    const entity = this.apollo.client.readFragment(fragment) as LinkableEntity
    if (!entity) {
      console.error(
        `evidence-manager onSetTableFilter$ could not find cached entity ${typename}:${id} to populate input filter`
      )
      return
    }
    return entity.name
  }

  trackByIndex(_: number, data: Maybe<EvidenceManagerRowData>): Maybe<number> {
    return data?.id
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcTableSettings) {
      const settings: EvidenceManagerSettings =
        changes.cvcTableSettings.currentValue
      if (settings !== undefined) {
        this.onSetTableFilter$.next(settings.filters)
        // NOTE: uncomment next line to re-link table column visibility & field disabled states
        // this.onSetTablePref$.next(settings.preferences)
      }
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

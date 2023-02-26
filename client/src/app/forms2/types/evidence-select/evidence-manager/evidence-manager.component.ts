import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
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
  EvidenceType,
  Maybe,
  PageInfo,
  VariantOrigin,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { GraphQLError } from 'graphql'
import { NzSafeAny } from 'ng-zorro-antd/core/types'
import { NzTableFilterValue, NzTableQueryParams } from 'ng-zorro-antd/table'
import {
  BehaviorSubject,
  combineLatest,
  defer,
  distinctUntilChanged,
  filter,
  from,
  iif,
  map,
  Observable,
  ReplaySubject,
  shareReplay,
  startWith,
  Subject,
  switchMap,
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

type CustomFilter = { key: string; value: NzTableFilterValue }

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

export type RowDataExtra = {
  evidenceItem: { id: number; name: string; link: string }
  selected: boolean
}
export type ColKey = keyof RowData

export type FilterOption = { text: string; value: any; byDefault?: boolean }

type ColConfig = {
  key: ColKey
  name: string
  width: string
  hide?: boolean
  filter?: {
    options: FilterOption[]
    multiple: boolean
  }
  showSort?: boolean
}

type ColumnsModel = {
  [key in ColKey]: ColConfig
}
type ColumnOption = { label: string; value: string; checked?: boolean }
type ColumnOptionsModel = ColumnOption[]

type RowSelection = {
  selected: boolean
  id: number
}

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
  @Input() cvcSelectedIds?: number[]
  @Output() cvcSelectedIdsChange = new EventEmitter<number[]>()

  @Input() cvcQueryVariables?: Partial<EvidenceManagerQueryVariables>

  // SOURCE STREAMS
  onRowSelected$: Subject<RowSelection>
  onQuery$: ReplaySubject<NzTableQueryParams>
  onCustomFilter$: ReplaySubject<CustomFilter>
  onScrollFetch$: BehaviorSubject<ScrollFetch>
  onPreference$: Subject<ColumnOptionsModel>

  // INTERMEDIATE STREAMS
  queryResult$?: Observable<ApolloQueryResult<EvidenceManagerQuery>>
  connection$: Observable<EvidenceManagerConnection>
  selectedRow$: BehaviorSubject<Set<number>>
  colOption$: Observable<ColumnOptionsModel>

  // PRESENTION STREAMS
  col$: BehaviorSubject<ColumnsModel>
  row$?: Observable<RowData[]>
  loading$!: Observable<boolean>
  noMoreRows$: BehaviorSubject<boolean>
  pageInfo$!: Observable<PageInfo>

  scrollEvent$: BehaviorSubject<ScrollEvent>
  scrollIndex$: Subject<number>
  requestError$: Observable<Maybe<RequestError>>

  // apollo query ref
  queryRef?: QueryRef<EvidenceManagerQuery, EvidenceManagerQueryVariables>

  // default column configuration array
  columnConfig: ColumnsModel
  customFilterTextOption: FilterOption = {
    text: 'Name',
    value: '',
    byDefault: true,
  }

  // toggles which loading indicator gets displayed:
  // either the full-table initial loading spinner or card header loading tag
  isFetchMoreQuery = false

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling = false

  constructor(private gql: EvidenceManagerGQL, private cdr: ChangeDetectorRef) {
    this.selectedRow$ = new BehaviorSubject<Set<number>>(new Set<number>())
    this.onRowSelected$ = new Subject<RowSelection>()
    this.onScrollFetch$ = new BehaviorSubject<ScrollFetch>({})
    this.onQuery$ = new ReplaySubject<NzTableQueryParams>()
    this.onCustomFilter$ = new ReplaySubject<CustomFilter>()
    this.scrollIndex$ = new Subject<number>()
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.requestError$ = new Observable<RequestError>()
    this.onPreference$ = new Subject<ColumnOptionsModel>()

    this.columnConfig = {
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
          options: [this.customFilterTextOption],
          multiple: false,
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
        width: '120px',
        showSort: true,
        filter: {
          options: [this.customFilterTextOption],
          multiple: false,
        },
      },
      molecularProfile: {
        name: 'Molecular Profile',
        key: 'molecularProfile',
        width: '250px',
        filter: {
          options: [this.customFilterTextOption],
          multiple: false,
        },
      },
      disease: {
        name: 'Disease',
        key: 'disease',
        width: '250px',
        filter: {
          options: [this.customFilterTextOption],
          multiple: false,
        },
      },
      therapies: {
        name: 'Therapies',
        key: 'therapies',
        width: '200px',
        filter: {
          options: [this.customFilterTextOption],
          multiple: false,
        },
      },
      therapyInteractionType: {
        name: 'IT',
        key: 'therapyInteractionType',
        width: '30px',
      },
      description: {
        name: 'DESC',
        key: 'description',
        width: '40px',
      },
      evidenceType: {
        name: 'ET',
        key: 'evidenceType',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceType)),
          multiple: false,
        },
      },
      evidenceDirection: {
        name: 'ED',
        key: 'evidenceDirection',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceDirection)),
          multiple: false,
        },
      },
      evidenceLevel: {
        name: 'EL',
        key: 'evidenceLevel',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceLevel)),
          multiple: false,
        },
      },
      significance: {
        name: 'SI',
        key: 'significance',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceSignificance)),
          multiple: false,
        },
      },
      variantOrigin: {
        name: 'VO',
        key: 'variantOrigin',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(VariantOrigin)),
          multiple: false,
        },
      },
      evidenceRating: {
        name: 'ER',
        key: 'evidenceRating',
        width: '40px',
        hide: false,
        filter: {
          options: [1, 2, 3, 4, 5].map((n) => {
            return { value: n, text: `${n} stars` }
          }),
          multiple: false,
        },
      },
    }

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
    this.onCustomFilter$
      .pipe(
        withLatestFrom(this.onQuery$),
        map(([newFilter, params]) => {
          let filters = params.filter
          const currentIndex = filters.findIndex((f) => f.key === newFilter.key)
          if (currentIndex !== -1) {
            filters[currentIndex].value = newFilter.value
          } else {
            filters.push(newFilter)
          }
          return { ...params, filter: [...filters] }
        }),
        untilDestroyed(this),
        tag('onCustomFilter$')
      )
      .subscribe((params) => {
        this.onQuery$.next(params)
      })

    this.queryResult$ = combineLatest([
      this.onQuery$.pipe(tag('queryResult$ onQuery$')),
      this.onScrollFetch$,
    ]).pipe(
      switchMap(([params, fetch]: [NzTableQueryParams, ScrollFetch]) => {
        const query = this.getQueryVars(params, fetch)
        // helper functions for iif operator:
        const watchQuery = (query: EvidenceManagerQueryVariables) => {
          this.isFetchMoreQuery = false
          // calls watch() to create queryReft,
          // returns observable from initial watch() query
          this.queryRef = this.gql.watch(query)

          // emit loading events
          this.loading$ = this.queryRef.valueChanges.pipe(
            pluck('loading'),
            distinctUntilChanged()
          )

          return this.queryRef.valueChanges
        }
        const fetchQuery = (query: EvidenceManagerQueryVariables) => {
          this.isFetchMoreQuery = true
          // returns observable from the queryRef created with
          // watchQuery(). Since refetch() returns a promise, we convert it
          // to an observable with the from() operator
          return from(this.queryRef!.refetch(query))
        }

        // This iif operator prevents double-calling the API:
        // If queryRef doesn't exist, create it with watchQuery observable.
        // If it does, refetch with fetchQuery observable.
        // Using defer() ensures functions are not called until
        // values are emitted - otherwise they'll be called on subscribe.
        return iif(
          () => this.queryRef === undefined, // predicate
          defer(() => watchQuery(query)), // true
          defer(() => fetchQuery(query)) // false
        )
      }),
      tag('evidence-manager queryResult$ end'),
      shareReplay()
    ) // end this.queryResult$

    this.requestError$ = this.queryResult$.pipe(
      map((result) => {
        if (result.errors || result.error) {
          return {
            query: result.errors,
            network: result.error,
          }
        } else {
          return {}
        }
      })
    )

    this.connection$ = this.queryResult$.pipe(pluck('data', 'evidenceItems'))

    // provided to table-scroll directive for fetchMore queries
    this.pageInfo$ = this.connection$.pipe(
      pluck('pageInfo'),
      filter(isNonNulled)
    )

    // tables uses col$ to provide column-level configuration th, td
    this.col$ = new BehaviorSubject<ColumnsModel>(this.columnConfig)

    // nz-checkbox-groups, used in table prefs, requires a slightly different model
    this.colOption$ = this.col$.pipe(
      map((cols) => this.getColOptionsFromModel(cols))
    )

    // upate col$ when preferences change
    this.onPreference$
      .pipe(
        withLatestFrom(this.col$),
        map(([options, cols]) => this.updateColModelFromOptions(cols, options)),
        untilDestroyed(this)
      )
      .subscribe((cols) => {
        this.col$.next(cols)
      })

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
    params: NzTableQueryParams,
    fetch: ScrollFetch
  ): EvidenceManagerQueryVariables {
    return { evidenceType: EvidenceType.Predictive, ...params, ...fetch }
  }

  updateColModelFromOptions(
    cols: ColumnsModel,
    options: ColumnOptionsModel
  ): ColumnsModel {
    const objKeys = Object.keys(cols) as Array<keyof typeof cols>
    objKeys.forEach((k) => {
      const option = options.find((option) => option.value === k)
      cols[k].hide = !option!.checked
    })
    return { ...cols }
  }

  getColOptionsFromModel(cols: ColumnsModel): ColumnOptionsModel {
    let options: ColumnOptionsModel = []
    const objKeys = Object.keys(cols) as Array<keyof typeof cols>
    objKeys.forEach((k) => {
      options.push({
        label: cols[k].name,
        value: k,
        checked: !cols[k].hide,
      })
    })
    return options
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcQueryVariables) {
      const queryVars = changes.cvcQueryVariables.currentValue
      this.onQuery$.next(queryVars)
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

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
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
    VariantOrigin
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { GraphQLError } from 'graphql'
import { NzTableQueryParams } from 'ng-zorro-antd/table'
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
    withLatestFrom
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

export type FilterOption = { text: string; value: any; byDefault?: boolean }

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

type ColConfig = {
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
export class CvcEvidenceManagerComponent implements OnInit, OnChanges {
  @Input() cvcSelectedIds?: number[]
  @Output() cvcSelectedIdsChange = new EventEmitter<number[]>()

  @Input() cvcQueryVariables?: Partial<EvidenceManagerQueryVariables>

  // SOURCE STREAMS
  onRowSelected$: Subject<RowSelection>
  onParamsChange$: ReplaySubject<NzTableQueryParams>
  onScrollFetch$: BehaviorSubject<ScrollFetch>
  onPreference$: Subject<ColumnOptionsModel>

  // INTERMEDIATE STREAMS
  queryResult$?: Observable<ApolloQueryResult<EvidenceManagerQuery>>
  connection$: Observable<EvidenceManagerConnection>
  col$: BehaviorSubject<ColumnsModel>
  row$?: Observable<RowData[]>
  selectedRow$: BehaviorSubject<Set<number>>
  colOption$: Observable<ColumnOptionsModel>

  // PRESENTION STREAMS
  loading$!: Observable<boolean>
  noMoreRows$: BehaviorSubject<boolean>
  pageInfo$!: Observable<PageInfo>

  scrollEvent$: BehaviorSubject<ScrollEvent>
  scrollIndex$: Subject<number>
  requestError$: Observable<Maybe<RequestError>>

  queryRef?: QueryRef<EvidenceManagerQuery, EvidenceManagerQueryVariables>

  initialColumns: ColumnsModel

  // toggles which loading indicator gets displayed,
  // full-table initial or card header loading tag
  isFetchMoreQuery = false

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling = false

  constructor(private gql: EvidenceManagerGQL, private cdr: ChangeDetectorRef) {
    this.selectedRow$ = new BehaviorSubject<Set<number>>(new Set<number>())
    this.onRowSelected$ = new Subject<RowSelection>()
    this.onScrollFetch$ = new BehaviorSubject<ScrollFetch>({})
    this.onParamsChange$ = new ReplaySubject<NzTableQueryParams>()
    this.scrollIndex$ = new Subject<number>()
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.requestError$ = new Observable<RequestError>()
    this.onPreference$ = new Subject<ColumnOptionsModel>()

    this.initialColumns = {
      selected: {
        name: 'Select',
        hide: false,
        width: '30px',
      },
      id: {
        name: 'ID',
        width: '30px',
        hide: true,
      },
      status: {
        name: 'Status',
        width: '40px',
        hide: true,
      },
      evidenceItem: {
        name: 'Evidence Item',
        width: '120px',
        showSort: true,
      },
      molecularProfile: {
        name: 'Molecular Profile',
        width: '250px',
      },
      disease: {
        name: 'Disease',
        width: '250px',
      },
      therapies: {
        name: 'Therapies',
        width: '200px',
      },
      therapyInteractionType: {
        name: 'IT',
        width: '30px',
      },
      description: {
        name: 'DESC',
        width: '40px',
      },
      evidenceType: {
        name: 'ET',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceType)),
          multiple: false,
        },
      },
      evidenceDirection: {
        name: 'ED',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceDirection)),
          multiple: false,
        },
      },
      evidenceLevel: {
        name: 'EL',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceLevel)),
          multiple: false,
        },
      },
      significance: {
        name: 'SI',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(EvidenceSignificance)),
          multiple: false,
        },
      },
      variantOrigin: {
        name: 'VO',
        width: '40px',
        filter: {
          options: this.getAttributeFilters($enum(VariantOrigin)),
          multiple: false,
        },
      },
      evidenceRating: {
        name: 'ER',
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

    // this.onParamsChange$.pipe(tag('onParamsChange$')).subscribe()

    this.queryResult$ = combineLatest([
      this.onParamsChange$,
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
      tag('requestError$'),
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
    this.col$ = new BehaviorSubject<ColumnsModel>(this.initialColumns)

    // nz-checkbox-groups, used in table prefs, requires a slightly different model
    this.colOption$ = this.col$.pipe(
      map((cols) => this.getColOptionsFromModel(cols))
    )

    // upate col$ when preferences change
    this.onPreference$.pipe(
      withLatestFrom(this.col$),
      map(([options, cols]) => this.updateColModelFromOptions(cols, options)),
      untilDestroyed(this)
    ).subscribe((cols)=> {
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

  ngOnInit(): void {}

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
      this.onParamsChange$.next(queryVars)
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

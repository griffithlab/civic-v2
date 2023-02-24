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
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import {
  EvidenceManagerFieldsFragment,
  EvidenceManagerGQL,
  EvidenceManagerQuery,
  EvidenceManagerQueryVariables,
  EvidenceType,
  Maybe,
  PageInfo,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { GraphQLError } from 'graphql'
import { NzSafeAny } from 'ng-zorro-antd/core/types'
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableQueryParams,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table'
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  defer,
  distinctUntilChanged,
  filter,
  from,
  iif,
  map,
  Observable,
  of,
  ReplaySubject,
  shareReplay,
  startWith,
  Subject,
  switchMap,
  takeUntil,
  takeWhile,
  throwError,
  withLatestFrom,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'
import { ScrollFetch } from './table-scroller.directive'

type EvidenceManagerConnection = {
  totalCount: number
  pageCount: number
  pageInfo: PageInfo
  nodes: EvidenceManagerFieldsFragment[]
}

type RowDataExtra = {
  evidenceItem: { id: number; name: string; link: string }
  selected: boolean
}
type RowData = Pick<
  EvidenceManagerFieldsFragment,
  | 'id'
  | 'status'
  | 'molecularProfile'
  | 'disease'
  | 'therapies'
  | 'evidenceType'
  | 'evidenceLevel'
  | 'evidenceRating'
  | 'evidenceDirection'
  | 'significance'
  | 'variantOrigin'
> &
  RowDataExtra

type ColKey = keyof RowData

type ColConfig = {
  name: string
  width: string
  hide?: boolean
  filter?: {
    showFilter: boolean
    listOfFilter: NzTableFilterList
    filterMultiple: boolean
  }
  showSort?: boolean
}

type ColumnsModel = {
  [key in ColKey]: ColConfig
}

type RowSelection = {
  selected: boolean
  id: number
}

type QueryError = {
  error?: ApolloError
  errors?: ReadonlyArray<GraphQLError>
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
  onAllSelected$: Subject<boolean>
  onParamsChange$: ReplaySubject<NzTableQueryParams>
  onScrollFetch$: BehaviorSubject<ScrollFetch>

  // INTERMEDIATE STREAMS
  queryResult$?: Observable<ApolloQueryResult<EvidenceManagerQuery>>
  connection$: Observable<EvidenceManagerConnection>
  col$: BehaviorSubject<ColumnsModel>
  row$?: Observable<RowData[]>
  selectedRow$: BehaviorSubject<Set<number>>

  // PRESENTION STREAMS
  loading$!: Observable<boolean>
  noMoreRows$: BehaviorSubject<boolean>
  scrollEvent$: BehaviorSubject<ScrollEvent>
  scrollIndex$: Subject<number>
  pageInfo$!: Observable<PageInfo>
  queryError$: Observable<Maybe<QueryError>>

  queryRef?: QueryRef<EvidenceManagerQuery, EvidenceManagerQueryVariables>

  initialColumns: ColumnsModel

  colSelectOptions!: Array<{
    text: string
    onSelect(...args: NzSafeAny[]): NzSafeAny
  }>

  allSelected: boolean = false
  allIndeterminate: boolean = false

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling = false

  constructor(private gql: EvidenceManagerGQL, private cdr: ChangeDetectorRef) {
    this.selectedRow$ = new BehaviorSubject<Set<number>>(new Set<number>())
    this.onRowSelected$ = new Subject<RowSelection>()
    this.onAllSelected$ = new Subject<boolean>()
    this.onScrollFetch$ = new BehaviorSubject<ScrollFetch>({})
    this.onParamsChange$ = new ReplaySubject<NzTableQueryParams>()
    this.scrollIndex$ = new Subject<number>()
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.queryError$ = new Observable<QueryError>()

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
        showSort: true
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
      evidenceType: {
        name: 'ET',
        width: '40px',
      },
      evidenceDirection: {
        name: 'ED',
        width: '40px',
      },
      evidenceLevel: {
        name: 'EL',
        width: '40px',
      },
      evidenceRating: {
        name: 'ER',
        width: '40px',
        hide: false,
      },
      significance: {
        name: 'SI',
        width: '40px',
      },
      variantOrigin: {
        name: 'VO',
        width: '40px',
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

    this.onParamsChange$.pipe(tag('onParamsChange$')).subscribe()

    this.queryResult$ = combineLatest([
      this.onParamsChange$,
      this.onScrollFetch$,
    ]).pipe(
      switchMap(([params, fetch]: [NzTableQueryParams, ScrollFetch]) => {
        const query = this.getQueryVars(params, fetch)

        // helper functions for iif operator:
        const watchQuery = (query: EvidenceManagerQueryVariables) => {
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
      // tag('evidence-manager queryResult$ end'),
      shareReplay()
    ) // end this.queryResult$

    this.queryError$ = this.queryResult$.pipe(
      map((result) => {
        if (result.errors || result.error) {
          return {
            errors: result.errors,
            error: result.error,
          }
        } else {
          return {}
        }
      }),
    )

    this.connection$ = this.queryResult$.pipe(pluck('data', 'evidenceItems'))

    // provided to table-scroll directive for fetchMore queries
    this.pageInfo$ = this.connection$.pipe(
      pluck('pageInfo'),
      filter(isNonNulled)
    )

    // add additional row attributes for column data not included response
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
    this.col$ = new BehaviorSubject<ColumnsModel>(this.initialColumns)

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

  getQueryVars(
    params: NzTableQueryParams,
    fetch: ScrollFetch
  ): EvidenceManagerQueryVariables {
    return { evidenceType: EvidenceType.Predictive, ...params, ...fetch }
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

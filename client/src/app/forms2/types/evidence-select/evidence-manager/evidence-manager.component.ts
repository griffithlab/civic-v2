import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  EvidenceItemConnection,
  EvidenceManagerFieldsFragment,
  EvidenceManagerGQL,
  EvidenceManagerQuery,
  EvidenceManagerQueryVariables,
  EvidenceType,
  PageInfo,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableQueryParams,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table'
import {
  BehaviorSubject,
  defer,
  distinctUntilChanged,
  filter,
  from,
  iif,
  map,
  Observable,
  ReplaySubject,
  startWith,
  switchMap,
} from 'rxjs'
import { combineLatestObject, isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'

type EvidenceManagerConnection = {
  totalCount: number
  pageCount: number
  pageInfo: PageInfo
  nodes: EvidenceManagerFieldsFragment[]
}

interface ColumnConfig {
  name: string
  key: keyof EvidenceManagerFieldsFragment
  hidden?: boolean
  sortOrder?: NzTableSortOrder | null
  sortFn?: NzTableSortFn<EvidenceManagerFieldsFragment> | null
  listOfFilter?: NzTableFilterList
  filterFn?: NzTableFilterFn<EvidenceManagerFieldsFragment> | null
  filterMultiple?: boolean
  sortDirections?: NzTableSortOrder[]
}

type TableData = {
  rows: EvidenceManagerFieldsFragment[]
  cols: ColumnConfig[]
}

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-manager',
  templateUrl: './evidence-manager.component.html',
  styleUrls: ['./evidence-manager.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidenceManagerComponent implements OnInit {
  @Input() cvcSelectedIds?: number[]
  @Output() cvcSelectedIdsChange = new EventEmitter<number[]>()

  @Input() cvcQueryVariables?: Partial<EvidenceManagerQueryVariables>

  // SOURCE STREAMS
  onCheckedChange$: ReplaySubject<Event>
  onParamsChange$: ReplaySubject<NzTableQueryParams>

  // INTERMEDIATE STREAMS
  queryResult$?: Observable<ApolloQueryResult<EvidenceManagerQuery>>
  connection$: Observable<EvidenceManagerConnection>
  col$: BehaviorSubject<ColumnConfig[]>
  row$?: Observable<EvidenceManagerFieldsFragment[]>
  tableData$: Observable<TableData>

  // PRESENTTION STREAMS
  // tableData$: Observable<TableData[]>

  loading$!: Observable<boolean>

  queryRef?: QueryRef<EvidenceManagerQuery, EvidenceManagerQueryVariables>

  defaultColumns: ColumnConfig[] = [
    {
      name: 'Status',
      key: 'status',
    },
    {
      name: 'Evidence Item',
      key: 'id',
    },
    {
      name: 'Molecular Profile',
      key: 'molecularProfile',
    },
    {
      name: 'Disease',
      key: 'disease',
    },
    {
      name: 'Therapies',
      key: 'therapies',
    },
  ]

  constructor(private gql: EvidenceManagerGQL) {
    this.onCheckedChange$ = new ReplaySubject<Event>()
    this.onParamsChange$ = new ReplaySubject<NzTableQueryParams>()
    this.queryResult$ = this.onParamsChange$.pipe(
      switchMap((params: NzTableQueryParams) => {
        const query = this.getQueryVars(params)

        // helper functions for iif operator:
        const watchQuery = (query: EvidenceManagerQueryVariables) => {
          // calls watch() to create queryReft,
          // returns observable from initial watch() query
          this.queryRef = this.gql.watch(query)

          // emit loading events
          this.loading$ = this.queryRef.valueChanges.pipe(
            pluck('loading'),
            distinctUntilChanged())

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
      })
    ) // end this.queryResult$

    this.connection$ = this.queryResult$.pipe(pluck('data', 'evidenceItems'))
    this.row$ = this.connection$.pipe(
      pluck('nodes'),
      filter(isNonNulled),
      startWith([])
    )
    this.col$ = new BehaviorSubject<ColumnConfig[]>(this.defaultColumns)

    this.tableData$ = combineLatestObject({
      rows: this.row$,
      cols: this.col$,
    })
    // this.tableData$.pipe(tag('evidence-manager tableData$')).subscribe((data: TableData) => {
    //   console.log(data)
    //   return {
    //     rows: data.rows,
    //     cols: data.cols
    //   }
    // })
    // this.responseMeta$ = this.queryResult$.pipe(
    //   pluck('data', 'evidenceItems'),
    //   map((connection) => {
    //     return {
    //       totalCount: connection.totalCount,
    //       pageCount: connection.pageCount,
    //       pageInfo: connection.pageInfo,
    //     }
    //   })
    // )
  }

  ngOnInit(): void {}

  getQueryVars(params: NzTableQueryParams): EvidenceManagerQueryVariables {
    return { evidenceType: EvidenceType.Predictive }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // disable link for checkable mode
    if (changes.cvcQueryVariables) {
      const queryVars = changes.cvcQueryVariables.currentValue
      this.onParamsChange$.next(queryVars)
    }
  }
}

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
  EvidenceManagerFieldsFragment,
  EvidenceManagerGQL,
  EvidenceManagerQuery,
  EvidenceManagerQueryVariables,
  EvidenceType,
  PageInfo,
} from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
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
  defer,
  distinctUntilChanged,
  filter,
  from,
  iif,
  map,
  Observable,
  ReplaySubject,
  startWith,
  Subject,
  switchMap,
} from 'rxjs'
import { combineLatestObject, isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'

type EvidenceManagerConnection = {
  totalCount: number
  pageCount: number
  pageInfo: PageInfo
  nodes: EvidenceManagerFieldsFragment[]
}

type RowDataExtra = {
  evidenceItem: { id: number; name: string; link: string }
  selected?: boolean
}
type RowData = EvidenceManagerFieldsFragment & RowDataExtra

type ColType = 'tag' | 'tags' | 'enum' | 'string' | 'number' | 'select'

type ColKey = keyof RowData

type ColConfig = {
  name: string
  type: ColType
  key: ColKey
  width?: string
  hide: boolean
  filter?: {
    listOfFilter: NzTableFilterList
    filterFn?: NzTableFilterFn<EvidenceManagerFieldsFragment> | null
    filterMultiple: boolean
  }
  select?: {
    selected: boolean
    indeterminate: boolean
  }
  sort?: {
    sortDirections: NzTableSortOrder[]
    sortOrder?: NzTableSortOrder | null
    sortFn?: NzTableSortFn<EvidenceManagerFieldsFragment> | null
  }
}

type TableData = {
  rows: RowData[]
  cols: ColConfig[]
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
  onRowChecked$: Subject<boolean>
  onColChecked$: Subject<boolean>
  onParamsChange$: ReplaySubject<NzTableQueryParams>

  // INTERMEDIATE STREAMS
  queryResult$?: Observable<ApolloQueryResult<EvidenceManagerQuery>>
  connection$: Observable<EvidenceManagerConnection>
  col$: BehaviorSubject<ColConfig[]>
  row$?: Observable<RowData[]>

  // PRESENTION STREAMS
  tableData$: Observable<TableData>

  loading$!: Observable<boolean>

  queryRef?: QueryRef<EvidenceManagerQuery, EvidenceManagerQueryVariables>

  defaultColumns: ColConfig[]

  colSelectOptions!: Array<{
    text: string
    onSelect(...args: NzSafeAny[]): NzSafeAny
  }>

  allSelected: boolean = false
  allIndeterminate: boolean = false

  constructor(private gql: EvidenceManagerGQL) {
    this.onRowChecked$ = new Subject<boolean>()
    this.onColChecked$ = new Subject<boolean>()
    this.onParamsChange$ = new ReplaySubject<NzTableQueryParams>()
    this.colSelectOptions = [
      {
        text: 'Select All',
        onSelect: () => {
          this.onColChecked$.next(true)
        },
      },
    ]

    this.defaultColumns = [
      {
        name: 'Select',
        type: 'select',
        hide: false,
        key: 'selected',
        width: '40px',
        select: {
          selected: false,
          indeterminate: false,
        },
      },
      {
        name: 'Status',
        type: 'enum',
        key: 'status',
        hide: true,
      },
      {
        name: 'Evidence Item',
        type: 'tag',
        key: 'evidenceItem',
        hide: false,
      },
      {
        name: 'Molecular Profile',
        type: 'tag',
        key: 'molecularProfile',
        hide: false,
      },
      {
        name: 'Disease',
        type: 'tag',
        key: 'disease',
        hide: false,
      },
      {
        name: 'Therapies',
        type: 'tags',
        key: 'therapies',
        hide: false,
      },
    ]

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
      })
    ) // end this.queryResult$

    this.connection$ = this.queryResult$.pipe(pluck('data', 'evidenceItems'))
    this.row$ = this.connection$.pipe(
      pluck('nodes'),
      filter(isNonNulled),
      map((nodes) => {
        return nodes.map((node) => {
          return {
            ...node,
            evidenceItem: {
              __typename: 'EvidenceItem',
              id: node.id,
              name: node.name,
              link: node.link,
            },
          }
        })
      }),
      startWith([])
    )
    this.col$ = new BehaviorSubject<ColConfig[]>(this.defaultColumns)

    this.tableData$ = combineLatestObject({
      rows: this.row$,
      cols: this.col$,
    })

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
  trackByIndex(_: number, data: EvidenceManagerFieldsFragment): number {
    return data.id
  }
}

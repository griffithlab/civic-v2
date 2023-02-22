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
import { QueryRef } from 'apollo-angular'
import { NzTableQueryParams } from 'ng-zorro-antd/table'
import {
  defer,
  distinctUntilChanged,
  from,
  iif,
  map,
  Observable,
  ReplaySubject,
  switchMap,
} from 'rxjs'
import { pluck } from 'rxjs-etc/operators'

type ResponseMeta = {
  totalCount: number
  pageCount: number,
  pageInfo: PageInfo
}
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

  // PRESENTTION STREAMS
  rowData$?: Observable<EvidenceManagerFieldsFragment[]>
  responseMeta$?: Observable<ResponseMeta>

  isLoading$?: Observable<boolean>

  queryRef?: QueryRef<EvidenceManagerQuery, EvidenceManagerQueryVariables>

  constructor(private gql: EvidenceManagerGQL) {
    this.onCheckedChange$ = new ReplaySubject<Event>()
    this.onParamsChange$ = new ReplaySubject<NzTableQueryParams>()
  }

  ngOnInit(): void {
    this.queryRef = this.gql.watch({ ...this.cvcQueryVariables })
    this.queryResult$ = this.onParamsChange$.pipe(
      switchMap((params: NzTableQueryParams) => {
        const query = this.getQueryVars(params)

        // helper functions for iif operator:
        const watchQuery = (query: EvidenceManagerQueryVariables) => {
          // calls watch() to create queryReft,
          // returns observable from initial watch() query
          this.queryRef = this.gql.watch(query)
          // emit loading events from isLoading$
          this.isLoading$ = this.queryRef.valueChanges.pipe(
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
    ) // end this.response$

    this.rowData$ = this.queryResult$.pipe(
      pluck('data', 'evidenceItems', 'nodes')
    )
    this.responseMeta$ = this.queryResult$.pipe(
      pluck('data', 'evidenceItems'),
      map((connection) => {
        return {
          totalCount: connection.totalCount,
          pageCount: connection.pageCount,
          pageInfo: connection.pageInfo
        }
      })
    )
  }

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

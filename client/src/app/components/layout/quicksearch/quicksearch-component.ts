import { Component, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { ApolloQueryResult } from '@apollo/client/core'
import { entityTypeToTypename } from '@app/core/utilities/entitytype-to-typename'
import {
  Maybe,
  QuicksearchGQL,
  QuicksearchQuery,
  QuicksearchQueryVariables,
  QuicksearchResultFragment,
  SearchableEntities,
  SearchResult,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { NzSelectComponent } from 'ng-zorro-antd/select'
import { asyncScheduler, defer, from, iif, Observable, Subject } from 'rxjs'
import { isNonNulled } from 'rxjs-etc/dist/esm/util'
import {
  distinctUntilChanged,
  filter,
  map,
  skip,
  switchMap,
  throttleTime,
} from 'rxjs/operators'

export interface QuicksearchOption {
  text: string
  value: string
  result: SearchResult
}

@Component({
    selector: 'cvc-quicksearch',
    styleUrls: ['./quicksearch-component.less'],
    templateUrl: './quicksearch-component.html',
    standalone: false
})
export class CvcQuicksearchComponent {
  private _selectedOpt: Maybe<SearchResult>
  set selectedOpt(s: Maybe<SearchResult>) {
    this._selectedOpt = s
  }
  get selectedOpt(): Maybe<SearchResult> {
    return this._selectedOpt
  }

  // get component ref to be able to clear it on select,
  // as described here: https://github.com/NG-ZORRO/ng-zorro-antd/issues/3097
  @ViewChild(NzSelectComponent, { static: true })
  selectNode!: NzSelectComponent

  selectedEntities: SearchableEntities[] = Object.values(SearchableEntities)
  searchableEntities = Object.keys(SearchableEntities)
  currentSearchTerm?: string

  // SOURCE STREAMS
  onSearch$: Subject<string>
  onSelect$: Subject<void>

  // INTERMEDIATE STREAMS
  queryRef!: QueryRef<QuicksearchQuery, QuicksearchQueryVariables>
  response$: Observable<ApolloQueryResult<QuicksearchQuery>>
  result$: Observable<Maybe<QuicksearchResultFragment>[]>

  // PRESENTATION STREAMS
  option$: Observable<QuicksearchOption[]>
  isLoading$: Observable<boolean>

  converter = entityTypeToTypename

  constructor(
    private gql: QuicksearchGQL,
    private router: Router
  ) {
    this.onSearch$ = new Subject<string>()
    this.onSelect$ = new Subject<void>()

    this.response$ = this.onSearch$.pipe(
      skip(1), // drop initial empty string from input init
      throttleTime(300, asyncScheduler, { leading: false, trailing: true }),
      switchMap((str: string) => {
        this.currentSearchTerm = str
        let selectedEntities = this.selectedEntities
        // if queryRef doesn't exist, create it with watchQuery observable
        // if it does, refetch with fetchQuery observable.
        // using defer() ensures functions are not called until
        // values are emitted. otherwise they'll be called on subscribe.
        return iif(
          () => this.queryRef === undefined, // predicate
          defer(() => watchQuery(str, selectedEntities)), // true
          defer(() => fetchQuery(str, selectedEntities))
        ) // false
      })
    )

    this.isLoading$ = this.response$.pipe(
      map((r) => r.loading),
      filter(isNonNulled),
      distinctUntilChanged()
    )

    this.result$ = this.response$.pipe(
      map((resp) => resp.data?.search),
      filter(isNonNulled)
    )

    this.option$ = this.result$.pipe(
      map((res) => {
        const opts: QuicksearchOption[] = []
        res.forEach((r) => {
          if (r) opts.push({ text: r.name, value: r.id.toString(), result: r })
        })
        return opts
      })
    )

    // on option select, navigate to selected entity page, clear select model
    this.onSelect$.subscribe(() => {
      if (this.selectedOpt)
        this.router.navigateByUrl(this.urlForResult(this.selectedOpt))
      this.selectNode.writeValue(undefined)
    })

    // set queryRef with watch(), return its valueChanges observable
    const watchQuery = (str: string, entities: Maybe<SearchableEntities[]>) => {
      this.queryRef = this.gql.watch({
        query: str,
        highlightMatches: true,
        types: entities,
      })
      return this.queryRef.valueChanges
    }

    // return observable from refetch() promise
    const fetchQuery = (str: string, entities: Maybe<SearchableEntities[]>) => {
      return from(this.queryRef.refetch({ query: str, types: entities }))
    }
  }

  urlForResult(res: SearchResult): string {
    let name: string
    switch (res.resultType) {
      case SearchableEntities.VariantGroup:
        name = 'variant-groups'
        break
      case SearchableEntities.EvidenceItem:
        name = 'evidence'
        break
      case SearchableEntities.MolecularProfile:
        name = 'molecular-profiles'
        break
      case SearchableEntities.Therapy:
        name = 'therapies'
        break
      default:
        name = `${res.resultType.toLowerCase()}s`
    }

    return `/${name}/${res.id}/summary`
  }

  selectedEntitiesChanged(selectedEntities: string[]) {
    this.selectedEntities = selectedEntities.map(
      (x) => SearchableEntities[x as keyof typeof SearchableEntities]
    )

    if (this.currentSearchTerm) {
      this.onSearch$.next(this.currentSearchTerm)
    }
  }

  isSelected(entity: string): boolean {
    const x = SearchableEntities[entity as keyof typeof SearchableEntities]
    return this.selectedEntities.includes(x)
  }
}

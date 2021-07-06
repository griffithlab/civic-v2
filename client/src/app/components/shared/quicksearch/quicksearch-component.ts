import { Component, OnDestroy, OnInit } from "@angular/core";
import { Maybe, QuicksearchGQL, QuicksearchQuery, QuicksearchQueryVariables, QuicksearchResultFragment, SearchableEntities, SearchResult } from "@app/generated/civic.apollo";
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from "rxjs";
import { debounceTime, groupBy, pluck } from "rxjs/operators";

@Component({
  selector: 'cvc-quicksearch',
  styleUrls: ['./quicksearch-component.less'],
  templateUrl: './quicksearch-component.html'
})
export class QuicksearchComponent implements OnInit, OnDestroy {

  searchQuery: string = ""
  searchResults$: Maybe<Observable<Maybe<QuicksearchResultFragment>[]>>

  queryRef!: QueryRef<QuicksearchQuery, QuicksearchQueryVariables>
  private debouncedQuery = new Subject<void>()

  constructor(private gql: QuicksearchGQL) {}

  ngOnInit() {
    this.queryRef = this.gql.watch({ query: this.searchQuery })
    let observable = this.queryRef.valueChanges

    this.searchResults$ = observable.pipe(pluck('data', 'search'))

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );
  }


  ngOnDestroy() {
    this.debouncedQuery.unsubscribe();
  }

  refresh() {
    this.queryRef.refetch({query: this.searchQuery})
  }
}
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Maybe, QuicksearchGQL, QuicksearchQuery, QuicksearchQueryVariables, QuicksearchResultFragment, SearchableEntities, SearchResult } from "@app/generated/civic.apollo";
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from "rxjs";
import { debounceTime, pluck } from "rxjs/operators";

@Component({
  selector: 'cvc-quicksearch',
  styleUrls: ['./quicksearch-component.less'],
  templateUrl: './quicksearch-component.html'
})
export class QuicksearchComponent implements OnInit {

  searchQuery: string = ""
  searchResults$: Maybe<Observable<Maybe<QuicksearchResultFragment>[]>>

  queryRef!: QueryRef<QuicksearchQuery, QuicksearchQueryVariables>

  constructor(private gql: QuicksearchGQL, private router: Router) {}

  ngOnInit() {
    this.queryRef = this.gql.watch({ query: this.searchQuery })
    let observable = this.queryRef.valueChanges

    this.searchResults$ = observable.pipe(pluck('data', 'search'))
  }

  refresh() {
    this.queryRef.refetch({query: this.searchQuery})
  }

  iconNameForResult(res: SearchResult): string {
    switch(res.resultType) {
      case SearchableEntities.EvidenceItem:
       return 'civic:evidence';
      case SearchableEntities.VariantGroup:
       return 'civic:variantgroup';
      default:
        return `civic:${res.resultType.toLowerCase()}`
    }
  }

  urlForResult(res: SearchResult): string {
    let name: string
    switch(res.resultType) {
      case SearchableEntities.VariantGroup:
        name = 'variant-groups';
        break;
      case SearchableEntities.EvidenceItem:
        name = 'evidence';
        break;
      default:
        name = `${res.resultType.toLowerCase()}s`
    }

    return `/${name}/${res.id}/summary`
  }

  quicksearchSelected (e: Event) {
    let value = (e.target as HTMLInputElement).value;
    this.searchQuery = ""
    this.router.navigate([value])
  }
}
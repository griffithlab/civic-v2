import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EvidenceBrowseGQL, EvidenceBrowseQuery, EvidenceBrowseQueryVariables, EvidenceGridFieldsFragment, Maybe, PageInfo } from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-evidence-browse',
  templateUrl: './evidence-browse.component.html',
  styleUrls: ['./evidence-browse.component.less'],
})
export class EvidenceBrowseComponent implements OnInit, OnDestroy {
  @Input() variantId: Maybe<number>

  private initialPageSize = 25
  private queryRef!: QueryRef<EvidenceBrowseQuery, EvidenceBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  evidence$?: Observable<Maybe<EvidenceGridFieldsFragment>[]>
  totalCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>


  //filters
  eidInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  drugNameInput: Maybe<string>
  descriptionInput: Maybe<string>

  constructor(private gql: EvidenceBrowseGQL) { }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      variantId: this.variantId
    });

    let observable = this.queryRef.valueChanges;

    this.isLoading$ = observable.pipe(
      pluck('loading'), startWith(true)
    );

    this.evidence$ = observable.pipe(
      pluck('data', 'evidenceItems', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    );

    this.totalCount$ = observable.pipe(
      pluck('data', 'evidenceItems', 'totalCount')
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'evidenceItems', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );
  }

  refresh() {
    this.queryRef.refetch({
      id: this.eidInput ? +this.eidInput : undefined,
      diseaseName: this.diseaseNameInput,
      drugName: this.drugNameInput,
      description: this.descriptionInput
    })
  }

  onModelChanged() { this.debouncedQuery.next(); }
  
  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

}

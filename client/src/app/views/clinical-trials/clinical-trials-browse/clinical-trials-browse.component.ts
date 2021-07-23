import { Component, OnDestroy } from '@angular/core';
import { Maybe, PageInfo, ClinicalTrialsBrowseGQL, ClinicalTrialsBrowseQuery, ClinicalTrialsBrowseQueryVariables, ClinicalTrialSortColumns, BrowseClinicalTrial } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/shared/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-clinical-trials-browse',
  templateUrl: './clinical-trials-browse.component.html',
  styleUrls: ['./clinical-trials-browse.component.less']
})
export class ClinicalTrialsBrowseComponent implements OnDestroy {

  private initialPageSize = 25
  private queryRef: QueryRef<ClinicalTrialsBrowseQuery, ClinicalTrialsBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  totalCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>
  clinicalTrials$?: Observable<Maybe<BrowseClinicalTrial>[]>

  nctIdFilter: Maybe<string>
  nameFilter: Maybe<string>

  textInputCallback?: () => void

  sortColumns: typeof ClinicalTrialSortColumns = ClinicalTrialSortColumns

  constructor(private gql: ClinicalTrialsBrowseGQL) {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize
    })

    let observable = this.queryRef.valueChanges

    this.clinicalTrials$ = observable.pipe(
      pluck('data', 'clinicalTrials', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    )

    this.isLoading$ = observable.pipe(
      pluck('loading'), startWith(true)
    );

    this.totalCount$ = observable.pipe(
      pluck('data', 'clinicalTrials', 'totalCount')
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'clinicalTrials', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );

    this.textInputCallback = () => { this.debouncedQuery.next(); }
   }

   onModelChanged() { this.debouncedQuery.next() }

   onSortChanged(e: SortDirectionEvent) {
     this.queryRef.refetch({
       sortBy: buildSortParams(e)
     })
   }

   refresh() {
     this.queryRef.refetch({
       name: this.nameFilter,
       nctId: this.nctIdFilter
     })
   }

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

}

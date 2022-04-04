import { Component, Input, OnDestroy, TemplateRef } from '@angular/core';
import { Maybe, PageInfo, ClinicalTrialsBrowseGQL, ClinicalTrialsBrowseQuery, ClinicalTrialsBrowseQueryVariables, ClinicalTrialSortColumns, BrowseClinicalTrial } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'cvc-clinical-trials-table',
  templateUrl: './clinical-trials-table.component.html',
  styleUrls: ['./clinical-trials-table.component.less']
})
export class CvcClinicalTrialsTableComponent {
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  initialPageSize = 25
  private queryRef: QueryRef<ClinicalTrialsBrowseQuery, ClinicalTrialsBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  filteredCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>
  clinicalTrials$?: Observable<Maybe<BrowseClinicalTrial>[]>

  totalCount?: number
  visibleCount: number = this.initialPageSize

  nctIdFilter: Maybe<string>
  nameFilter: Maybe<string>

  textInputCallback?: () => void

  sortColumns: typeof ClinicalTrialSortColumns = ClinicalTrialSortColumns

  loadedPages: number = 1

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

    this.filteredCount$ = observable.pipe(
      pluck('data', 'clinicalTrials', 'totalCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
      value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize * this.loadedPages
          if (this.totalCount && this.visibleCount > this.totalCount) {
            this.visibleCount = this.totalCount
          } 
        }
      } 
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
    this.loadedPages = 1
     this.queryRef.refetch({
       name: this.nameFilter,
       nctId: this.nctIdFilter
     })
   }

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

  loadMore(cursor: Maybe<string>) {
    this.queryRef.fetchMore({variables: {
      after: cursor
    }})

    this.loadedPages += 1
  }

}

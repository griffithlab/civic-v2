import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Maybe, PageInfo, DrugBrowseTableRowFieldsFragment, DrugsBrowseGQL, DrugsBrowseQuery, DrugsBrowseQueryVariables, DrugSortColumns } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'cvc-drugs-table',
  templateUrl: './drugs-table.component.html',
  styleUrls: ['./drugs-table.component.less']
})
export class CvcDrugsTableComponent implements OnInit {
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>
  @Input() truncateLongName: Maybe<boolean> = false

  initialPageSize = 25
  private queryRef?: QueryRef<DrugsBrowseQuery, DrugsBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  filteredCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>
  drugs$?: Observable<Maybe<DrugBrowseTableRowFieldsFragment>[]>

  ncitIdFilter: Maybe<string>
  nameFilter: Maybe<string>

  textInputCallback?: () => void

  sortColumns: typeof DrugSortColumns = DrugSortColumns

  totalCount?: number
  visibleCount: number = this.initialPageSize
  loadedPages: number = 1

  constructor(private gql: DrugsBrowseGQL) {}

  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize
    })

    let observable = this.queryRef.valueChanges

    this.drugs$ = observable.pipe(
      pluck('data', 'drugs', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    )

    this.isLoading$ = observable.pipe(
      pluck('loading'), startWith(true)
    );

    this.filteredCount$ = observable.pipe(
      pluck('data', 'drugs', 'filteredCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
      value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize * this.loadedPages
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      }
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'drugs', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );

    this.textInputCallback = () => { this.debouncedQuery.next(); }
  }

  onModelChanged() { this.debouncedQuery.next() }

  onSortChanged(e: SortDirectionEvent) {
    this.loadedPages = 1
    this.queryRef?.refetch({
      sortBy: buildSortParams(e)
    })
  }

  refresh() {
   this.loadedPages = 1
    this.queryRef?.refetch({
      name: this.nameFilter,
      ncitId: this.ncitIdFilter
    })
  }

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

  loadMore(cursor: Maybe<string>) {
    this.queryRef?.fetchMore({variables: {
      after: cursor
    }})

    this.loadedPages += 1
  }

}

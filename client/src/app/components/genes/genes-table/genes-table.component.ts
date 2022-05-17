import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { buildSortParams, SortDirectionEvent, WithName } from '@app/core/utilities/datatable-helpers';
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive';
import { BrowseGeneConnection, BrowseGenesFieldsFragment, BrowseGenesGQL, BrowseGenesQuery, BrowseGenesQueryVariables, GenesSortColumns, Maybe, PageInfo } from '@app/generated/civic.apollo';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { tag } from 'rxjs-spy/cjs/operators';
import { debounceTime, distinctUntilChanged, filter, map, pluck, skip, take, withLatestFrom } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'cvc-genes-table',
  templateUrl: './genes-table.component.html',
  styleUrls: ['./genes-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcGenesTableComponent implements OnInit {
  @Input() cvcHeight?: number
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>
  sortChange$: Subject<SortDirectionEvent>
  filterChange$: Subject<void>

  // INTERMEDIATE STREAMS
  queryRef!: QueryRef<BrowseGenesQuery, BrowseGenesQueryVariables>
  result$!: Observable<ApolloQueryResult<BrowseGenesQuery>>
  connection$!: Observable<BrowseGeneConnection>
  pageInfo$!: Observable<PageInfo>

  // PRESENTATION STREAMS
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<BrowseGenesFieldsFragment>[]>
  scrollIndex$: Subject<number>
  noMoreRows$: BehaviorSubject<boolean>

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling: boolean = false

  initialPageSize = 35
  textInputCallback?: () => void

  // filters
  diseaseInput: Maybe<string>
  drugInput: Maybe<string>
  nameInput: Maybe<string>
  aliasInput: Maybe<string>

  sortColumns: typeof GenesSortColumns = GenesSortColumns

  private debouncedQuery = new Subject<void>()
  constructor(private query: BrowseGenesGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.sortChange$ = new Subject<SortDirectionEvent>()
    this.filterChange$ = new Subject<void>()
    this.scrollIndex$ = new Subject<number>()
  }

  ngOnInit() {
    this.queryRef = this.query.watch({ first: this.initialPageSize })

    this.result$ = this.queryRef.valueChanges

    // toggles table overlay 'Loading...' spinner
    this.initialLoading$ = this.result$
      .pipe(pluck('loading'),
        distinctUntilChanged(),
        take(2));

    // toggles table header 'Loading...' tag
    this.moreLoading$ = this.result$
      .pipe(pluck('loading'),
        distinctUntilChanged(),
        skip(2))

    this.connection$ = this.result$
      .pipe(pluck('data', 'browseGenes'),
        filter(isNonNulled)) as Observable<BrowseGeneConnection>;

    this.row$ = this.connection$
      .pipe(pluck('edges'),
        filter(isNonNulled),
        map((edges) => edges.map((e) => e.node)));

    // provided to table-scroll directive for fetchMore queries
    this.pageInfo$ = this.connection$
      .pipe(pluck('pageInfo'),
        filter(isNonNulled));

    // refetch when column sort changes
    this.sortChange$
      .pipe(untilDestroyed(this))
      .subscribe((e: SortDirectionEvent) => {
        this.queryRef.refetch({ sortBy: buildSortParams(e) });
      });

    // refresh when filters change
    this.filterChange$
      .pipe(debounceTime(500),
        untilDestroyed(this))
      .subscribe(() => { this.refresh() })

    // for every onScrolled event, convert to bool & set isScrolling
    this.scrollEvent$
      .pipe(map((e: ScrollEvent) => (e === 'stop' ? false : true)),
        distinctUntilChanged(),
        untilDestroyed(this))
      .subscribe((e) => {
        this.isScrolling = e
        this.cdr.detectChanges()
      })

    // emit event from noMoreRow$ if hasNextPage false
    this.scrollEvent$
      .pipe(filter((e) => e === 'bottom'),
        withLatestFrom(this.pageInfo$),
        map(([_, pageInfo]: [ScrollEvent, PageInfo]) => pageInfo),
        untilDestroyed(this))
      .subscribe((pageInfo: PageInfo) => {
        if (!pageInfo.hasNextPage) {
          this.noMoreRows$.next(true);
          this.cdr.detectChanges()

          // need to send a followup 'false' here or else
          // ng won't interpret subsequent 'true' events as changes
          setInterval(() => this.noMoreRows$.next(false));
        }
      });
  } // ngOnInit()

  refresh() {
    this.queryRef
      .refetch({
        entrezSymbol: this.nameInput,
        geneAlias: this.aliasInput,
        diseaseName: this.diseaseInput,
        drugName: this.drugInput,
      })
      .then(() => this.scrollIndex$.next(0));

    this.cdr.detectChanges()
  }

  onModelUpdated(_: Maybe<string>) {
    this.debouncedQuery.next();
  }

  // virtual scroll helpers
  trackByIndex(_: number, data: BrowseGenesFieldsFragment): number {
    return data.id;
  }

}

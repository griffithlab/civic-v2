import { Component, Input, OnInit } from "@angular/core";
import {
  Gene,
  VariantsMenuGQL,
  Maybe,
  MenuVariantFragment,
  VariantsMenuQuery,
  VariantsMenuQueryVariables,
  VariantDisplayFilter,
  PageInfo,
  VariantMenuSortColumns,
  SortDirection,
  VariantConnection
} from "@app/generated/civic.apollo";
import { map, debounceTime, pluck, distinctUntilChanged, filter } from 'rxjs/operators'
import { Observable, Observer, Subject } from 'rxjs';
import { Apollo, QueryRef } from "apollo-angular";
import { ApolloQueryResult } from "@apollo/client/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { isNonNulled } from "rxjs-etc";
import { tag } from "rxjs-spy/cjs/operators";

@UntilDestroy()
@Component({
  selector: 'cvc-variant-menu',
  templateUrl: './variants-menu.component.html',
  styleUrls: ['./variants-menu.component.less'],
})
export class CvcVariantsMenuComponent implements OnInit {
  @Input() geneId?: number;
  @Input() geneName?: string;

  menuVariants$?: Observable<Maybe<MenuVariantFragment>[]>;
  totalVariants$?: Observable<number>;
  queryRef$!: QueryRef<VariantsMenuQuery, VariantsMenuQueryVariables>;
  pageInfo$?: Observable<PageInfo>;

  sortBy: VariantMenuSortColumns = VariantMenuSortColumns.Name
  variantNameFilter: Maybe<string>;

  private debouncedQuery = new Subject<void>()
  private result$!: Observable<ApolloQueryResult<VariantsMenuQuery>>
  connection$!: Observable<VariantConnection>
  private initialQueryVars!: VariantsMenuQueryVariables
  private pageSize = 50;


  constructor(private gql: VariantsMenuGQL) { }

  ngOnInit() {
    if (this.geneId === undefined) {
      throw new Error('Must pass a gene id into variant menu component.');
    }

    this.initialQueryVars = {
      geneId: this.geneId,
      first: this.pageSize,
    };

    this.queryRef$ = this.gql.watch(this.initialQueryVars);
    this.result$ = this.queryRef$.valueChanges;

    this.connection$ = this.result$
      .pipe(map(r => r.data?.variants),
        filter(isNonNulled)) as Observable<VariantConnection>;

    this.pageInfo$ = this.connection$
      .pipe(map(c => c.pageInfo),
        filter(isNonNulled));

    this.menuVariants$ = this.connection$
      .pipe(map(c => c.edges.map((e) => e.node),
        filter(isNonNulled)));

    this.totalVariants$ = this.connection$
      .pipe(map(c => c.totalCount));

    this.debouncedQuery
      .pipe(debounceTime(500),
        untilDestroyed(this))
      .subscribe((_) => this.refresh());
  }

  onModelUpdated() {
    this.debouncedQuery.next();
  }

  onVariantSortOrderChanged(col: VariantMenuSortColumns) {
    let dir = col == VariantMenuSortColumns.CoordinateEnd ? SortDirection.Desc : SortDirection.Asc
    this.queryRef$.refetch({
      sortBy: {
        column: col,
        direction: dir
      }
    });
  }


  refresh() {
    if (this.geneId === undefined) {
      throw new Error('Must pass a gene id into variant menu component.');
    }
    this.queryRef$.refetch({
      geneId: this.geneId,
      variantName: this.variantNameFilter,
      sortBy: {
        column: this.sortBy,
        direction: SortDirection.Asc
      }
    });
  }

  fetchMore(endCursor: string) {
    this.queryRef$.fetchMore({
      variables: {
        first: this.pageSize,
        after: endCursor,
      },
    });
  }
}

import { Component, Input, OnInit } from "@angular/core";
import {
  Gene,
  VariantsMenuGQL,
  Maybe,
  MenuVariantFragment,
  VariantsMenuQuery,
  VariantsMenuQueryVariables,
  VariantDisplayFilter,
  PageInfo
} from "@app/generated/civic.apollo";
import { map, debounceTime } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs';
import { Apollo, QueryRef } from "apollo-angular";
import { ApolloClient, ApolloQueryResult, gql } from "@apollo/client/core";

const GET_GENE = gql`
  query getGene($geneId: Int!) {
    gene(id: $geneId) {
      name
      officialName
    }
  }
`

@Component({
  selector: 'cvc-variant-menu',
  templateUrl: './variants-menu.component.html',
  styleUrls: ['./variants-menu.component.less'],
})
export class VariantsMenuComponent implements OnInit {
  @Input() geneId?: number;

  gene?: Gene;
  menuVariants$?: Observable<Maybe<MenuVariantFragment>[]>;
  queryRef$!: QueryRef<VariantsMenuQuery, VariantsMenuQueryVariables>;
  pageInfo$?: Observable<PageInfo>;

  statusFilter: VariantDisplayFilter = VariantDisplayFilter.WithAcceptedOrSubmitted;
  variantNameFilter: Maybe<string>;

  private debouncedQuery = new Subject<void>();
  private results$!: Observable<ApolloQueryResult<VariantsMenuQuery>>;
  private initialQueryVars!: VariantsMenuQueryVariables;
  private pageSize = 40;

  constructor(private gql: VariantsMenuGQL, private apollo: Apollo) { }

  ngOnInit() {
    if (this.geneId === undefined) {
      throw new Error('Must pass a gene id into variant menu component.');
    }

     this.gene = this.apollo.client.readQuery({
      query: GET_GENE,
      variables: {
        geneId: this.geneId
      }
     }).gene;

    this.initialQueryVars = {
      geneId: this.geneId,
      evidenceStatusFilter: this.statusFilter,
      first: this.pageSize,
    };

    this.queryRef$ = this.gql.watch(this.initialQueryVars);
    this.results$ = this.queryRef$.valueChanges;

    this.pageInfo$ = this.results$.pipe(
      map(({ data }) => data.variants.pageInfo)
    );

    this.menuVariants$ = this.results$.pipe(
      map(({ data }) => data.variants.edges.map((e) => e.node))
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh());
  }

  onModelUpdated() {
    this.debouncedQuery.next();
  }

  onVariantStatusFilterChanged(_: VariantDisplayFilter) {
    this.refresh();
  }

  refresh() {
    if (this.geneId === undefined) {
      throw new Error('Must pass a gene id into variant menu component.');
    }
    this.queryRef$.refetch({
      geneId: this.geneId,
      variantName: this.variantNameFilter,
      evidenceStatusFilter: this.statusFilter,
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

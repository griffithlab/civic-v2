import { Component, Input, OnInit } from "@angular/core";
import {
  Maybe,
  PageInfo,
  MenuMolecularProfileFragment,
  MolecularProfileMenuQuery,
  MolecularProfileConnection,
  MolecularProfileMenuQueryVariables,
  MolecularProfileMenuGQL,
  MolecularProfileDisplayFilter
} from "@app/generated/civic.apollo";
import { map, debounceTime, filter } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs';
import { QueryRef } from "apollo-angular";
import { ApolloQueryResult } from "@apollo/client/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { isNonNulled } from "rxjs-etc";

@UntilDestroy()
@Component({
  selector: 'cvc-molecular-profile-menu',
  templateUrl: './molecular-profiles-menu.component.html',
  styleUrls: ['./molecular-profiles-menu.component.less'],
})
export class CvcMolecularProfilesMenuComponent implements OnInit {
  @Input() geneId?: number;

  menuMolecularProfiles$?: Observable<Maybe<MenuMolecularProfileFragment>[]>;
  totalMolecularProfiles$?: Observable<number>;
  queryRef$!: QueryRef<MolecularProfileMenuQuery, MolecularProfileMenuQueryVariables>;
  pageInfo$?: Observable<PageInfo>;

  mpNameFilter: Maybe<string>;
  statusFilter: MolecularProfileDisplayFilter = MolecularProfileDisplayFilter.WithAcceptedOrSubmitted;

  private debouncedQuery = new Subject<void>()
  private result$!: Observable<ApolloQueryResult<MolecularProfileMenuQuery>>
  connection$!: Observable<MolecularProfileConnection>
  private initialQueryVars!: MolecularProfileMenuQueryVariables
  private pageSize = 50;


  constructor(private gql: MolecularProfileMenuGQL) { }

  ngOnInit() {
    if (this.geneId === undefined) {
      throw new Error('Must pass a gene id into molecular profile menu component.');
    }

    this.initialQueryVars = {
      geneId: this.geneId,
      evidenceStatusFilter: this.statusFilter,
      first: this.pageSize,
    };

    this.queryRef$ = this.gql.watch(this.initialQueryVars);
    this.result$ = this.queryRef$.valueChanges;

    this.connection$ = this.result$
      .pipe(map(r => r.data?.molecularProfiles),
        filter(isNonNulled)) as Observable<MolecularProfileConnection>;

    this.pageInfo$ = this.connection$
      .pipe(map(c => c.pageInfo),
        filter(isNonNulled));

    this.menuMolecularProfiles$ = this.connection$
      .pipe(map(c => c.edges.map((e) => e.node),
        filter(isNonNulled)));

    this.totalMolecularProfiles$ = this.connection$
      .pipe(map(c => c.totalCount));

    this.debouncedQuery
      .pipe(debounceTime(500),
        untilDestroyed(this))
      .subscribe((_) => this.refresh());
  }

  onModelUpdated() {
    this.debouncedQuery.next();
  }

  onMolecularProfileStatusFilterChanged(filter: MolecularProfileDisplayFilter) {
    this.queryRef$.refetch({
      evidenceStatusFilter: filter
    })
  }

  refresh() {
    if (this.geneId === undefined) {
      throw new Error('Must pass a gene id into molecular profile menu component.');
    }
    this.queryRef$.refetch({
      geneId: this.geneId,
      mpName: this.mpNameFilter,
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

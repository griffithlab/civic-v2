import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RevisionsGQL, RevisionsQuery, RevisionsQueryVariables, Maybe, RevisionFragment, ModeratedEntities, RevisionStatus, PageInfo, VariantDetailGQL, AssertionDetailGQL, GeneDetailGQL, EvidenceDetailGQL, VariantGroupDetailGQL, VariantSummaryGQL, VariantGroupsSummaryGQL, AssertionSummaryGQL, GenesSummaryGQL, EvidenceSummaryGQL} from '@app/generated/civic.apollo';
import { Observable, Subscription } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import { map, pluck, startWith } from 'rxjs/operators';
import { InternalRefetchQueryDescriptor } from '@apollo/client/core/types';

export interface SelectableFieldName {
  id: number
  name: string
  displayName: string
}

export interface UniqueUsers {
  id: number
  username: string
  profileImagePath?: string
}

export interface SelectableRevisionStatus {
  id: number,
  displayName: string,
  value: RevisionStatus
}

@Component({
  selector: 'cvc-revisions-list-and-filter',
  templateUrl: './revisions-list-and-filter.component.html',
  styleUrls: ['./revisions-list-and-filter.component.less']
})
export class RevisionsListAndFilterComponent implements OnDestroy, OnInit {
  @Input() id!: number
  @Input() entityType!: ModeratedEntities

  revisions$?: Observable<Maybe<RevisionFragment>[]>
  pageInfo$?: Observable<Maybe<PageInfo>>
  revisionFields$: Maybe<Observable<Maybe<SelectableFieldName[]>>>;
  uniqueRevisors$: Maybe<Observable<Maybe<UniqueUsers[]>>>
  uniqueResolvers$: Maybe<Observable<Maybe<UniqueUsers[]>>>
  unfilteredCount$: Maybe<Observable<Maybe<number>>>
  isLoading$: Maybe<Observable<boolean>>;

  filteredSet: undefined | string = undefined

  queryRef!: QueryRef<RevisionsQuery, RevisionsQueryVariables>

  routeSub?: Subscription

  selectableStatuses: SelectableRevisionStatus[] = [
    {id: 4, displayName: 'New', value: RevisionStatus.New},
    {id: 1, displayName: 'Accepted', value: RevisionStatus.Accepted},
    {id: 2, displayName: 'Rejected', value: RevisionStatus.Rejected},
    {id: 3, displayName: 'Superseded', value: RevisionStatus.Superseded},
  ]

  private defaultPageSize = 10

  refetchQueries: InternalRefetchQueryDescriptor[] = []

  constructor(
    private gql: RevisionsGQL,
    private route: ActivatedRoute,
    private variantDetailGql: VariantDetailGQL,
    private variantSummaryGql: VariantSummaryGQL,
    private variantGroupDetailGql: VariantGroupDetailGQL,
    private variantGroupSummaryGql: VariantGroupsSummaryGQL,
    private assertionDetailGql: AssertionDetailGQL,
    private assertionSummaryGql: AssertionSummaryGQL,
    private geneDetailGql: GeneDetailGQL,
    private geneSummaryGql: GenesSummaryGQL,
    private evidenceDetailGql: EvidenceDetailGQL,
    private evidenceSummaryGql: EvidenceSummaryGQL
  ) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({
        first: this.defaultPageSize,
        subject: {id: this.id, entityType: this.entityType},
        status: RevisionStatus.New
      })
      let observable = this.queryRef.valueChanges

      this.revisions$ = observable.pipe(
        pluck('data', 'revisions', 'edges'),
        map((edges) => {
          return edges.map((e) => e.node)
        })
      );

      this.isLoading$ = observable.pipe(
        map((res) =>  res.loading),
        startWith(true)
      )

      this.pageInfo$ = observable.pipe(
        pluck('data', 'revisions', 'pageInfo')
      );

      this.uniqueRevisors$ = observable.pipe(
        map(({data}) => { return data.revisions?.uniqueRevisors })
      );

      this.uniqueResolvers$ = observable.pipe(
        map(({data}) => { return data.revisions?.uniqueResolvers })
      );
  
      this.revisionFields$ = observable.pipe(
        map(({ data }) => {
          return data.revisions?.revisedFieldNames.map((f, i) => {
            return { 
              ...f,
              id: i 
            };
          });
        })
      );

      this.unfilteredCount$ = observable.pipe(
        pluck('data', 'revisions', 'unfilteredCountForSubject')
      )
    });

    switch (this.entityType) {
      case ModeratedEntities.Variant: 
        this.refetchQueries.push({
          query: this.variantDetailGql.document,
          variables: { variantId: this.id }
        })
        this.refetchQueries.push({
          query: this.variantSummaryGql.document,
          variables: { variantId: this.id }
        })
        return
      case ModeratedEntities.Assertion:
        this.refetchQueries.push({
          query: this.assertionDetailGql.document,
          variables: { assertionId: this.id }
        })
        this.refetchQueries.push({
          query: this.assertionSummaryGql.document,
          variables: { assertionId: this.id }
        })
        return
      case ModeratedEntities.EvidenceItem:
        this.refetchQueries.push({
          query: this.evidenceDetailGql.document,
          variables: { evidenceId: this.id }
        })
        this.refetchQueries.push({
          query: this.evidenceSummaryGql.document,
          variables: { evidenceId: this.id }
        })
        return
      case ModeratedEntities.Gene:
        this.refetchQueries.push({
          query: this.geneDetailGql.document,
          variables: { geneId: this.id }
        })
        this.refetchQueries.push({
          query: this.geneSummaryGql.document,
          variables: { geneId: this.id }
        })
        return
      case ModeratedEntities.VariantGroup:
        this.refetchQueries.push({
          query: this.variantGroupDetailGql.document,
          variables: { variantGroupId: this.id }
        })
        this.refetchQueries.push({
          query: this.variantGroupSummaryGql.document,
          variables: { variantGroupId: this.id }
        })
        return
    }
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  onFieldNameSelected(field: SelectableFieldName) {
    this.queryRef.refetch({
      subject: {id: this.id, entityType: this.entityType},
      fieldName: field ? field.name : undefined
    })
  }

  onRevisorSelected(user: UniqueUsers) {
    this.queryRef.refetch({
      subject: {id: this.id, entityType: this.entityType},
      originatingUserId: user ? user.id : undefined
    })
  }

  onResolverSelected(user: UniqueUsers) {
    this.queryRef.refetch({
      subject: {id: this.id, entityType: this.entityType},
      resolvingUserId: user ? user.id : undefined
    })
  }

  onStatusSelected(status: Maybe<SelectableRevisionStatus>) {
    this.queryRef.refetch({
      subject: {id: this.id, entityType: this.entityType},
      status: status ? status.value : undefined
    })
  }

  onRevisionSetSelected(revisionsetId: string) {
    this.filteredSet = revisionsetId
    this.queryRef.refetch({
      subject: {id: this.id, entityType: this.entityType},
      revisionsetId: revisionsetId ? revisionsetId : undefined
    })
  }

  onSetFilterClearClicked() {
    this.filteredSet = undefined
    this.queryRef.refetch({
      subject: {id: this.id, entityType: this.entityType},
      revisionsetId: undefined
    })
  }

  refresh() {
    this.queryRef.refetch()
  }

  loadMore(afterCursor: Maybe<string>):void {
    this.queryRef?.fetchMore({
      variables: {
        first: this.defaultPageSize,
        after: afterCursor
      },
    });
  }
}
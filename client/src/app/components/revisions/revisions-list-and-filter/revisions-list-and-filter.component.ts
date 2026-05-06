import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  RevisionsGQL,
  RevisionsQuery,
  RevisionsQueryVariables,
  Maybe,
  ModeratedEntities,
  RevisionStatus,
  PageInfo,
  VariantDetailGQL,
  AssertionDetailGQL,
  EvidenceDetailGQL,
  VariantGroupDetailGQL,
  VariantSummaryGQL,
  VariantGroupsSummaryGQL,
  AssertionSummaryGQL,
  EvidenceSummaryGQL,
  MolecularProfileDetailGQL,
  MolecularProfileSummaryGQL,
  Revision,
  FeatureDetailGQL,
  FeaturesSummaryGQL,
  ModeratedInput,
} from '@app/generated/civic.apollo'
import { Observable, Subscription } from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { map, startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { InternalRefetchQueryDescriptor } from '@apollo/client/core/types'

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
  id: number
  displayName: string
  value: RevisionStatus
}

@Component({
    selector: 'cvc-revisions-list-and-filter',
    templateUrl: './revisions-list-and-filter.component.html',
    styleUrls: ['./revisions-list-and-filter.component.less'],
    standalone: false
})
export class RevisionsListAndFilterComponent implements OnDestroy, OnInit {
  @Input() moderated!: ModeratedInput

  revisions$?: Observable<Revision[]>
  pageInfo$?: Observable<PageInfo>
  revisionFields$!: Observable<SelectableFieldName[]>
  uniqueRevisors$!: Observable<Maybe<UniqueUsers[]>>
  uniqueResolvers$!: Observable<Maybe<UniqueUsers[]>>
  unfilteredCount$!: Observable<Maybe<number>>
  isLoading$: Maybe<Observable<boolean>>

  filteredSet: undefined | number = undefined

  queryRef!: QueryRef<RevisionsQuery, RevisionsQueryVariables>

  routeSub?: Subscription
  queryParamsSub?: Subscription

  selectableStatuses: SelectableRevisionStatus[] = [
    { id: 4, displayName: 'New', value: RevisionStatus.New },
    { id: 1, displayName: 'Accepted', value: RevisionStatus.Accepted },
    { id: 2, displayName: 'Rejected', value: RevisionStatus.Rejected },
    { id: 3, displayName: 'Superseded', value: RevisionStatus.Superseded },
  ]

  preselectedRevisionStatus: Maybe<SelectableRevisionStatus> =
    this.selectableStatuses[0]

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
    private featureDetailGql: FeatureDetailGQL,
    private featureSummaryGql: FeaturesSummaryGQL,
    private evidenceDetailGql: EvidenceDetailGQL,
    private evidenceSummaryGql: EvidenceSummaryGQL,
    private molecularProfileDetailGql: MolecularProfileDetailGQL,
    private molecularProfileSummaryGql: MolecularProfileSummaryGQL
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((_) => {
      this.queryParamsSub = this.route.queryParams.subscribe((queryParams) => {
        let input: RevisionsQueryVariables = {
          first: this.defaultPageSize,
          subject: this.moderated,
          status: RevisionStatus.New,
        }

        if (queryParams.revisionSetId) {
          this.filteredSet = +queryParams.revisionSetId
          this.preselectedRevisionStatus = undefined
          input.status = undefined
          input.revisionSetId = +queryParams.revisionSetId
        }

        this.queryRef = this.gql.watch(input)
        let observable = this.queryRef.valueChanges

        this.revisions$ = observable.pipe(
          pluck('data', 'revisions', 'edges'),
          map((edges) => {
            return edges.map((e) => {
              return e.node as Revision
            })
          })
        )

        this.isLoading$ = observable.pipe(
          map((res) => res.loading),
          startWith(true)
        )

        this.pageInfo$ = observable.pipe(pluck('data', 'revisions', 'pageInfo'))

        this.uniqueRevisors$ = observable.pipe(
          map(({ data }) => {
            return data.revisions?.uniqueRevisors
          })
        )

        this.uniqueResolvers$ = observable.pipe(
          map(({ data }) => {
            return data.revisions?.uniqueResolvers
          })
        )

        this.revisionFields$ = observable.pipe(
          map(({ data }) => {
            return data.revisions?.revisedFieldNames.map((f, i) => {
              return {
                ...f,
                id: i,
              }
            })
          })
        )

        this.unfilteredCount$ = observable.pipe(
          pluck('data', 'revisions', 'unfilteredCountForSubject')
        )
      })
    })

    switch (this.moderated.entityType) {
      case ModeratedEntities.Variant:
        this.refetchQueries.push({
          query: this.variantDetailGql.document,
          variables: { variantId: this.moderated.id },
        })
        this.refetchQueries.push({
          query: this.variantSummaryGql.document,
          variables: { variantId: this.moderated.id },
        })
        return
      case ModeratedEntities.Assertion:
        this.refetchQueries.push({
          query: this.assertionDetailGql.document,
          variables: { assertionId: this.moderated.id },
        })
        this.refetchQueries.push({
          query: this.assertionSummaryGql.document,
          variables: { assertionId: this.moderated.id },
        })
        return
      case ModeratedEntities.EvidenceItem:
        this.refetchQueries.push({
          query: this.evidenceDetailGql.document,
          variables: { evidenceId: this.moderated.id },
        })
        this.refetchQueries.push({
          query: this.evidenceSummaryGql.document,
          variables: { evidenceId: this.moderated.id },
        })
        return
      case ModeratedEntities.Feature:
        this.refetchQueries.push({
          query: this.featureDetailGql.document,
          variables: { featureId: this.moderated.id },
        })
        this.refetchQueries.push({
          query: this.featureSummaryGql.document,
          variables: { featureId: this.moderated.id },
        })
        return
      case ModeratedEntities.VariantGroup:
        this.refetchQueries.push({
          query: this.variantGroupDetailGql.document,
          variables: { variantGroupId: this.moderated.id },
        })
        this.refetchQueries.push({
          query: this.variantGroupSummaryGql.document,
          variables: { variantGroupId: this.moderated.id },
        })
        return
      case ModeratedEntities.MolecularProfile:
        this.refetchQueries.push({
          query: this.molecularProfileDetailGql.document,
          variables: { molecularProfileId: this.moderated.id },
        })
        this.refetchQueries.push({
          query: this.molecularProfileSummaryGql.document,
          variables: { molecularProfileId: this.moderated.id },
        })
        return
    }
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe()
    this.queryParamsSub?.unsubscribe()
  }

  onFieldNameSelected(field: SelectableFieldName) {
    this.queryRef.refetch({
      subject: this.moderated,
      fieldName: field ? field.name : undefined,
    })
  }

  onRevisorSelected(user: UniqueUsers) {
    this.queryRef.refetch({
      subject: this.moderated,
      originatingUserId: user ? user.id : undefined,
    })
  }

  onResolverSelected(user: UniqueUsers) {
    this.queryRef.refetch({
      subject: this.moderated,
      resolvingUserId: user ? user.id : undefined,
    })
  }

  onStatusSelected(status: Maybe<SelectableRevisionStatus>) {
    this.preselectedRevisionStatus = status
    this.queryRef.refetch({
      subject: this.moderated,
      status: status ? status.value : undefined,
    })
  }

  onRevisionSetSelected(revisionSetId: number) {
    this.filteredSet = revisionSetId
    this.queryRef.refetch({
      subject: this.moderated,
      revisionSetId: revisionSetId ? revisionSetId : undefined,
    })
  }

  onSetFilterClearClicked() {
    this.filteredSet = undefined
    this.queryRef.refetch({
      subject: this.moderated,
      revisionSetId: undefined,
    })
  }

  refresh() {
    this.queryRef.refetch()
  }

  loadMore(afterCursor: Maybe<string>): void {
    this.queryRef?.fetchMore({
      variables: {
        first: this.defaultPageSize,
        after: afterCursor,
      },
    })
  }
}

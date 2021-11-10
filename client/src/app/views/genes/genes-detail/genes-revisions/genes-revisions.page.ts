import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneRevisionsGQL, GeneRevisionsQuery, GeneRevisionsQueryVariables, Maybe, Organization, RevisionFragment } from '@app/generated/civic.apollo';
import {
  GenesRevisionsService,
  SelectableFieldName,
  UniqueRevisor
} from './genes-revisions.service';
import { Observable, Subscription } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cvc-genes-revisions',
  templateUrl: './genes-revisions.page.html',
  styleUrls: ['./genes-revisions.page.less'],
  providers: [GenesRevisionsService]
})
export class GenesRevisionsPage implements OnDestroy {
  revisions$?: Maybe<Observable<Maybe<Maybe<RevisionFragment>[]>>>
  revisionFields$: Maybe<Observable<Maybe<SelectableFieldName[]>>>;
  uniqueRevisors$: Maybe<Observable<Maybe<UniqueRevisor[]>>>

  geneId!: number
  
  queryRef!: QueryRef<GeneRevisionsQuery, GeneRevisionsQueryVariables>

  routeSub: Subscription

  constructor(
    private gql: GeneRevisionsGQL,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.geneId = +params.geneId;
      this.queryRef = this.gql.watch({
        geneId: this.geneId
      })
      let observable = this.queryRef.valueChanges
      this.revisions$ = observable.pipe(
        map(({ data }) => { return data.gene?.revisions?.edges.map(e => e.node) })
      );
      this.uniqueRevisors$ = observable.pipe(
        map(({data}) => { return data.gene?.revisions?.uniqueRevisors })
      );
  
      this.revisionFields$ = observable.pipe(
        map(({ data }) => {
          return data.gene?.revisions?.revisedFieldNames.map((f, i) => {
            return { 
              ...f,
              id: i 
            };
          });
        })
      );

    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  onFieldNameSelected(field: SelectableFieldName) {
    this.queryRef.refetch({
      geneId: this.geneId,
      fieldName: field ? field.name : undefined
    })
  }

  onRevisorSelected(user: UniqueRevisor) {
    this.queryRef.refetch({
      geneId: this.geneId,
      originatingUserId: user ? user.id : undefined
    })
  }
}
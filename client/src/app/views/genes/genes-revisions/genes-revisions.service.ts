import { Injectable, OnDestroy } from '@angular/core';
import { ApolloQueryResult, ApolloError, FetchMoreQueryOptions } from '@apollo/client/core';
import {
  Maybe,
  RevisionEdge,
  GeneRevisionsGQL,
  GeneRevisionsQuery,
  GeneRevisionsQueryVariables,
  RevisionConnection,
  PageInfo
} from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { GraphQLError } from 'graphql';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, pluck, shareReplay, startWith, takeUntil, tap } from 'rxjs/operators';

// logging, debugging
import { NGXLogger } from 'ngx-logger';
import { Spy } from 'rxjs-spy/cjs/spy-interface'; // debug
import { create } from "rxjs-spy"; // debug
import { tag } from "rxjs-spy/operators/tag"; // debug

export interface SelectableFieldName {
  id: number
  name: string
  displayName: string
}

@Injectable()
export class GenesRevisionsService implements OnDestroy {
  private spy: Spy;

  queryRef!: QueryRef<GeneRevisionsQuery, GeneRevisionsQueryVariables>;
  result$!: Observable<ApolloQueryResult<GeneRevisionsQuery>>;

  revisions$: Maybe<Observable<RevisionEdge[]>>;
  revisionFields$: Maybe<Observable<Maybe<SelectableFieldName[]>>>;

  isLoading$!: Observable<boolean>;
  queryErrors$!: Observable<Maybe<ReadonlyArray<GraphQLError>>>;
  networkError$!: Observable<Maybe<ApolloError>>;

  pageInfo$!: Observable<PageInfo>;
  pageInfo!: PageInfo;

  private pageInfoSubject$!: BehaviorSubject<PageInfo>;
  private initialFirst =  50;
  private fetchMoreSize = 10;
  private destroy$ = new Subject();

  constructor(private gql: GeneRevisionsGQL, private log: NGXLogger) {
    this.spy = create(); // debug
  }

  watch(vars: GeneRevisionsQueryVariables): QueryRef<GeneRevisionsQuery, GeneRevisionsQueryVariables> {
    const initialQueryVars: GeneRevisionsQueryVariables = {
      geneId: vars.geneId,
      // last: vars.last ? vars.last : this.initialLast,
      first: vars.first ? vars.first : this.initialFirst,
      before: vars.before ? vars.before : undefined,
      after: vars.after? vars.after: undefined
    }

    this.queryRef = this.gql.watch(initialQueryVars);
    this.result$ = this.queryRef.valueChanges;

    this.isLoading$ = this.result$
      .pipe(pluck('loading'), startWith(true));

    this.pageInfo$ = this.result$
      .pipe(pluck('data', 'gene', 'revisions', 'pageInfo'));

    // provide static local pageInfo
    this.pageInfo$
      .pipe(takeUntil(this.destroy$), shareReplay(1))
      .subscribe((info: PageInfo) => { this.pageInfo = info; });

    this.queryErrors$ = this.result$
      .pipe(pluck('errors'));

    this.networkError$ = this.result$
      .pipe(pluck('error'));

    this.spy.log('revisions$'); // debug
    //TODO This cast is not safe - it will blow up if revisions is empty. 
    this.revisions$ = this.result$
      .pipe(
        map(({ data }) => { return data.gene?.revisions.edges as RevisionEdge[]  }),
        shareReplay(1));

    
    this.revisionFields$ = this.result$.pipe(
      map(({ data }) => {
        return data.gene?.revisedFieldNames.map((f, i) => {
          return { 
           ...f,
           id: i 
           };
        });
      }),
      shareReplay(1)
    );

    this.revisions$.pipe(takeUntil(this.destroy$),tag('revisions$')).subscribe(); // debug

    return this.queryRef;
  }

  fieldNameSelected(field: Maybe<SelectableFieldName>) {
    let oldVars = this.queryRef.variables
    this.queryRef.refetch({
      geneId: 5,
      first: this.initialFirst,
      fieldName: field?.name
    })
  }

  fetchMore(): void {
    this.queryRef.fetchMore({
      variables: <GeneRevisionsQueryVariables>{
        last: this.fetchMoreSize,
        before: this.pageInfo.startCursor
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.spy.teardown();
  }
}

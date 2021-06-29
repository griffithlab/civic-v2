import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maybe, AssertionDetailFieldsFragment, AssertionDetailGQL, AssertionDetailQueryVariables } from "@app/generated/civic.apollo";
import { Viewer, ViewerService } from "@app/shared/services/viewer/viewer.service";
import { QueryRef } from "apollo-angular";
import {
    AssertionDetailQuery
  } from '@app/generated/civic.apollo'
import { pluck, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
    selector: 'assertions-detail',
    templateUrl: './assertions-detail.component.html',
    styleUrls: ['./assertions-detail.component.less']
})

export class AssertionsDetailComponent {
    queryRef: QueryRef<AssertionDetailQuery, AssertionDetailQueryVariables>;

    assertion$: Observable<Maybe<AssertionDetailFieldsFragment>>;
    loading$: Observable<boolean>;
    commentsTotal$: Observable<number>;
    flagsTotal$: Observable<number>;
    revisionsTotal$: Observable<number>;
    viewer$: Observable<Viewer>;

    constructor(private gql: AssertionDetailGQL, private viewerService: ViewerService, private route: ActivatedRoute) {

        const assertionId: number = +this.route.snapshot.params['assertionId'];

        this.queryRef = this.gql.watch({assertionId: assertionId});

        let observable = this.queryRef.valueChanges

        this.loading$ = observable.pipe(
            pluck('loading'),
            startWith(true));
      
        this.assertion$ = observable.pipe(
        pluck('data', 'assertion'));
    
        this.commentsTotal$ = this.assertion$.pipe(
        pluck('comments', 'totalCount'));
    
        this.flagsTotal$ = this.assertion$.pipe(
        pluck('flags', 'totalCount'));
    
        this.revisionsTotal$ = this.assertion$.pipe(
        pluck('revisions', 'totalCount'));
    
        this.viewer$ = this.viewerService.viewer$;
    }
}
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map} from 'rxjs/operators';

import {
  SubscribableEntities,
  SubscribableInput,
  GenesSummaryGQL,
  GeneSummaryFieldsFragment,
  Maybe, 
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'cvc-genes-summary',
  templateUrl: './genes-summary.component.html',
  styleUrls: ['./genes-summary.component.less']
})
export class GenesSummaryComponent {
  gene$: Observable<Maybe<GeneSummaryFieldsFragment>>;
  loading$: Observable<boolean>
  myGeneInfo$: Observable<any>;
  viewer$: Observable<Viewer>;

  subscribableEntity: SubscribableInput 

  constructor(private gql: GenesSummaryGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute) {

    this.viewer$ = this.viewerService.viewer$;
    const geneId: number = +this.route.snapshot.params['geneId'];

    this.subscribableEntity = {
      id: geneId,
      entityType: SubscribableEntities.Gene
    }

    let observable = this.gql.watch({geneId: geneId}).valueChanges
    
    this.gene$ = observable.pipe(pluck('data', 'gene'));
    this.loading$ = observable.pipe(pluck('loading'));

    this.myGeneInfo$ = this.gene$.pipe(
      pluck('myGeneInfoDetails'),
      map(info => JSON.parse(String(info))));
  }
}

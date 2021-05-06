import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map, tap, withLatestFrom, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import {
  CommentableInput,
  CommentableEntities,
  Gene,
  Revision,
  RevisionEdge,
  Maybe,
  GeneRevisionsQueryVariables
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';
import { GenesRevisionsService } from './genes-revisions.service';

@Component({
  selector: 'cvc-genes-revisions',
  templateUrl: './genes-revisions.component.html',
  styleUrls: ['./genes-revisions.component.less'],
  providers: [GenesRevisionsService]
})
export class GenesRevisionsComponent implements OnInit {
  service: GenesRevisionsService;

  constructor(
    private genesRevisionsService: GenesRevisionsService,
    private route: ActivatedRoute) {

    const geneId: number = +this.route.snapshot.params['geneId'];
    this.service = genesRevisionsService;
    this.service.watch(<GeneRevisionsQueryVariables>{ geneId: geneId});
  }

  ngOnInit(): void {
  }
}

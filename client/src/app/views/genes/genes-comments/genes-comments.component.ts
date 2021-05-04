import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

import { GenesCommentsService } from './genes-comments.service';

import {
  CommentableInput,
  CommentableEntities,
  Gene,
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'cvc-genes-comments',
  templateUrl: './genes-comments.component.html',
  styleUrls: ['./genes-comments.component.less'],
  providers: [GenesCommentsService]
})
export class GenesCommentsComponent implements OnInit {
  service: GenesCommentsService;

  constructor(
    private genesCommentsService: GenesCommentsService,
    private route: ActivatedRoute
  ) {
    const geneId: number = +this.route.snapshot.params['geneId'];
    this.service = genesCommentsService;
    this.service.subject = {
      id: geneId,
      entityType: CommentableEntities['Gene']
    };
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck} from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { GenesDetailService } from './genes.detail.service';
import { Gene } from '@app/generated/civic.apollo';

@Component({
  selector: 'genes-detail',
  templateUrl: './genes-detail.component.html',
  styleUrls: ['./genes-detail.component.less']
})
export class GenesDetailComponent implements OnInit {
  gene$: Observable<any> | undefined;

  constructor(private api: GenesDetailService,
              private route: ActivatedRoute,
              private logger: NGXLogger) {

    this.route.params.subscribe(params => {
      const geneId: string = params['geneId'];
      const source$: Observable<any> = this.api.watchGeneDetail(geneId);
      this.gene$ = source$.pipe(pluck('data', 'gene'));
    });
  }

  ngOnInit(): void {
    this.logger.trace("GenesDetailComponent initialized.");
  }

}

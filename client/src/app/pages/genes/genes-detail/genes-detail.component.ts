import { Component, OnInit } from '@angular/core';
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
  gene$: Observable<any>;

  constructor(private api: GenesDetailService,
              private logger: NGXLogger) {

    const source$: Observable<any> = this.api.watchGeneDetail();
    this.gene$ = source$.pipe(pluck('data', 'gene'));
  }

  ngOnInit(): void {
    this.logger.trace("GenesDetailComponent initialized.");
  }

}

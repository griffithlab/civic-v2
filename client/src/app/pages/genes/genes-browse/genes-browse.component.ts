import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck} from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { GenesBrowseService } from './genes.browse.service';
import { Gene,
         GenesSortColumns,
         SortDirection,
         PageInfo
       } from '@app/generated/civic.apollo';

@Component({
  selector: 'genes-browse',
  templateUrl: './genes-browse.component.html',
  styleUrls: ['./genes-browse.component.less']
})
export class GenesBrowseComponent implements OnInit {
  pageInfo$: Observable<any>;
  genes$: Observable<any>;

  constructor(private api: GenesBrowseService,
              private logger: NGXLogger) {

    const source$: Observable<any> = this.api.watchGenesBrowse();
    this.genes$ = source$.pipe(pluck('data', 'browseGenes', 'nodes'));
    this.pageInfo$ = source$.pipe(pluck('data', 'browseGenes', 'pageInfo'));

  }

  ngOnInit(): void {
    this.logger.trace("GenesBrowseComponent initialized.");
  }

}

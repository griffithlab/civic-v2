import { Component, OnInit, OnDestroy } from '@angular/core';
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
  selector: 'app-genes',
  templateUrl: './genes.component.html',
  styleUrls: ['./genes.component.less']
})
export class GenesComponent implements OnInit {
  pageInfo$: Observable<PageInfo>;
  genes$: Observable<Gene[]>;

  constructor(private api: GenesBrowseService,
              private logger: NGXLogger) {

    const source$: Observable<any> = this.api.watchGenesBrowse();

    this.pageInfo$ = source$.pipe(pluck('data', 'genes', 'pageInfo'));
    this.genes$ = source$.pipe(pluck('data', 'genes', 'nodes'));
  }

  ngOnInit(): void {
    this.logger.trace("GenesComponent initialized.");
  }

}

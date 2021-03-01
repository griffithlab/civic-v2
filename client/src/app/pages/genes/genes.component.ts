import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck} from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { NzIconService } from 'ng-zorro-antd/icon';

import { GenesBrowseService } from './genes.browse.service';
import { Gene,
         GenesSortColumns,
         SortDirection,
         PageInfo
       } from '@app/generated/civic.apollo';

// TODO: import and add icons at root so available everywhere
import { iconGene,
         iconVariant,
         iconVariantGroup,
         iconEvidence,
         iconAssertion,
         iconSource,
         iconDrug,
         iconDisease } from '@app/generated/civic.icons';

@Component({
  selector: 'app-genes',
  templateUrl: './genes.component.html',
  styleUrls: ['./genes.component.less']
})
export class GenesComponent implements OnInit {
  pageInfo$: Observable<any>;
  genes$: Observable<any>;

  constructor(private api: GenesBrowseService,
              private iconService: NzIconService,
              private logger: NGXLogger) {
    const source$: Observable<any> = this.api.watchGenesBrowse();

    this.pageInfo$ = source$.pipe(pluck('data', 'genes', 'pageInfo'));
    this.genes$ = source$.pipe(pluck('data', 'genes', 'nodes'));

    this.iconService.addIconLiteral('civic:gene', iconGene.data);
    this.iconService.addIconLiteral('civic:variant', iconVariant.data);
    this.iconService.addIconLiteral('civic:variant-group', iconVariantGroup.data);
    this.iconService.addIconLiteral('civic:evidence', iconEvidence.data);
    this.iconService.addIconLiteral('civic:assertion', iconAssertion.data);
    this.iconService.addIconLiteral('civic:source', iconSource.data);
    this.iconService.addIconLiteral('civic:drug', iconDrug.data);
    this.iconService.addIconLiteral('civic:disease', iconDisease.data);

  }

  ngOnInit(): void {
    this.logger.trace("GenesComponent initialized.");
  }

}

import { Component, OnInit } from '@angular/core';
import { NGXLogger } from "ngx-logger";

import { NzIconService } from 'ng-zorro-antd/icon';

// TODO: import and add icons at app root so available everywhere
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

  constructor(private iconService: NzIconService,
              private logger: NGXLogger) {

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

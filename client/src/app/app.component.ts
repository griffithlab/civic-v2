import { NzIconService } from 'ng-zorro-antd/icon';

import { iconGene,
         iconVariant,
         iconVariantGroup,
         iconEvidence,
         iconAssertion,
         iconSource,
         iconDrug,
         iconDisease } from '@app/generated/civic.icons';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  isCollapsed = false;
  title = 'main'
  constructor(private iconService:NzIconService) {
    this.iconService.addIconLiteral('civic:gene', iconGene.data);
    this.iconService.addIconLiteral('civic:variant', iconVariant.data);
    this.iconService.addIconLiteral('civic:variant-group', iconVariantGroup.data);
    this.iconService.addIconLiteral('civic:evidence', iconEvidence.data);
    this.iconService.addIconLiteral('civic:assertion', iconAssertion.data);
    this.iconService.addIconLiteral('civic:source', iconSource.data);
    this.iconService.addIconLiteral('civic:drug', iconDrug.data);
    this.iconService.addIconLiteral('civic:disease', iconDisease.data);
  }
}

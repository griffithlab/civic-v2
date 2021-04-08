import { NzIconService } from 'ng-zorro-antd/icon';

// TODO: import and add icons at root so available everywhere
import {
  iconGene,
  iconVariant,
  iconVariantGroup,
  iconEvidence,
  iconAssertion,
  iconSource,
  iconDrug,
  iconDisease,
  iconCurator,
  iconEditor,
  iconAdmin,
  iconOrganization,
  iconRevision,
  iconSuggestedRevision,
  iconEvent,
  iconEventLog
} from '@app/generated/civic.icons';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  isCollapsed = false;
  title = 'main'
  constructor(private iconService: NzIconService) {
    this.addIcons();
  }

  private addIcons(): void {
    this.iconService.addIconLiteral('civic:gene', iconGene.data);
    this.iconService.addIconLiteral('civic:variant', iconVariant.data);
    this.iconService.addIconLiteral('civic:variant-group', iconVariantGroup.data);
    this.iconService.addIconLiteral('civic:evidence', iconEvidence.data);
    this.iconService.addIconLiteral('civic:assertion', iconAssertion.data);
    this.iconService.addIconLiteral('civic:source', iconSource.data);
    this.iconService.addIconLiteral('civic:drug', iconDrug.data);
    this.iconService.addIconLiteral('civic:disease', iconDisease.data);
    this.iconService.addIconLiteral('civic:curator', iconCurator.data);
    this.iconService.addIconLiteral('civic:admin', iconAdmin.data);
    this.iconService.addIconLiteral('civic:editor', iconEditor.data);
    this.iconService.addIconLiteral('civic:organization', iconOrganization.data);
    this.iconService.addIconLiteral('civic:revision', iconRevision.data);
    this.iconService.addIconLiteral('civic:suggested-revision', iconSuggestedRevision.data);
    this.iconService.addIconLiteral('civic:event', iconEvent.data);
    this.iconService.addIconLiteral('civic:event-log', iconEventLog.data);
  }
}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { NzIconService } from 'ng-zorro-antd/icon';

import { User } from '@app/generated/civic.apollo';
import { ViewerService } from '@app/shared/services/viewer/viewer.service';

import { NGXLogger } from 'ngx-logger';

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


@Component({
  selector: 'cvc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  isCollapsed = false;
  data$!: Observable<any>;
  viewer$!: Observable<User>;
  signedIn$!: Observable<boolean>;
  signedOut$!: Observable<boolean>;
  canCurate$!: Observable<boolean>;
  canModerate$!: Observable<boolean>;

  constructor(
    private logger: NGXLogger,
    private iconService: NzIconService,
    private viewerService: ViewerService,
  ) {
    this.addIcons();

  }

  ngOnInit(): void {
    this.data$ = this.viewerService.data$;
    this.viewer$ = this.viewerService.viewer$;
    this.signedIn$ = this.viewerService.signedIn$;
    this.signedOut$ = this.viewerService.signedOut$;
    this.canCurate$ = this.viewerService.canCurate$;
    this.canModerate$ = this.viewerService.canModerate$;
  }

  // TODO: create a icon service or module that loads all the custom icons
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

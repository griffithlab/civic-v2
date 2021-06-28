import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { NzIconService } from 'ng-zorro-antd/icon';

import { User } from '@app/generated/civic.apollo';
import { ViewerService } from '@app/shared/services/viewer/viewer.service';

import { NGXLogger } from 'ngx-logger';

import {
  civicAdminOutline,
  civicAssertionOutline,
  civicCommentOutline,
  civicCuratorOutline,
  civicDiseaseOutline,
  civicEditorOutline,
  civicEvidenceOutline,
  civicFlagOutline,
  civicGeneOutline,
  civicInterventionOutline,
  civicOrganizationOutline,
  civicRevisionOutline,
  civicSourceOutline,
  civicVariantOutline,
  civicVariantGroupOutline,
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
    this.iconService.addIconLiteral('civic:admin', civicAdminOutline.data);
    this.iconService.addIconLiteral('civic:assertion', civicAssertionOutline.data);
    this.iconService.addIconLiteral('civic:comment', civicCommentOutline.data);
    this.iconService.addIconLiteral('civic:curator', civicCuratorOutline.data);
    this.iconService.addIconLiteral('civic:disease', civicDiseaseOutline.data);
    this.iconService.addIconLiteral('civic:editor', civicEditorOutline.data);
    this.iconService.addIconLiteral('civic:evidence', civicEvidenceOutline.data);
    this.iconService.addIconLiteral('civic:gene', civicGeneOutline.data);
    this.iconService.addIconLiteral('civic:drug', civicInterventionOutline.data);
    this.iconService.addIconLiteral('civic:organization', civicOrganizationOutline.data);
    this.iconService.addIconLiteral('civic:revision', civicRevisionOutline.data);
    this.iconService.addIconLiteral('civic:source', civicSourceOutline.data);
    this.iconService.addIconLiteral('civic:variant', civicVariantOutline.data);
    this.iconService.addIconLiteral('civic:variant-group', civicVariantGroupOutline.data);
  }

}

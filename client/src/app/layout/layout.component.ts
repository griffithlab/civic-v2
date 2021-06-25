import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { NzIconService } from 'ng-zorro-antd/icon';

import { User } from '@app/generated/civic.apollo';
import { ViewerService } from '@app/shared/services/viewer/viewer.service';

import { NGXLogger } from 'ngx-logger';

import {
  iconAdminOutline,
  iconAssertionOutline,
  iconCommentOutline,
  iconCuratorOutline,
  iconDiseaseOutline,
  iconEditorOutline,
  iconEvidenceOutline,
  iconFlagOutline,
  iconGeneOutline,
  iconInterventionOutline,
  iconOrganizationOutline,
  iconRevisionOutline,
  iconSourceOutline,
  iconVariantOutline,
  iconVariantGroupOutline,
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
    this.iconService.addIconLiteral('civic:admin', iconAdminOutline.data);
    this.iconService.addIconLiteral('civic:assertion', iconAssertionOutline.data);
    this.iconService.addIconLiteral('civic:comment', iconCommentOutline.data);
    this.iconService.addIconLiteral('civic:curator', iconCuratorOutline.data);
    this.iconService.addIconLiteral('civic:disease', iconDiseaseOutline.data);
    this.iconService.addIconLiteral('civic:editor', iconEditorOutline.data);
    this.iconService.addIconLiteral('civic:evidence', iconEvidenceOutline.data);
    this.iconService.addIconLiteral('civic:gene', iconGeneOutline.data);
    this.iconService.addIconLiteral('civic:drug', iconInterventionOutline.data);
    this.iconService.addIconLiteral('civic:organization', iconOrganizationOutline.data);
    this.iconService.addIconLiteral('civic:revision', iconRevisionOutline.data);
    this.iconService.addIconLiteral('civic:source', iconSourceOutline.data);
    this.iconService.addIconLiteral('civic:variant', iconVariantOutline.data);
    this.iconService.addIconLiteral('civic:variant-group', iconVariantGroupOutline.data);
  }

}

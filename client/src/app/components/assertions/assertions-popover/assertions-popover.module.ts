import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcAssertionPopoverComponent } from './assertion-popover.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { RouterModule } from '@angular/router'
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcEntityChildCounts } from '@app/components/shared/entity-child-counts.component/entity-child-counts.component.component'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcAttributeTagModule } from '@app/components/shared/attribute-tag/attribute-tag.module'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { NzFlexModule } from 'ng-zorro-antd/flex'
import { NzAlertComponent, NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'

@NgModule({
  declarations: [CvcAssertionPopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    NzGridModule,
    NzSpaceModule,
    NzFlexModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    NzAlertModule,
    CvcDiseaseTagModule,
    CvcMolecularProfileTagNameModule,
    CvcMolecularProfileTagModule,
    CvcPhenotypeTagModule,
    CvcTherapyTagModule,
    CvcPipesModule,
    CvcTagListModule,
    CvcStatusTagModule,
    CvcEntityChildCounts,
    CvcEmptyValueModule,
    CvcAttributeTagModule,
    CvcOrganizationTagModule,
    NzAlertComponent,
    CvcOrganizationTagModule,
  ],
  exports: [CvcAssertionPopoverComponent],
})
export class CvcAssertionsPopoverModule {}

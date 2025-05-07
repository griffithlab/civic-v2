import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionsSummaryPage } from './assertions-summary.page'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcAttributeTagModule } from '@app/components/shared/attribute-tag/attribute-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { RouterModule } from '@angular/router'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcEndorsementNotificationComponent } from '@app/components/endorsements/endorsement-notification/endorsement-notification.component'

@NgModule({
  declarations: [AssertionsSummaryPage],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    RouterModule,
    NzGridModule,
    NzSpaceModule,
    NzGridModule,
    NzTypographyModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    NzDescriptionsModule,
    NzToolTipModule,
    NzPopoverModule,
    NzAvatarModule,
    NzCardModule,
    NzAlertModule,
    CvcEmptyValueModule,
    CvcPipesModule,
    CvcStatusTagModule,
    CvcUserTagModule,
    CvcTagListModule,
    CvcTherapyTagModule,
    CvcEvidenceTableModule,
    CvcDiseaseTagModule,
    CvcPhenotypeTagModule,
    CvcAttributeTagModule,
    CvcMolecularProfileTagModule,
    CvcMolecularProfileTagNameModule,
    CvcCommentBodyModule,
    CvcOrganizationTagModule,
    CvcEndorsementNotificationComponent,
  ],
  exports: [AssertionsSummaryPage],
})
export class AssertionsSummaryModule {}

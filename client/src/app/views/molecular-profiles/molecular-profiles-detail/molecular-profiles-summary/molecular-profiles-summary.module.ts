import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module'
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { MolecularProfilesSummaryPage } from './molecular-profiles-summary.page'
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { CvcMolecularProfileGeneVariantCardModule } from '@app/components/molecular-profiles/molecular-profile-gene-variant-card/molecular-profile-gene-variant-card.module'
import { CvcMolecularProfileFactorVariantCardComponent } from '@app/components/molecular-profiles/molecular-profile-factor-variant-card/molecular-profile-factor-variant-card.component'
import { CvcMolecularProfileFusionVariantCardModule } from '@app/components/molecular-profiles/molecular-profile-fusion-variant-card/molecular-profile-fusion-variant-card.module'

@NgModule({
  declarations: [MolecularProfilesSummaryPage],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzSpaceModule,
    NzGridModule,
    NzDescriptionsModule,
    NzCardModule,
    NzTypographyModule,
    NzIconModule,
    NzTagModule,
    CvcEmptyValueModule,
    CvcPipesModule,
    CvcEvidenceTableModule,
    CvcAssertionsTableModule,
    CvcTagListModule,
    CvcUserTagModule,
    CvcSourceTagModule,
    CvcVariantTypeTagModule,
    CvcLinkTagModule,
    CvcEmptyRevisableModule,
    CvcMolecularProfileTagNameModule,
    CvcMolecularProfileGeneVariantCardModule,
    CvcMolecularProfileFactorVariantCardComponent,
    CvcMolecularProfileFusionVariantCardModule,
  ],
  exports: [MolecularProfilesSummaryPage],
})
export class MolecularProfilesSummaryModule {}

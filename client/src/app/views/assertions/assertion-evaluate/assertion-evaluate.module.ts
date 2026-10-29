import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { AssertionEvaluateView } from './assertion-evaluate.view'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcSpecificationSubmitFormModule } from '@app/forms/config/specification-submit/specification-submit.form.module'
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module'

@NgModule({
  declarations: [AssertionEvaluateView],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzSpaceModule,
    NzGridModule,
    NzTypographyModule,
    CvcSectionNavigationModule,
    CvcPipesModule,
    CvcMolecularProfileTagModule,
    CvcSpecificationSubmitFormModule,
    CvcLoginPromptModule,
  ],
})
export class AssertionEvaluateModule {}

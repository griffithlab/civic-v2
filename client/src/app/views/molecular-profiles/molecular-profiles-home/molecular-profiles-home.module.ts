import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MolecularProfilesHomePage } from './molecular-profiles-home.page'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { VariantSubmitFormModule } from '@app/forms/config/variant-submit/variant-submit.module'
import { CvcMolecularProfilesTableModule } from '@app/components/molecular-profiles/molecular-profile-table/molecular-profile-table.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [MolecularProfilesHomePage],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    NzTypographyModule,
    NzButtonModule,
    NzSpaceModule,
    NzPopoverModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcMolecularProfilesTableModule,
    CvcAutoHeightDivModule,
    CvcSectionNavigationModule,
    VariantSubmitFormModule,
  ],
  exports: [MolecularProfilesHomePage],
})
export class MolecularProfilesHomeModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EvidenceHomePage } from './evidence-home.page'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzSwitchModule } from 'ng-zorro-antd/switch'
import { RouterModule } from '@angular/router'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [EvidenceHomePage],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzSwitchModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    NzSpaceModule,
    NzTypographyModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcEvidenceTableModule,
  ],
  exports: [EvidenceHomePage],
})
export class EvidenceHomeModule {}

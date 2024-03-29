import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcClinicalTrialsTableModule } from '@app/components/clinical-trials/clinical-trials-table/clinical-trials-table.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { ClinicalTrialsHomePage } from './clinical-trials-home.page'

@NgModule({
  declarations: [ClinicalTrialsHomePage],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,

    NzGridModule,
    NzPageHeaderModule,
    NzIconModule,
    NzButtonModule,
    NzTypographyModule,
    NzSpaceModule,

    CvcClinicalTrialsTableModule,
    CvcSectionNavigationModule,
    CvcPipesModule,
  ],
  exports: [ClinicalTrialsHomePage],
})
export class ClinicalTrialsHomeModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeaturesSuggestPage } from './features-suggest.page'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzCardModule } from 'ng-zorro-antd/card'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcGeneReviseFormModule } from '@app/forms/config/gene-revise/gene-revise.form.module'
import { CvcFactorReviseForm } from '@app/forms/config/factor-revise/factor-revise.form'
import { CvcFusionReviseForm } from '@app/forms/config/fusion-revise/fusion-revise.form'

@NgModule({
  declarations: [FeaturesSuggestPage],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzGridModule,
    NzSpaceModule,
    NzSkeletonModule,
    NzPageHeaderModule,
    CvcGeneReviseFormModule,
    CvcSectionNavigationModule,
    CvcFactorReviseForm,
    CvcFusionReviseForm
  ],
})
export class FeaturesSuggestModule {}

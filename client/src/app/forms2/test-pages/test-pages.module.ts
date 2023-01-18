import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TestPagesRoutingModule } from './test-pages-routing.module'
import { TestPagesView } from './test-pages.view'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { EvidenceSubmitTestModule } from './evidence-submit-test/evidence-submit-test.module'
import { EvidenceReviseTestModule } from './evidence-revise-test/evidence-revise-test.module'
import { AssertionSubmitTestModule } from './assertion-submit-test/assertion-submit-test.module'
import { AssertionReviseTestModule } from './assertion-revise-test/assertion-revise-test.module'
import { HorizontalFormTestModule } from './horizontal-form/horizontal-form.module'
import { InlineFormTestModule } from './inline-form/inline-form.module'
import { VerticalFormTestModule } from './vertical-form/vertical-form.module'
import { IconsTestModule } from './icons-test/icons-test.module'
import { NzTabsModule } from 'ng-zorro-antd/tabs'

@NgModule({
  declarations: [TestPagesView],
  imports: [
    CommonModule,
    TestPagesRoutingModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    NzTypographyModule,
    NzTabsModule,
    EvidenceSubmitTestModule,
    EvidenceReviseTestModule,
    AssertionSubmitTestModule,
    AssertionReviseTestModule,
    HorizontalFormTestModule,
    InlineFormTestModule,
    VerticalFormTestModule,
    IconsTestModule,
    CvcPipesModule,
    CvcTabNavigationModule,
    CvcSectionNavigationModule,
  ],
  exports: [TestPagesView],
})
export class TestPagesModule {}

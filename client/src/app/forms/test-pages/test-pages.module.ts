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
import { HorizontalFormTestModule } from './layout-tests/horizontal-form/horizontal-form.module'
import { InlineFormTestModule } from './layout-tests/inline-form/inline-form.module'
import { VerticalFormTestModule } from './layout-tests/vertical-form/vertical-form.module'
import { TagsTestModule } from './tags-test/tags-test.module'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { VariantgroupReviseTestModule } from './variantgroup-revise-test/variantgroup-revise-test.module'
import { GeneReviseTestModule } from './gene-revise-test/gene-revise-test.module'
import { MolecularProfileReviseTestModule } from './molecular-profile-revise-test/molecular-profile-revise-test.module'
import { VariantReviseTestModule } from './variant-revise-test/variant-revise-test.module'
import { VariantSubmitTestModule } from './variant-submit-test/variant-submit-test.module'

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
    CvcPipesModule,
    CvcTabNavigationModule,
    CvcSectionNavigationModule,
    AssertionReviseTestModule,
    AssertionSubmitTestModule,
    EvidenceReviseTestModule,
    EvidenceSubmitTestModule,
    GeneReviseTestModule,
    HorizontalFormTestModule,
    InlineFormTestModule,
    MolecularProfileReviseTestModule,
    TagsTestModule,
    VariantReviseTestModule,
    VariantSubmitTestModule,
    VariantgroupReviseTestModule,
    VerticalFormTestModule,
  ],
  exports: [TestPagesView],
})
export class TestPagesModule {}

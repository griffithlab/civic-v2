import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AssertionReviseTestPage } from './assertion-revise-test/assertion-revise-test.page'
import { AssertionSubmitTestPage } from './assertion-submit-test/assertion-submit-test.page'
import { EvidenceReviseTestPage } from './evidence-revise-test/evidence-revise-test.page'
import { EvidenceSubmitTestPage } from './evidence-submit-test/evidence-submit-test.page'
import { HorizontalFormPage } from './layout-tests/horizontal-form/horizontal-form.page'
import { TagsTestPage } from './tags-test/tags-test.page'
import { InlineFormPage } from './layout-tests/inline-form/inline-form.page'
import { VerticalFormPage } from './layout-tests/vertical-form/vertical-form.page'
import { TestPagesView } from './test-pages.view'

import { VariantgroupReviseTestPage } from './variantgroup-revise-test/variantgroup-revise-test.page'
import { GeneReviseTestPage } from './gene-revise-test/gene-revise-test.page'
import { MolecularProfileReviseTestPage } from './molecular-profile-revise-test/molecular-profile-revise-test.page'
import { VariantReviseTestPage } from './variant-revise-test/variant-revise-test.page'
import { VariantSubmitTestPage } from './variant-submit-test/variant-submit-test.page'

const routes: Routes = [
  {
    path: '',
    component: TestPagesView,
    children: [
      { path: '', redirectTo: 'evidence-submit-test', pathMatch: 'full' },
      {
        path: 'evidence-submit-test',
        component: EvidenceSubmitTestPage,
        data: {
          breadcrumb: 'Evidence Submit Form',
        },
      },
      {
        path: 'evidence-revise-test',
        component: EvidenceReviseTestPage,
        data: {
          breadcrumb: 'Evidence Revise Form',
        },
      },
      {
        path: 'assertion-submit-test',
        component: AssertionSubmitTestPage,
        data: {
          breadcrumb: 'Assertion Submit Form',
        },
      },
      {
        path: 'assertion-revise-test',
        component: AssertionReviseTestPage,
        data: {
          breadcrumb: 'Assertion Revise Form',
        },
      },
      {
        path: 'variantgroup-revise-test',
        component: VariantgroupReviseTestPage,
        data: {
          breadcrumb: 'Variant Group Revise Form',
        },
      },
      {
        path: 'gene-revise-test',
        component: GeneReviseTestPage,
        data: {
          breadcrumb: 'Gene Revise Form',
        },
      },
      {
        path: 'mp-revise-test',
        component: MolecularProfileReviseTestPage,
        data: {
          breadcrumb: 'MP Revise Form',
        },
      },
      {
        path: 'variant-submit-test',
        component: VariantSubmitTestPage,
        data: {
          breadcrumb: 'Variant Submit Form',
        },
      },
      {
        path: 'variant-revise-test',
        component: VariantReviseTestPage,
        data: {
          breadcrumb: 'Variant Revise Form',
        },
      },
      {
        path: 'vertical-form',
        component: VerticalFormPage,
        data: {
          breadcrumb: 'Vertical Layout Test',
        },
      },
      {
        path: 'inline-form',
        component: InlineFormPage,
        data: {
          breadcrumb: 'Inline Layout Test',
        },
      },
      {
        path: 'horizontal-form',
        component: HorizontalFormPage,
        data: {
          breadcrumb: 'Horizontal Layout Test',
        },
      },
      {
        path: 'tags-test',
        component: TagsTestPage,
        data: {
          breadcrumb: 'Horizontal',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPagesRoutingModule {}

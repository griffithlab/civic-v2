import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AssertionReviseTestPage } from './assertion-revise-test/assertion-revise-test.page'
import { AssertionSubmitTestPage } from './assertion-submit-test/assertion-submit-test.page'
import { EvidenceReviseTestPage } from './evidence-revise-test/evidence-revise-test.page'
import { EvidenceSubmitTestPage } from './evidence-submit-test/evidence-submit-test.page'
import { HorizontalFormPage } from './horizontal-form/horizontal-form.page'
import { IconsTestPage } from './icons-test/icons-test.page'
import { InlineFormPage } from './inline-form/inline-form.page'
import { VerticalFormPage } from './vertical-form/vertical-form.page'
import { TestPagesView } from './test-pages.view'

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
          breadcrumb: 'Evidence Submit Test',
        },
      },
      {
        path: 'evidence-revise-test',
        component: EvidenceReviseTestPage,
        data: {
          breadcrumb: 'Evidence Revise Test',
        },
      },
      {
        path: 'assertion-submit-test',
        component: AssertionSubmitTestPage,
        data: {
          breadcrumb: 'Assertion Submit Test',
        },
      },
      {
        path: 'assertion-revise-test',
        component: AssertionReviseTestPage,
        data: {
          breadcrumb: 'Assertion Revise Test',
        },
      },
      {
        path: 'vertical-form',
        component: VerticalFormPage,
        data: {
          breadcrumb: 'Nonstate',
        },
      },
      {
        path: 'inline-form',
        component: InlineFormPage,
        data: {
          breadcrumb: 'Inline',
        },
      },
      {
        path: 'horizontal-form',
        component: HorizontalFormPage,
        data: {
          breadcrumb: 'Horizontal',
        },
      },
      {
        path: 'icons-test',
        component: IconsTestPage,
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

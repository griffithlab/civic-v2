import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SourceAddRelatedPage } from './source-add-related.page'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcRelatedSourceSubmitFormModule } from '@app/forms/config/related-source-submit/related-source-submit.form.module'

@NgModule({
  declarations: [SourceAddRelatedPage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcRelatedSourceSubmitFormModule,
  ],
})
export class SourceAddRelatedModule {}

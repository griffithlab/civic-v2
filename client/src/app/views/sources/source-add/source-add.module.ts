import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SourceAddPage } from './source-add.page'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcSourceSubmitFormModule } from '@app/forms/source-submit/source-submit.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [SourceAddPage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcSourceSubmitFormModule,
  ],
})
export class SourceAddModule {}

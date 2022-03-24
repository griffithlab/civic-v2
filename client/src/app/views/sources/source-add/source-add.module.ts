import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceAddPage } from './source-add.page';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcSourceSubmitFormModule } from '@app/forms/source-submit/source-submit.module';

@NgModule({
  declarations: [SourceAddPage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    CvcSectionNavigationModule,
    CvcSourceSubmitFormModule,
  ]
})
export class SourceAddModule { }

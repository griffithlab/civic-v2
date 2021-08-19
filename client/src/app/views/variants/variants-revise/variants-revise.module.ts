import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantsReviseRoutingModule } from './variants-revise-routing.module';
import { VariantsReviseView } from './variants-revise.view';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [VariantsReviseView],
  imports: [
    CommonModule,
    VariantsReviseRoutingModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcSectionNavigationModule,
  ]
})
export class VariantsReviseModule { }

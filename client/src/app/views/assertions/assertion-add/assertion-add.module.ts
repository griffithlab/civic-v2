import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssertionAddRoutingModule } from './assertion-add-routing.module';
import { AssertionAddView } from './assertion-add.view';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [AssertionAddView],
  imports: [
    CommonModule,
    AssertionAddRoutingModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcSectionNavigationModule,
    CvcPipesModule,
  ]
})
export class AssertionAddModule { }

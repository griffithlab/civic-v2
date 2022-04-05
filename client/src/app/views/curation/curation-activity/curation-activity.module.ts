import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurationActivityRoutingModule } from './curation-activity-routing.module';
import { CurationActivityView } from './curation-activity.view';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CurationTimelineModule } from './curation-timeline/curation-timeline.module';

@NgModule({
  declarations: [CurationActivityView],
  imports: [
    CommonModule,
    CurationActivityRoutingModule,
    CurationTimelineModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcSectionNavigationModule,
    CvcTabNavigationModule,
  ]
})
export class CurationActivityModule { }

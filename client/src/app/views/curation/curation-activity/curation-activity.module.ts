import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurationActivityRoutingModule } from './curation-activity-routing.module';
import { CurationActivityView } from './curation-activity.view';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CurationTimelineModule } from './curation-timeline/curation-timeline.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [CurationActivityView],
  imports: [
    CommonModule,
    CurationActivityRoutingModule,
    CurationTimelineModule,
    NzPageHeaderModule,
    NzIconModule,
    NzSpaceModule,
    NzTypographyModule,
    NzGridModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcTabNavigationModule,
  ],
})
export class CurationActivityModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { LetModule, PushModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CurationQueuesRoutingModule } from './curation-queues-routing.module';
import { CurationQueuesView } from './curation-queues.view';

@NgModule({
  declarations: [CurationQueuesView],
  imports: [
    CommonModule,
    LetModule, PushModule,
    CurationQueuesRoutingModule,

    NzPageHeaderModule,
    NzIconModule,
    NzSpaceModule,
    NzTypographyModule,
    NzGridModule,

    CvcSectionNavigationModule,
    CvcTabNavigationModule,
    CvcPipesModule,
  ],
})
export class CurationQueuesModule {}

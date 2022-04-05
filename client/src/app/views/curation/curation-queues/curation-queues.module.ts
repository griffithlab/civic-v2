import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurationQueuesRoutingModule } from './curation-queues-routing.module';
import { CurationQueuesView } from './curation-queues.view';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    CurationQueuesView
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    CurationQueuesRoutingModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcSectionNavigationModule,
    CvcTabNavigationModule,
  ]
})
export class CurationQueuesModule { }

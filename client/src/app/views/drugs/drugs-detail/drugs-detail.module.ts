import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsDetailComponent } from './drugs-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@NgModule({
  declarations: [DrugsDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
    CvcSectionNavigationModule,
  ]
})
export class DrugsDetailModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { DiseasesDetailComponent } from './diseases-detail.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { RouterModule } from '@angular/router';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [DiseasesDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzIconModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzSpaceModule,
    CvcLinkTagModule,
    CvcSectionNavigationModule,
  ]
})
export class DiseasesDetailModule { }

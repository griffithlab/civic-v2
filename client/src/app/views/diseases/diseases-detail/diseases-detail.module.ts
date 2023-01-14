import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { DiseasesDetailComponent } from './diseases-detail.component';

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
    CvcPipesModule,
  ],
})
export class DiseasesDetailModule {}

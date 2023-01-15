import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleasesMainComponent } from './releases-main.component';
import { LetModule, PushModule } from '@ngrx/component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [ReleasesMainComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    NzTableModule,
    NzSpaceModule,
    NzTypographyModule,
    NzAlertModule,
    NzCardModule,
    CvcSectionNavigationModule,
    CvcLinkTagModule,
  ],
})
export class ReleasesMainModule {}

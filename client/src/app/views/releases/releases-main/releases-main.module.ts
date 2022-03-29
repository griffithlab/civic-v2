import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleasesMainComponent } from './releases-main.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  declarations: [ReleasesMainComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzSpaceModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    NzTableModule,
    NzAlertModule,
    CvcLinkTagModule,
  ]
})
export class ReleasesMainModule { }

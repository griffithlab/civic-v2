// framework imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// zorro imports
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

// civic imports
import { GenesBrowseComponent } from './genes-browse/genes-browse.component';
import { GenesComponent } from './genes.component';
import { GenesDetailComponent } from './genes-detail/genes-detail.component';
import { GenesRoutingModule } from './genes-routing.module';
import { IconsProviderModule } from '@app/icons-provider.module';

@NgModule({
  declarations: [GenesComponent, GenesBrowseComponent, GenesDetailComponent],
  imports: [
    CommonModule,
    GenesRoutingModule,
    IconsProviderModule,
    NzAvatarModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzDropDownModule,
    NzGridModule,
    NzPageHeaderModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzToolTipModule,
  ]
})

export class GenesModule { }

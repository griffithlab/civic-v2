// framework imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// zorro imports
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

// additional imports
import { TimeagoModule } from 'ngx-timeago';

// civic imports
import { IconsProviderModule } from '@app/icons-provider.module'
import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { GenesBrowseComponent } from './genes-browse/genes-browse.component';
import { GenesComponent } from './genes.component';
import { GenesDetailComponent } from './genes-detail/genes-detail.component';
import { GenesRoutingModule } from './genes-routing.module';
import { GenesComponentsModule } from '@app/components/genes/genes-components.module';

// debugging imports
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [
    GenesComponent,
    GenesBrowseComponent,
    GenesDetailComponent,
  ],
  imports: [
    SharedComponentsModule,
    GenesComponentsModule,
    CommonModule,
    GenesRoutingModule,
    IconsProviderModule,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzCommentModule,
    NzFormModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzGridModule,
    NzListModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzSpinModule,
    NzSkeletonModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    NgxJsonViewerModule,
    TimeagoModule.forChild()
  ]
})

export class GenesModule { }

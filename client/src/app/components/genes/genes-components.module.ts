import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

// zorro imports
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDividerModule } from 'ng-zorro-antd/divider';

// additional imports
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { TimeagoModule } from 'ngx-timeago';

// cvc imports
import { IconsProviderModule } from '@app/icons-provider.module';

// gene components
import { GeneDescriptionComponent } from './gene-description/gene-description.component';
import { GeneDescriptionRevisionComponent } from './gene-description-revision/gene-description-revision.component';
import { MyGeneInfoComponent } from './my-gene-info/my-gene-info.component';
import { GeneSourcesRevisionComponent } from './gene-sources-revision/gene-sources-revision.component';

@NgModule({
  declarations: [
    GeneDescriptionComponent,
    GeneDescriptionRevisionComponent,
    MyGeneInfoComponent,
    GeneDescriptionRevisionComponent,
    GeneSourcesRevisionComponent,
  ],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzAvatarModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzCardModule,
    NzCommentModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzEmptyModule,
    NzGridModule,
    NzListModule,
    NzSpaceModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    NgxJsonViewerModule,
    NzPopoverModule,
    NzDividerModule,
    ReactiveComponentModule,
    TimeagoModule.forChild()
  ],
  exports: [
    GeneDescriptionComponent,
    GeneDescriptionRevisionComponent,
    GeneSourcesRevisionComponent,
    MyGeneInfoComponent,
  ]
})

export class GenesComponentsModule { }

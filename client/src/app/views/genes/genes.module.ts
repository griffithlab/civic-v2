// framework imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// zorro imports
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
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
import { ReactiveComponentModule } from '@ngrx/component';

// civic imports
import { IconsProviderModule } from '@app/icons-provider.module'
import { CvcFormsModule } from '@app/forms/forms.module';
import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { GenesComponent } from './genes.component';
import { GenesDetailComponent } from './genes-detail/genes-detail.component';
import { GenesRoutingModule } from './genes-routing.module';
import { GenesComponentsModule } from '@app/components/genes/genes-components.module';

// debugging imports
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { GenesSuggestRevisionComponent } from './genes-suggest-revision/genes-suggest-revision.component';
import { GenesSummaryComponent } from './genes-summary/genes-summary.component';
import { GenesFlagsComponent } from './genes-flags/genes-flags.component';
import { GenesCommentsComponent } from './genes-comments/genes-comments.component';
import { GenesRevisionsComponent } from './genes-revisions/genes-revisions.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { VariantsModule } from '../variants/variants.module';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { GenesHomeModule } from './genes-home/genes-home.module';

@NgModule({
  declarations: [
    GenesComponent,
    GenesDetailComponent,
    GenesSuggestRevisionComponent,
    GenesSummaryComponent,
    GenesFlagsComponent,
    GenesCommentsComponent,
    GenesRevisionsComponent,
  ],
  imports: [
    CvcFormsModule,
    GenesHomeModule,
    SectionNavigationModule,
    SharedComponentsModule,
    GenesComponentsModule,
    CommonModule,
    GenesRoutingModule,
    IconsProviderModule,
    NzAvatarModule,
    NzAlertModule,
    NzBadgeModule,
    NzButtonModule,
    NzCardModule,
    NzCommentModule,
    NzFormModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzGridModule,
    NzListModule,
    NzPageHeaderModule,
    NzPopoverModule,
    NzSpaceModule,
    NzSpinModule,
    NzSkeletonModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    NgxJsonViewerModule,
    ReactiveComponentModule,
    TimeagoModule.forChild(),
    NzInputModule,
    FormsModule,
    VariantsModule
  ]
})

export class GenesModule { }

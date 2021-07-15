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
import { VariantsComponent } from './variants.component';
import { VariantsRoutingModule } from './variants-routing.module';
import { VariantsDetailComponent } from './variants-detail/variants-detail.component';
import { VariantSummaryComponent } from './variants-summary/variants-summary.component';
import { VariantsCommentsComponent } from './variants-comments/variants-comments.component';
import { VariantsFlagsComponent } from './variants-flags/variants-flags.component';
import { EvidenceModule } from '../evidence/evidence.module';

@NgModule({
  declarations: [
    VariantsComponent,
    VariantsDetailComponent,
    VariantSummaryComponent,
    VariantsCommentsComponent,
    VariantsFlagsComponent
  ],
  imports: [
    CvcFormsModule,
    SharedComponentsModule,
    CommonModule,
    VariantsRoutingModule,
    IconsProviderModule,
    NzAvatarModule,
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
    ReactiveComponentModule,
    TimeagoModule.forChild(),
    NzInputModule,
    FormsModule,
    SharedComponentsModule,
    EvidenceModule
  ]
})
export class VariantsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEvidenceTagComponent } from './evidence-tag.component';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcEvidencePopoverModule } from '../evidence-popover/evidence-popover.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { CvcIconBadgesModule } from '@app/components/shared/icon-badges/icon-badges.module';

@NgModule({
  declarations: [CvcEvidenceTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzBadgeModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcEvidencePopoverModule,
    CvcPipesModule,
    CvcIconBadgesModule,
  ],
  exports: [CvcEvidenceTagComponent]
})
export class CvcEvidenceTagModule { }

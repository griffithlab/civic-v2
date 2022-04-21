import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcDrugPopoverComponent } from './cvc-drug-popover.component';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [CvcDrugPopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    NzTypographyModule,
    NzTagModule,
    NzToolTipModule,
    CvcLinkTagModule,
    CvcPipesModule
  ],
  exports: [CvcDrugPopoverComponent]
})
export class CvcDrugPopoverModule { }

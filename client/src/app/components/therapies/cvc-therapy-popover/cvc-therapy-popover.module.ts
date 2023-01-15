import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcTherapyPopoverComponent } from './cvc-therapy-popover.component';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { LetModule, PushModule } from '@ngrx/component';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [CvcTherapyPopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetModule, PushModule,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    NzTypographyModule,
    NzTagModule,
    NzToolTipModule,
    CvcLinkTagModule,
    CvcPipesModule,
  ],
  exports: [CvcTherapyPopoverComponent],
})
export class CvcTherapyPopoverModule {}

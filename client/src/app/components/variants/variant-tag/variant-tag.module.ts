import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantTagComponent } from './variant-tag.component';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { CvcVariantPopoverModule } from '@app/components/variants/variant-popover/variant-popover.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcIconBadgesModule } from '@app/components/shared/icon-badges/icon-badges.module';

@NgModule({
  declarations: [CvcVariantTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcPipesModule,
    CvcVariantPopoverModule,
    CvcIconBadgesModule,
  ],
  exports: [CvcVariantTagComponent],
})
export class CvcVariantTagModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantPopoverComponent } from './variant-popover.component';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcGeneTagModule } from '@app/components/genes/cvc-gene-tag/cvc-gene-tag.module';
import { CvcLinkTagModule } from '@app/components/shared/cvc-link-tag/cvc-link-tag.module';

@NgModule({
  declarations: [CvcVariantPopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    NzIconModule,
    NzSpaceModule,
    CvcGeneTagModule,
    CvcLinkTagModule
  ],
  exports: [CvcVariantPopoverComponent]
})
export class CvcVariantPopoverModule { }

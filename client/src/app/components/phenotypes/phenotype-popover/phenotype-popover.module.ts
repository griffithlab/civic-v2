import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcPhenotypePopoverComponent } from './phenotype-popover.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcLinkTagModule } from '@app/components/shared/cvc-link-tag/cvc-link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [CvcPhenotypePopoverComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzIconModule,
    NzCardModule,
    CvcLinkTagModule,
    NzDescriptionsModule,

  ],
  exports: [CvcPhenotypePopoverComponent]
})
export class CvcPhenotypePopoverModule { }

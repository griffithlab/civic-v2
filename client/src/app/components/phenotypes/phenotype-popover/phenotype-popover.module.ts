import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcPhenotypePopoverComponent } from './phenotype-popover.component';
import { LetModule, PushModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcPhenotypePopoverComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,
    NzIconModule,
    NzCardModule,
    CvcLinkTagModule,
    NzDescriptionsModule,
  ],
  exports: [CvcPhenotypePopoverComponent],
})
export class CvcPhenotypePopoverModule {}

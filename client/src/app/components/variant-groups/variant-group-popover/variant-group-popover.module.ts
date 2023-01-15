import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { LetModule, PushModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcVariantGroupPopoverComponent } from './variant-group-popover.component';

@NgModule({
  declarations: [CvcVariantGroupPopoverComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,

    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,

    CvcSourceTagModule,
    CvcVariantTagModule,
    CvcTagListModule,
    CvcPipesModule,
  ],
  exports: [CvcVariantGroupPopoverComponent],
})
export class CvcVariantGroupPopoverModule {}

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcVariantGroupPopoverComponent } from './variant-group-popover.component'

@NgModule({
  declarations: [CvcVariantGroupPopoverComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,

    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,

    CvcSourceTagModule,
    CvcFeatureVariantTagModule,
    CvcTagListModule,
    CvcPipesModule,
  ],
  exports: [CvcVariantGroupPopoverComponent],
})
export class CvcVariantGroupPopoverModule {}

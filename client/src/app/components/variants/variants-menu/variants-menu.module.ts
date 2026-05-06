import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcVariantsMenuComponent } from './variants-menu.component'
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'

@NgModule({
  declarations: [CvcVariantsMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzGridModule,
    NzCardModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzTypographyModule,
    NzCheckboxModule,
    NzSpinModule,
    CvcPipesModule,
    CvcVariantTagModule,
    CvcTagListModule,
    CvcVariantTypeTagModule,
    CvcFeatureTagModule,
  ],
  exports: [CvcVariantsMenuComponent],
})
export class CvcVariantsMenuModule {}

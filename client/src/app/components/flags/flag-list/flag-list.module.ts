import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcResolveFlagFormModule } from '@app/forms/components/flag-resolve/flag-resolve.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { FlagListComponent } from './flag-list.component'

@NgModule({
  declarations: [FlagListComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzListModule,
    NzCardModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule,
    NzAvatarModule,
    NzEmptyModule,
    NzCheckboxModule,
    NzDividerModule,
    NzToolTipModule,
    NzListModule,
    NzPopoverModule,
    NzIconModule,
    NzInputModule,
    FormsModule,
    CvcSourceTagModule,
    CvcUserTagModule,
    CvcDiseaseTagModule,
    CvcTherapyTagModule,
    CvcPhenotypeTagModule,
    CvcVariantTagModule,
    CvcVariantTypeTagModule,
    CvcStatusTagModule,
    CvcPipesModule,
    NzButtonModule,
    NzAlertModule,
    LetDirective,
    PushPipe,
    CvcResolveFlagFormModule,
    NzDividerModule,
    CvcCommentBodyModule,
  ],
  exports: [FlagListComponent],
})
export class FlagListModule {}

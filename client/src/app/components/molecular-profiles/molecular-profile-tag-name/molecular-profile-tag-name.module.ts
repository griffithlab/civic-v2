import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcMolecularProfileTagNameComponent } from './molecular-profile-tag-name.component'
import { CvcTagGroupModule } from '@app/components/shared/tag-group/tag-group.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'

@NgModule({
  declarations: [CvcMolecularProfileTagNameComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzIconModule,
    CvcVariantTagModule,
    CvcFeatureTagModule,
    CvcTagGroupModule,
  ],
  exports: [CvcMolecularProfileTagNameComponent],
})
export class CvcMolecularProfileTagNameModule {}

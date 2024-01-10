import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcMolecularProfilePopoverComponent } from './molecular-profile-popover.component'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcMolecularProfileTagNameModule } from '../molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'

@NgModule({
  declarations: [CvcMolecularProfilePopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    NzIconModule,
    NzSpaceModule,
    CvcFeatureTagModule,
    CvcLinkTagModule,
    CvcTagListModule,
    CvcMolecularProfileTagNameModule,
  ],
  exports: [CvcMolecularProfilePopoverComponent],
})
export class CvcMolecularProfilePopoverModule {}

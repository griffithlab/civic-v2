import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
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
import { CvcMolecularProfileTagModule } from '../molecular-profile-tag/molecular-profile-tag.module'
import { CvcMolecularProfilesMenuComponent } from './molecular-profiles-menu.component'
import { NzSpinModule } from 'ng-zorro-antd/spin'

@NgModule({
  declarations: [CvcMolecularProfilesMenuComponent],
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
    NzSpinModule,
    NzTypographyModule,
    CvcPipesModule,
    CvcMolecularProfileTagModule,
    CvcTagListModule,
  ],
  exports: [CvcMolecularProfilesMenuComponent],
})
export class CvcMolecularProfilesMenuModule {}

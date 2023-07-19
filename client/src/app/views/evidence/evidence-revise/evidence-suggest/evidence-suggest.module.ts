import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { EvidenceSuggestPage } from './evidence-suggest.page'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcEvidenceReviseFormModule } from '@app/forms2/config/evidence-revise/evidence-revise.form.module'

@NgModule({
  declarations: [EvidenceSuggestPage],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzGridModule,
    NzCardModule,
    NzSkeletonModule,
    NzSpaceModule,
    CvcEvidenceReviseFormModule
  ],
})
export class EvidenceSuggestModule {}

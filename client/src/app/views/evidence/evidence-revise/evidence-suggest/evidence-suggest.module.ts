import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LetModule, PushModule } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { EvidenceSuggestPage } from './evidence-suggest.page'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { EvidenceReviseFormModule } from '@app/forms/evidence-revise/evidence-revise.module'

@NgModule({
  declarations: [EvidenceSuggestPage],
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    NzGridModule,
    NzCardModule,
    NzSkeletonModule,
    NzSpaceModule,
    EvidenceReviseFormModule,
  ],
})
export class EvidenceSuggestModule {}

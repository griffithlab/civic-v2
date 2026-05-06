import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { AssertionSuggestPage } from './assertion-suggest.page'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcAssertionReviseModule } from '@app/forms/config/assertion-revise/assertion-revise.module'

@NgModule({
  declarations: [AssertionSuggestPage],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzGridModule,
    NzCardModule,
    NzSkeletonModule,
    NzSpaceModule,
    CvcAssertionReviseModule,
  ],
})
export class AssertionSuggestModule {}

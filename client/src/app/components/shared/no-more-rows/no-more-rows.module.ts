import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NoMoreRowsTag } from './no-more-rows.tag'

@NgModule({
  declarations: [NoMoreRowsTag],
  imports: [CommonModule, LetDirective, PushPipe, NzTagModule, NzIconModule],
  exports: [NoMoreRowsTag],
})
export class CvcNoMoreRowsModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableCountsComponent } from './table-counts.component'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { LetModule, PushModule } from '@ngrx/component'

@NgModule({
  declarations: [TableCountsComponent],
  imports: [CommonModule, LetModule, PushModule, NzTypographyModule],
  exports: [TableCountsComponent],
})
export class CvcTableCountsModule {}

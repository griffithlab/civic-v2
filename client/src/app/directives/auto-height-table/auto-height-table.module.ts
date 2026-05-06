import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcAutoHeightTableDirective } from './auto-height-table.directive'

@NgModule({
  declarations: [CvcAutoHeightTableDirective],
  imports: [CommonModule],
  exports: [CvcAutoHeightTableDirective],
})
export class CvcAutoHeightTableModule {}

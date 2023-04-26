import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcAutoHeightCardDirective } from './auto-height-card.directive'

@NgModule({
  declarations: [CvcAutoHeightCardDirective],
  imports: [CommonModule],
  exports: [CvcAutoHeightCardDirective],
})
export class CvcAutoHeightCardModule {}

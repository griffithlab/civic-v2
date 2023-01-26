import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcPopoverTemplate } from './popover-template.directive'

@NgModule({
  declarations: [CvcPopoverTemplate],
  imports: [CommonModule],
  exports: [CvcPopoverTemplate],
})
export class EntityTagDirectivesModule {}

import { NgModule } from '@angular/core'
import { CvcAttributeTagComponent } from './attribute-tag.component'

/**
 * The component is standalone; this module survives only so the NgModule-based
 * managers and enum filter menus can keep importing it by module name. Delete
 * it once those are standalone too.
 */
@NgModule({
  imports: [CvcAttributeTagComponent],
  exports: [CvcAttributeTagComponent],
})
export class CvcAttributeTagModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcIconBadgesComponent } from './icon-badges.component'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [CvcIconBadgesComponent],
  imports: [CommonModule, CvcPipesModule],
  exports: [CvcIconBadgesComponent],
})
export class CvcIconBadgesModule {}

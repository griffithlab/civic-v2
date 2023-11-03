import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcStringTagComponent } from './string-tag.component'

@NgModule({
  declarations: [CvcStringTagComponent],
  imports: [CommonModule, NzIconModule, NzTagModule, CvcPipesModule],
  exports: [CvcStringTagComponent],
})
export class CvcStringTagModule {}

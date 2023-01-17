import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CommunityMainComponent } from './community-main.component'
import { NzIconModule } from 'ng-zorro-antd/icon'

@NgModule({
  declarations: [CommunityMainComponent],
  imports: [CommonModule, NzIconModule],
})
export class CommunityMainModule {}

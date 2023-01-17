import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RevisionValueDiffComponent } from './revision-value-diff.component'
import { NzGridModule } from 'ng-zorro-antd/grid'

@NgModule({
  declarations: [RevisionValueDiffComponent],
  imports: [CommonModule, NzGridModule],
  exports: [RevisionValueDiffComponent],
})
export class CvcRevisionValueDiffModule {}

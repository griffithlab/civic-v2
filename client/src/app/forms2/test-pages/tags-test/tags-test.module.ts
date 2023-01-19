import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TagsTestPage } from './tags-test.page'
import { CvcEntityTagModule } from '@app/forms2/components/entity-tag/entity-tag.module'

@NgModule({
  declarations: [TagsTestPage],
  imports: [CommonModule, CvcEntityTagModule],
})
export class TagsTestModule {}

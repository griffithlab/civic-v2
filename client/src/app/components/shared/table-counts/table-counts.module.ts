import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableCountsComponent } from './table-counts.component'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [TableCountsComponent],
  imports: [CommonModule, LetDirective, PushPipe, NzTypographyModule, CvcPipesModule],
  exports: [TableCountsComponent],
})
export class CvcTableCountsModule {}

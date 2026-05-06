import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcQuicksearchComponent } from './quicksearch-component'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { FormsModule } from '@angular/forms'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'

@NgModule({
  declarations: [CvcQuicksearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LetDirective,
    PushPipe,
    CvcPipesModule,
    NzTypographyModule,
    NzSelectModule,
    NzInputModule,
    NzFormModule,
    NzIconModule,
    NzAutocompleteModule,
    NzCheckboxModule,
    NzToolTipModule,
  ],
  exports: [CvcQuicksearchComponent],
})
export class CvcQuicksearchModule {}

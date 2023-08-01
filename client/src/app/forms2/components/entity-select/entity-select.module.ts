import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEntitySelectComponent } from './entity-select.component'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { ReactiveFormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { FormlyModule } from '@ngx-formly/core'
import { CvcEntityTagModule } from '../entity-tag/entity-tag.module'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzAlertModule } from 'ng-zorro-antd/alert'

@NgModule({
  declarations: [CvcEntitySelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective, PushPipe,
    FormlyModule.forChild(),
    NzAlertModule,
    NzIconModule,
    NzSelectModule,
    NzInputModule,
    NzFormModule,
    NzTypographyModule,
    NzAutocompleteModule,
    NzSpaceModule,

    CvcEntityTagModule,
    CvcPipesModule,
  ],
  exports: [CvcEntitySelectComponent],
})
export class CvcEntitySelectModule {}

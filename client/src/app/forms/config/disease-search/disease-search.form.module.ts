import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcDiseaseSearchForm } from './disease-search.form'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { CvcForms2Module } from '@app/forms/forms.module'
import { PushPipe } from '@ngrx/component'

@NgModule({
  declarations: [CvcDiseaseSearchForm],
  imports: [
    CommonModule,
    PushPipe,
    NzFormModule,
    NzButtonModule,
    NzCardModule,
    NzSpaceModule,
    NzIconModule,
    NzDividerModule,
    CvcForms2Module,
  ],
  exports: [CvcDiseaseSearchForm],
})
export class CvcDiseaseSearchFormModule {}

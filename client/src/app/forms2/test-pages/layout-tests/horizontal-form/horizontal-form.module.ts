import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HorizontalFormPage } from './horizontal-form.page'
import { CvcForms2Module } from '@app/forms2/forms2.module'

@NgModule({
  declarations: [HorizontalFormPage],
  imports: [CommonModule, CvcForms2Module],
})
export class HorizontalFormTestModule {}

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcForms2Module } from '@app/forms2/forms2.module'
import { VerticalFormPage } from './vertical-form.page'

@NgModule({
  declarations: [VerticalFormPage],
  imports: [CommonModule, CvcForms2Module],
})
export class VerticalFormTestModule {}

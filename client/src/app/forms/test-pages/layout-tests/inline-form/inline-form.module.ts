import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InlineFormPage } from './inline-form.page'
import { CvcForms2Module } from '@app/forms/forms.module'

@NgModule({
  declarations: [InlineFormPage],
  imports: [CommonModule, CvcForms2Module],
})
export class InlineFormTestModule {}

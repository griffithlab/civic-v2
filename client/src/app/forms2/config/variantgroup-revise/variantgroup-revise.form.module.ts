import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcVariantgroupReviseForm } from './variantgroup-revise.form'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcForms2Module } from '@app/forms2/forms2.module'
import { NgxJsonViewerModule } from 'ngx-json-viewer'

@NgModule({
  declarations: [CvcVariantgroupReviseForm],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    CvcForms2Module,
    NgxJsonViewerModule, // debug
  ],
  exports: [CvcVariantgroupReviseForm],
})
export class CvcVariantgroupReviseFormModule {}

import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcFormTypesModule } from './types/form-types.module'
import { CvcFormWrappersModule } from './wrappers/form-wrappers.module'

// NOTE: FormlyModule.forRoot(CvcFormlyConfig2) is imported by AppModule ONLY.
// This module is imported by many lazy-loaded form modules; importing forRoot
// here would re-provide FormlyConfig in every lazy injector, splitting formly's
// config into multiple instances. Under formly v7, the core extension then
// resolves types against the wrong instance and silently skips component
// lifecycle hooks (e.g. FieldArrayType.onPopulate), breaking field arrays.
@NgModule({
  declarations: [],
  imports: [
    FormlyModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyNgZorroAntdModule,
    CvcFormWrappersModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyNgZorroAntdModule,
    NzFormModule,
    CvcFormWrappersModule,
    CvcFormTypesModule,
  ],
})
export class CvcForms2Module {}

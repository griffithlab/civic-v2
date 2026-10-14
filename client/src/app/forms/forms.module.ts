import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcFormTypesModule } from './types/form-types.module'
import { CvcFormWrappersModule } from './wrappers/form-wrappers.module'

// FormlyModule.forRoot() lives in AppModule only. This module is imported by
// the lazy form modules, and a forRoot here would give each lazy injector its
// own FormlyConfig; formly 7's core extension then binds to the wrong one and
// skips component lifecycle hooks, FieldArrayType.onPopulate among them
@NgModule({
  declarations: [],
  imports: [
    FormlyModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyNgZorroAntdModule,
    CvcFormWrappersModule,
    CvcFormTypesModule,
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

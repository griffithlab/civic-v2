import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { FormlyModule, FORMLY_CONFIG } from '@ngx-formly/core'
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { registerCvcExtensions } from './extensions/form-extensions.config'
import { CvcFormTypesModule } from './types/form-types.module'
import { CvcFormWrappersModule } from './wrappers/form-wrappers.module'

@NgModule({
  declarations: [],
  imports: [
    FormlyModule.forChild(),
    ReactiveFormsModule,
    NzFormModule,
    FormlyNgZorroAntdModule,
    CvcFormWrappersModule,
    NgxJsonViewerModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyNgZorroAntdModule,
    NzFormModule,
    CvcFormWrappersModule,
    CvcFormTypesModule,
  ],
  providers: [
    {
      // inject deps, instantiate and register expressions
      provide: FORMLY_CONFIG,
      multi: true,
      useFactory: registerCvcExtensions,
      deps: [ActivatedRoute],
    },
  ],
})
export class CvcForms2Module {}

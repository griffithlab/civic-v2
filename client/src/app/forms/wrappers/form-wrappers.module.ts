import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcAddEntityFormWrapperModule } from './add-entity-form/add-entity-form.module'
import { CvcFieldGridWrapperModule } from './field-grid/field-grid.module'
import { CvcFormCardModule } from './form-card/form-card.module'
import { CvcFormFieldWrapperModule } from './form-field/form-field.module'
import { CvcFormFooterWrapperModule } from './form-footer/form-footer.wrapper.module'
import { CvcFormLayoutWrapperModule } from './form-layout/form-layout.wrapper.module'

@NgModule({
  imports: [
    CommonModule,
    CvcFormLayoutWrapperModule,
    CvcFormCardModule,
    CvcFormFooterWrapperModule,
    CvcFormFieldWrapperModule,
    CvcFieldGridWrapperModule,
    CvcAddEntityFormWrapperModule,
  ],
})
export class CvcFormWrappersModule {}

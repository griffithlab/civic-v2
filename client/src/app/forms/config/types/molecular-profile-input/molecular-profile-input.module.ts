import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormlyModule } from '@ngx-formly/core'
import { NzRateModule } from 'ng-zorro-antd/rate'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  MolecularProfileInputType,
  MolecularProfileInputTypeOption,
} from './molecular-profile-input.type'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { CvcComplexMolecularProfileInputFormModule } from '@app/forms/complex-molecular-profile-input/complex-molecular-profile-input.module'
import { CvcVariantInputTypeModule } from '../variant-input/variant-input.module'
import { VariantSubmitFormModule } from '@app/forms2/config/variant-submit/variant-submit.module'
import { NzCardModule } from 'ng-zorro-antd/card'

@NgModule({
  declarations: [MolecularProfileInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forChild({ types: [MolecularProfileInputTypeOption] }),
    NzRateModule,
    NzTabsModule,
    NzCardModule,
    VariantSubmitFormModule,
    CvcComplexMolecularProfileInputFormModule,
  ],
  exports: [MolecularProfileInputType],
})
export class CvcMolecularProfileInputTypeModule {}

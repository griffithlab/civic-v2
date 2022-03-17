import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceTransferTmpType } from './evidence-transfer-tmp.type';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';

const configOption: ConfigOption = {
  types: [
   {
     name: 'evidence-transfer-tmp',
     wrappers: ['form-field'],
     component: EvidenceTransferTmpType
   }
  ]
}

@NgModule({
  declarations: [
    EvidenceTransferTmpType
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(configOption),
    FormlySelectModule,
    NzTransferModule,
    NzSelectModule,
  ]
})
export class CvcEvidenceTransferTmpModule { }

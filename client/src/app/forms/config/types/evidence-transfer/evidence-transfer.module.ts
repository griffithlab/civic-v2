import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceTransferType } from './evidence-transfer.type';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';

const configOption: ConfigOption = {
  types: [
   {
     name: 'evidence-transfer',
     wrappers: ['form-field'],
     component: EvidenceTransferType
   }
  ]
}

@NgModule({
  declarations: [
    EvidenceTransferType
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
export class CvcEvidenceTransferModule { }

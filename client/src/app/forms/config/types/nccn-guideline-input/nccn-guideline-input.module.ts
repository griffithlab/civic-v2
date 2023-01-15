import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NccnGuidelineInputType,
  nccnGuidelineInputTypeOption,
} from './nccn-guideline-input.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { LetModule, PushModule } from '@ngrx/component';

@NgModule({
  declarations: [NccnGuidelineInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule, PushModule,
    NzSelectModule,
    NzSpaceModule,
    NzTagModule,
    FormlyModule.forChild({ types: [nccnGuidelineInputTypeOption] }),
  ],
})
export class CvcNccnGuidelineInputTypeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputType, TagInputTypeOption } from './tag-input.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { LetModule, PushModule } from '@ngrx/component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CvcAutofocusModule } from '@app/directives/auto-focus/auto-focus.module';

// MultiFieldTypeOption,
@NgModule({
  declarations: [TagInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule, PushModule,
    FormlyModule.forChild({ types: [TagInputTypeOption] }),
    NzTagModule,
    NzInputModule,
    CvcAutofocusModule,
  ],
})
export class CvcTagInputTypeModule {}

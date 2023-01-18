import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CvcFormFieldWrapper } from './form-field.wrapper';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { LetModule, PushModule } from '@ngrx/component';

// NOTE: this wrapper replaces, and is heavily based on, ngx-formly's
// ng-zorro base form-field wrapper. If after an ngx-formly update,
// issues arise, ensure that any key updates are ported from ngx-formly's
// form-field wrapper.
const wrapperConfig: ConfigOption = {
  wrappers: [{ name: 'form-field', component: CvcFormFieldWrapper }],
}
@NgModule({
  declarations: [CvcFormFieldWrapper],
  imports: [
    CommonModule,
    LetModule, PushModule,
    ReactiveFormsModule,
    NzFormModule,
    NzIconModule,
    NzToolTipModule,
    NzTypographyModule,
    FormlyModule.forChild(wrapperConfig),
  ],
})
export class CvcFormFieldWrapperModule {}

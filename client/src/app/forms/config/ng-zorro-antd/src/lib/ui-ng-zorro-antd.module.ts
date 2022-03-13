import { NgModule } from '@angular/core';
import { FormlyNzCheckboxModule } from '../../checkbox';
import { FormlyNzFormFieldModule } from '../../form-field';
import { FormlyNzInputModule } from '../../input';
import { FormlyNzRadioModule } from '../../radio';
import { FormlyNzSelectModule } from '../../select';
import { FormlyNzTextAreaModule } from '../../textarea';

@NgModule({
  imports: [
    FormlyNzFormFieldModule,
    FormlyNzInputModule,
    FormlyNzTextAreaModule,
    FormlyNzRadioModule,
    FormlyNzCheckboxModule,
    FormlyNzSelectModule,
  ],
})
export class FormlyNgZorroAntdModule {}

import { NgModule } from '@angular/core';
import { FormlyNzCheckboxModule } from 'libs/ng-zorro-antd/checkbox';
import { FormlyNzFormFieldModule } from 'libs/ng-zorro-antd/form-field';
import { FormlyNzInputModule } from 'libs/ng-zorro-antd/input';
import { FormlyNzRadioModule } from 'libs/ng-zorro-antd/radio';
import { FormlyNzSelectModule } from 'libs/ng-zorro-antd/select';
import { FormlyNzTextAreaModule } from 'libs/ng-zorro-antd/textarea';

// import { FormlyNzFormFieldModule } from '@libs/ng-zorro-antd/form-field';
// import { FormlyNzInputModule } from '@libs/ng-zorro-antd/input';
// import { FormlyNzTextAreaModule } from '@libs/ng-zorro-antd/textarea';
// import { FormlyNzRadioModule } from '@libs/ng-zorro-antd/radio';
// import { FormlyNzCheckboxModule } from '@libs/ng-zorro-antd/checkbox';
// import { FormlyNzSelectModule } from '@libs/ng-zorro-antd/select';

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

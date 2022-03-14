import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormCardWrapper } from './form-card.wrapper';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    FormCardWrapper
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCardModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-card',
          component: FormCardWrapper
        },
      ],
    }),

  ]
})
export class CvcFormCardModule { }

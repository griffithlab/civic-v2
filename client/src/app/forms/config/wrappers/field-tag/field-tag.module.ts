import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldTagWrapper } from './field-tag.wrapper';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { GraphQLModule } from '@app/graphql/graphql.module';

@NgModule({
  declarations: [FieldTagWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTagModule,
    GraphQLModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'field-tag',
          component: FieldTagWrapper
        },
      ],
    }),
  ],
})
export class CvcFieldTagWrapperModule {}

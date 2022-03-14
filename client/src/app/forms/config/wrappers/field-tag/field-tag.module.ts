import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldTagWrapper } from './field-tag.wrapper';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { GraphQLModule } from '@app/graphql/graphql.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';

@NgModule({
  declarations: [FieldTagWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTagModule,
    CvcGeneTagModule,
    CvcSourceTagModule,
    CvcVariantTagModule,
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

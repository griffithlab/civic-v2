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
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module';
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcCommentTagModule } from '@app/components/comments/comment-tag/comment-tag.module';
import { CvcFlagTagModule } from '@app/components/flags/flag-tag/flag-tag.module';
import { CvcClinicalTrialTagComponent } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.component';
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module';

@NgModule({
  declarations: [FieldTagWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTagModule,
    CvcGeneTagModule,
    CvcSourceTagModule,
    CvcVariantTagModule,
    CvcEvidenceTagModule,
    CvcVariantTypeTagModule,
    CvcClinicalTrialTagModule,
    CvcDrugTagModule,
    CvcVariantTagModule,
    CvcCommentTagModule,
    CvcFlagTagModule,
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

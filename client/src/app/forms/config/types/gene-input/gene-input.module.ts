import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneInputType, GeneInputTypeOption } from './gene-input.type';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcAutofocusModule } from '@app/directives/auto-focus/auto-focus.module';

@NgModule({
  declarations: [GeneInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyModule.forChild({ types: [GeneInputTypeOption] }),
    NzSelectModule,
    NzSpaceModule,
    NzTypographyModule,
    CvcGeneTagModule,
    CvcPipesModule,
    CvcAutofocusModule,
  ],
})
export class CvcGeneInputTypeModule {}

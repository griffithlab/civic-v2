import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ampLevelInputTypeOption } from './amp-level-input.type';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CvcPipesModule,
    FormlyModule.forChild({
      types: [ampLevelInputTypeOption],
    }),
  ],
})
export class CvcAmpLevelInputTypeModule {}

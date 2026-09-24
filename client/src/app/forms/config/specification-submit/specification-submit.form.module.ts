import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcSpecificationSubmitForm } from './specification-submit.form';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcForms2Module } from '@app/forms/forms.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { LetDirective, PushPipe } from '@ngrx/component';
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcFieldStepperModule } from '@app/forms/types/stepper/stepper.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@NgModule({
  declarations: [
    CvcSpecificationSubmitForm
  ],
  imports: [
    CommonModule,
    LetDirective, PushPipe,
    NzFormModule,
    NzButtonModule,
    NzDividerModule,
    NzTagModule,
    NzDescriptionsModule,
    NzPopoverModule,
    NzTypographyModule,
    CvcForms2Module,
    CvcFormSubmissionStatusDisplayModule,
    CvcLinkTagModule,
    CvcPipesModule,
    CvcFieldStepperModule,
    NgxJsonViewerModule, // debug
  ],
  exports: [
    CvcSpecificationSubmitForm
  ]
})
export class CvcSpecificationSubmitFormModule { }

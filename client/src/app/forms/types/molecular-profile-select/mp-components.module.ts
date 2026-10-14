import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { CvcSelectFieldsRegistryModule } from '@app/forms/select/select-fields.registry.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { FormlyModule } from '@ngx-formly/core'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { MpEditorPopoverHelpComponent } from './mp-expression-editor/mp-editor-popover-help.component'
import { MpExpressionEditorComponent } from './mp-expression-editor/mp-expression-editor.component'
import { MpFinderComponent } from './mp-finder/mp-finder.component'

/**
 * The molecular-profile finder and expression editor, kept as an NgModule and
 * imported by the now-standalone molecular-profile-select field.
 *
 * mp-finder hosts a nested formly form containing the feature and variant
 * selects, so it imports the shared select registry — which is also why this
 * field was migrated last, after both of those.
 *
 * Not a standalone conversion: like the two managers, these still render the
 * old cvc-entity-tag. This module only declares components; the field's
 * formly registration has moved to the shared select registry.
 */
@NgModule({
  declarations: [
    MpExpressionEditorComponent,
    MpFinderComponent,
    MpEditorPopoverHelpComponent,
  ],
  imports: [
    NzTagModule,
    CommonModule,
    CvcFormFieldWrapperModule,
    CvcFormSubmissionStatusDisplayModule,
    CvcMolecularProfileTagNameModule,
    CvcPipesModule,
    CvcSelectFieldsRegistryModule,
    FormlyModule,
    FormsModule,
    LetDirective,
    NzAlertModule,
    NzAutocompleteModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzListModule,
    NzModalModule,
    NzPopoverModule,
    NzSelectModule,
    NzSpaceModule,
    NzTooltipModule,
    NzTypographyModule,
    PushPipe,
    ReactiveFormsModule,
  ],
  exports: [MpExpressionEditorComponent, MpFinderComponent],
})
export class CvcMpComponentsModule {}

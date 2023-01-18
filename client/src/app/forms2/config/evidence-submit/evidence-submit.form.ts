import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import {
  evidenceSubmitFormInitialModel,
  EvidenceSubmitModel,
} from '@app/forms2/models/evidence-submit.model'
import { EvidenceState } from '@app/forms2/states/evidence.state'
import { UntilDestroy } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { evidenceSubmitFields } from './evidence-submit.form.config'

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-submit-form',
  templateUrl: './evidence-submit.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidenceSubmitForm implements OnDestroy {
  model: EvidenceSubmitModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: FormlyFormOptions

  constructor() {
    this.form = new UntypedFormGroup({})
    this.model = evidenceSubmitFormInitialModel
    this.fields = evidenceSubmitFields
    this.options = { formState: new EvidenceState() }
  }

  onSubmit(model: EvidenceSubmitModel) {
    console.log('------ Evidence Form Submitted ------')
    console.log(model)
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}

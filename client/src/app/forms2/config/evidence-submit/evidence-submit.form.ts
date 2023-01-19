import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core'
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
export class CvcEvidenceSubmitForm implements OnDestroy, AfterViewInit {
  model: EvidenceSubmitModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  state: EvidenceState
  options: FormlyFormOptions

  constructor() {
    this.form = new UntypedFormGroup({})
    this.fields = evidenceSubmitFields
    this.model = { fields: {} }
    this.state = new EvidenceState()
    this.options = { formState: this.state }
  }

  ngAfterViewInit(): void {
    this.state.formReady$.next(true)
  }

  onSubmit(model: EvidenceSubmitModel) {
    console.log('------ Evidence Form Submitted ------')
    console.log(model)
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}

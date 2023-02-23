import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import {
  assertionSubmitFormInitialModel,
  AssertionSubmitModel,
} from '@app/forms2/models/assertion-submit.model'
import { AssertionState } from '@app/forms2/states/assertion.state'
import { UntilDestroy } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { assertionSubmitFields } from './assertion-submit.form.config'

@UntilDestroy()
@Component({
  selector: 'cvc-assertion-submit-form',
  templateUrl: './assertion-submit.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcAssertionSubmitForm implements AfterViewInit, OnDestroy {
  model: AssertionSubmitModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: FormlyFormOptions
  state: AssertionState

  constructor() {
    this.form = new UntypedFormGroup({})
    this.model = assertionSubmitFormInitialModel
    this.fields = assertionSubmitFields
    this.state = new AssertionState()
    this.options = { formState: this.state}
  }

  ngAfterViewInit(): void {
    this.state.formReady$.next(true)
  }

  onSubmit(model: AssertionSubmitModel) {
    console.log('------ Assertion Form Submitted ------')
    console.log(model)
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}

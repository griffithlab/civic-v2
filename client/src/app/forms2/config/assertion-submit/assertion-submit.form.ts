import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core'
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
export class CvcAssertionSubmitForm implements OnDestroy, AfterViewInit {
  model: AssertionSubmitModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  state: AssertionState
  options: FormlyFormOptions

  constructor() {
    this.form = new UntypedFormGroup({})
    this.model = assertionSubmitFormInitialModel
    this.fields = assertionSubmitFields
    this.state = new AssertionState()
    this.options = { formState: this.state }
  }

  onSubmit(model: AssertionSubmitModel) {
    console.log('------ Assertion Form Submitted ------')
    console.log(model)
  }

  ngAfterViewInit(): void {
    // FIXME: need a better way to know when the form fields have all
    // initialized, instead of relying on a setTimeout like this. Probably need
    // to refactor some of the field/form init to orchestrate some init in the
    // form component, so that it knows how many fields and when they are all
    // ready to be connected.
    setTimeout(() => this.state.formReady$.next(true), 1000)
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}

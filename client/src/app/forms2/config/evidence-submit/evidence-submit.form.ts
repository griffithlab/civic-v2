import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { EvidenceSubmitModel } from '@app/forms2/models/evidence-submit.model'
import { EvidenceState } from '@app/forms2/states/evidence.state'
import { evidenceFormModelToInput } from '@app/forms2/utilities/evidence-to-model-fields'
import {
  Maybe,
  SubmitEvidenceItemGQL,
  SubmitEvidenceItemMutation,
  SubmitEvidenceItemMutationVariables,
} from '@app/generated/civic.apollo'
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

  submitEvidenceMutator: MutatorWithState<
    SubmitEvidenceItemGQL,
    SubmitEvidenceItemMutation,
    SubmitEvidenceItemMutationVariables
  >

  mutationState?: MutationState
  newEvidenceId: Maybe<number>

  constructor(
    private submitEvidenceGQL: SubmitEvidenceItemGQL,
    private networkErrorService: NetworkErrorsService
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = evidenceSubmitFields
    this.model = { fields: {} }
    this.state = new EvidenceState()
    this.options = { formState: this.state }
    this.submitEvidenceMutator = new MutatorWithState(networkErrorService)
  }

  ngAfterViewInit(): void {
    this.state.formReady$.next(true)
  }

  onSubmit(model: EvidenceSubmitModel) {
    const input = evidenceFormModelToInput(model)
    if (input) {
      this.mutationState = this.submitEvidenceMutator.mutate(
        this.submitEvidenceGQL,
        { input: input },
        undefined,
        (data) => { this.newEvidenceId = data.submitEvidence?.evidenceItem.id }
      )
    }
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
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
  ExistingEvidenceCountGQL,
  ExistingEvidenceCountQuery,
  ExistingEvidenceCountQueryVariables,
  Maybe,
  SubmitEvidenceItemGQL,
  SubmitEvidenceItemMutation,
  SubmitEvidenceItemMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { evidenceSubmitFields } from './evidence-submit.form.config'
import { QueryRef } from 'apollo-angular'
import { Observable, filter, map } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-submit-form',
  templateUrl: './evidence-submit.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidenceSubmitForm implements OnDestroy, AfterViewInit, OnInit {
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
  newEvidenceUrl?: string

  selectedSourceId?: number
  selectedMpId?: number
  
  countQueryRef?: QueryRef<ExistingEvidenceCountQuery, ExistingEvidenceCountQueryVariables>
  existingEvidenceCount$?: Observable<number>

  constructor(
    private submitEvidenceGQL: SubmitEvidenceItemGQL,
    private existingEvidenceGQL: ExistingEvidenceCountGQL,
    private networkErrorService: NetworkErrorsService
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = evidenceSubmitFields
    this.model = { fields: {} }
    this.state = new EvidenceState()
    this.options = { formState: this.state }
    this.submitEvidenceMutator = new MutatorWithState(networkErrorService)
  }


  ngOnInit(): void {
    this.countQueryRef = this.existingEvidenceGQL.watch({molecularProfileId: 0, sourceId: 0})
    this.existingEvidenceCount$ = this.countQueryRef?.valueChanges.pipe(
        map(c => c.data?.evidenceItems?.totalCount),
        filter(isNonNulled),
        untilDestroyed(this)
    )
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
        (data) => { 
          this.newEvidenceId = data.submitEvidence?.evidenceItem.id 
          this.newEvidenceUrl = `/evidence/${this.newEvidenceId}/summary`
        }
      )
    }
  }

  onModelChange(newModel: EvidenceSubmitModel) {
    if (newModel.fields.sourceId && newModel.fields.molecularProfileId) {
      if (newModel.fields.sourceId != this.selectedSourceId || newModel.fields.molecularProfileId != this.selectedMpId)  {
        this.selectedSourceId = newModel.fields.sourceId
        this.selectedMpId = newModel.fields.molecularProfileId
        this.countQueryRef?.refetch({
          molecularProfileId: newModel.fields.molecularProfileId,
          sourceId: newModel.fields.sourceId
        })
      } 
    } else {
      this.countQueryRef?.refetch({molecularProfileId: 0, sourceId: 0})
    }
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}

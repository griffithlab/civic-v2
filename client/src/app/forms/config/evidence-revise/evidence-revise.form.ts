import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { EvidenceReviseModel } from '@app/forms/models/evidence-revise.model'
import { EvidenceState } from '@app/forms/states/evidence.state'
import {
  evidenceFormModelToReviseInput,
  evidenceToModelFields,
} from '@app/forms/utilities/evidence-to-model-fields'
import {
  EvidenceItemRevisableFieldsGQL,
  SuggestEvidenceItemRevisionGQL,
  SuggestEvidenceItemRevisionMutation,
  SuggestEvidenceItemRevisionMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { evidenceReviseFields } from './evidence-revise.form.config'

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-revise-form',
  templateUrl: './evidence-revise.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcEvidenceReviseForm implements OnInit, AfterViewInit, OnDestroy {
  @Input() evidenceId!: number
  model?: EvidenceReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  state: EvidenceState
  options: FormlyFormOptions

  url?: string

  reviseEvidenceMutator: MutatorWithState<
    SuggestEvidenceItemRevisionGQL,
    SuggestEvidenceItemRevisionMutation,
    SuggestEvidenceItemRevisionMutationVariables
  >

  mutationState?: MutationState

  constructor(
    private revisableFieldsGQL: EvidenceItemRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestEvidenceItemRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = evidenceReviseFields
    this.state = new EvidenceState()
    this.state.formMode = 'revise'
    this.options = { formState: this.state }
    this.reviseEvidenceMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    this.url = `/evidence/${this.evidenceId}/revisions`
  }

  ngAfterViewInit(): void {
    this.revisableFieldsGQL
      .fetch({ evidenceId: this.evidenceId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { evidenceItem } }) => {
          if (evidenceItem) {
            this.model = {
              id: evidenceItem.id,
              fields: evidenceToModelFields(evidenceItem),
            }
            // TODO: figure out if model can be assigned w/o detectChanges() here,
            // like with a model$ BehaviorSubject?
            this.cdr.detectChanges()
          }
        },
        error: (error) => {
          console.error('Error retrieving evidenceItem.')
          console.error(error)
        },
        complete: () => {
          this.state.formReady$.next(true)
          console.log('evidence item retrieved.')
        },
      })
  }

  onSubmit(model: EvidenceReviseModel) {
    if (!this.evidenceId) {
      return
    }

    let input = evidenceFormModelToReviseInput(this.evidenceId, model)
    if (input) {
      this.mutationState = this.reviseEvidenceMutator.mutate(
        this.submitRevisionsGQL,
        { input: input }
      )
    }
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}

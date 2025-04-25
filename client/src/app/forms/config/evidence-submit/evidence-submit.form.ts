import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
import { EvidenceSubmitModel } from '@app/forms/models/evidence-submit.model'
import { EvidenceState } from '@app/forms/states/evidence.state'
import {
  evidenceToModelFields,
  evidenceFormModelToInput,
} from '@app/forms/utilities/evidence-to-model-fields'
import {
  EvidenceItemRevisableFieldsGQL,
  ExistingEvidenceCountGQL,
  ExistingEvidenceCountQuery,
  ExistingEvidenceCountQueryVariables,
  FullyCuratedSourceGQL,
  FullyCuratedSourceQuery,
  FullyCuratedSourceQueryVariables,
  RelatedEvidenceCountGQL,
  RelatedEvidenceCountQuery,
  RelatedEvidenceCountQueryVariables,
  Maybe,
  SubmitEvidenceItemGQL,
  SubmitEvidenceItemMutation,
  SubmitEvidenceItemMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { evidenceSubmitFields } from './evidence-submit.form.config'
import { QueryRef } from 'apollo-angular'
import { Observable, filter, map, Subscription } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { ActivatedRoute } from '@angular/router'

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-submit-form',
  templateUrl: './evidence-submit.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcEvidenceSubmitForm implements OnDestroy, AfterViewInit, OnInit {
  model?: EvidenceSubmitModel
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

  countQueryRef?: QueryRef<
    ExistingEvidenceCountQuery,
    ExistingEvidenceCountQueryVariables
  >
  curatedQueryRef?: QueryRef<
    FullyCuratedSourceQuery,
    FullyCuratedSourceQueryVariables
  >
  relatedCountQueryRef?: QueryRef<
    RelatedEvidenceCountQuery,
    RelatedEvidenceCountQueryVariables
  >
  existingEvidenceId?: number
  routeSub: Subscription

  existingEvidenceCount$?: Observable<number>
  relatedEvidenceCount$?: Observable<number>
  fullyCuratedSource$?: Observable<Maybe<boolean>>

  constructor(
    private revisableFieldsGQL: EvidenceItemRevisableFieldsGQL,
    private submitEvidenceGQL: SubmitEvidenceItemGQL,
    private existingEvidenceGQL: ExistingEvidenceCountGQL,
    private fullyCuratedSourceGQL: FullyCuratedSourceGQL,
    private relatedEvidenceCountGQL: RelatedEvidenceCountGQL,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    networkErrorService: NetworkErrorsService
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = evidenceSubmitFields
    this.state = new EvidenceState()
    this.options = { formState: this.state }
    this.submitEvidenceMutator = new MutatorWithState(networkErrorService)
    this.routeSub = this.route.queryParams.subscribe((params) => {
      if (params.existingEvidenceId) {
        this.existingEvidenceId = +params.existingEvidenceId
        this.state.formMode = 'clone'
      } else {
        this.model = { fields: {} }
      }
    })
  }

  ngOnInit(): void {
    this.countQueryRef = this.existingEvidenceGQL.watch({
      molecularProfileId: 0,
      sourceId: 0,
    })
    this.curatedQueryRef = this.fullyCuratedSourceGQL.watch({ sourceId: 0 })
    this.relatedCountQueryRef = this.relatedEvidenceCountGQL.watch({
      molecularProfileId: 0,
      sourceId: 0,
    })

    this.existingEvidenceCount$ = this.countQueryRef?.valueChanges.pipe(
      map((c) => c.data?.evidenceItems?.totalCount),
      filter(isNonNulled),
      untilDestroyed(this)
    )
    this.fullyCuratedSource$ = this.curatedQueryRef?.valueChanges.pipe(
      map((c) => c.data?.source?.fullyCurated),
      untilDestroyed(this)
    )
    this.relatedEvidenceCount$ = this.relatedCountQueryRef?.valueChanges.pipe(
      map((c) => c.data?.evidenceItems?.totalCount),
      filter(isNonNulled),
      untilDestroyed(this)
    )
  }

  ngAfterViewInit(): void {
    if (this.existingEvidenceId) {
      this.revisableFieldsGQL
        .fetch({ evidenceId: this.existingEvidenceId })
        .pipe(untilDestroyed(this))
        .subscribe({
          next: ({ data: { evidenceItem } }) => {
            if (evidenceItem) {
              this.model = {
                fields: evidenceToModelFields(evidenceItem),
              }
              //clear statement on cloned EIDs
              this.model.fields.description = undefined
              this.cdr.detectChanges()
            }
          },
          error: (error) => {
            console.error('Error retrieving evidenceItem.')
            console.error(error)
          },
          complete: () => {
            this.state.formReady$.next(true)
          },
        })
    } else {
      this.state.formReady$.next(true)
    }
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
      if (
        newModel.fields.sourceId != this.selectedSourceId ||
        newModel.fields.molecularProfileId != this.selectedMpId
      ) {
        this.selectedSourceId = newModel.fields.sourceId
        this.selectedMpId = newModel.fields.molecularProfileId
        this.countQueryRef?.refetch({
          molecularProfileId: newModel.fields.molecularProfileId,
          sourceId: newModel.fields.sourceId,
        })
        console.log(newModel.fields.sourceId)
        this.relatedCountQueryRef?.refetch({
          molecularProfileId: newModel.fields.molecularProfileId,
          sourceId: newModel.fields.sourceId,
        })
      }
    } else {
      this.countQueryRef?.refetch({ molecularProfileId: 0, sourceId: 0 })
    }

    if (newModel.fields.sourceId) {
      if (newModel.fields.sourceId != this.selectedSourceId) {
        this.selectedSourceId = newModel.fields.sourceId
        this.curatedQueryRef?.refetch({ sourceId: this.selectedSourceId })
      }
    } else {
      this.selectedSourceId = undefined
      this.curatedQueryRef?.refetch({ sourceId: 0 })
    }
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
    this.routeSub.unsubscribe()
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import {
  MolecularProfileRevisableFieldsGQL,
  SuggestMolecularProfileRevisionGQL,
  SuggestMolecularProfileRevisionMutation,
  SuggestMolecularProfileRevisionMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MolecularProfileReviseModel } from '@app/forms/models/molecular-profile-revise.model'
import {
  molecularProfileFormModelToReviseInput,
  molecularProfileToModelFields,
} from '@app/forms/utilities/molecular-profile-to-model-fields'
import { molecularProfileReviseFields } from './molecular-profile-revise.form.config'

@UntilDestroy()
@Component({
  selector: 'cvc-mp-revise-form',
  templateUrl: './molecular-profile-revise.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcMolecularProfileReviseForm implements OnInit, AfterViewInit {
  @Input() molecularProfileId!: number
  model?: MolecularProfileReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: FormlyFormOptions

  reviseEvidenceMutator: MutatorWithState<
    SuggestMolecularProfileRevisionGQL,
    SuggestMolecularProfileRevisionMutation,
    SuggestMolecularProfileRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: MolecularProfileRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestMolecularProfileRevisionGQL,
    private cdr: ChangeDetectorRef,
    networkErrorService: NetworkErrorsService
  ) {
    this.form = new UntypedFormGroup({})
    this.options = { formState: { isSimpleMp: undefined } }

    this.fields = molecularProfileReviseFields
    this.reviseEvidenceMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit(): void {
    this.url = `/molecular-profiles/${this.molecularProfileId}/revisions`
  }

  ngAfterViewInit(): void {
    this.revisableFieldsGQL
      .fetch({ molecularProfileId: this.molecularProfileId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { molecularProfile } }) => {
          if (molecularProfile) {
            this.options.formState.isSimpleMp = !molecularProfile.isComplex

            this.model = {
              id: molecularProfile.id,
              fields: molecularProfileToModelFields(molecularProfile),
            }
            this.cdr.detectChanges()
          }
        },
        error: (error) => {
          console.error('Error retrieving MolecularProfile.')
          console.error(error)
        },
        complete: () => {},
      })
  }

  onSubmit(model: MolecularProfileReviseModel) {
    if (!this.molecularProfileId) {
      return
    }
    let input = molecularProfileFormModelToReviseInput(
      this.molecularProfileId,
      model
    )
    if (input) {
      this.mutationState = this.reviseEvidenceMutator.mutate(
        this.submitRevisionsGQL,
        { input: input }
      )
    }
  }
}

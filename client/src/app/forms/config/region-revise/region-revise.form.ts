import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { RegionRevisableFieldsGQL, SuggestRegionRevisionGQL, SuggestRegionRevisionMutation, SuggestRegionRevisionMutationVariables } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { MutationState, MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { RegionReviseModel } from '@app/forms/models/region-revise.model'
import { regionFormModelToReviseInput, regionToModelFields } from '@app/forms/utilities/region-to-model-fields'
import { regionReviseFields } from './region-revise.form.config'

@UntilDestroy()
@Component({
    selector: 'cvc-region-revise-form',
    templateUrl: './region-revise.form.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcRegionReviseForm implements OnInit, AfterViewInit {
  @Input() featureId!: number
  model?: RegionReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  reviseRegionMutator: MutatorWithState<
    SuggestRegionRevisionGQL,
    SuggestRegionRevisionMutation,
    SuggestRegionRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: RegionRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestRegionRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = regionReviseFields
    this.reviseRegionMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    this.url = `/features/${this.featureId}/revisions`
  }

  ngAfterViewInit(): void {
    this.revisableFieldsGQL
      .fetch({ featureId: this.featureId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { feature } }) => {
          if (feature) {
            this.model = {
              id: feature.id,
              fields: regionToModelFields(feature),
            }
            this.cdr.detectChanges()
          }
        },
        error: (error) => {
          console.error('Error retrieving Region.')
          console.error(error)
        },
        complete: () => {
        },
      })
  }

  onSubmit(model: RegionReviseModel) {
    if(!this.featureId) {return}
    let input = regionFormModelToReviseInput(this.featureId, model)
    if (input) {
      this.mutationState = this.reviseRegionMutator.mutate(this.submitRevisionsGQL, { input: input})
    }
  }
}

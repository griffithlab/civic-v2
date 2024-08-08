import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { FusionVariantReviseModel } from '@app/forms/models/fusion-variant-revise.model'
import {
  FusionPartnerStatus,
  FusionVariantRevisableFieldsGQL,
  SuggestFusionVariantRevisionGQL,
  SuggestFusionVariantRevisionMutation,
  SuggestFusionVariantRevisionMutationVariables,
} from '@app/generated/civic.apollo'
import { fusionVariantReviseFields } from './fusion-variant-revise.form.config'
import {
  fusionVariantFormModelToReviseInput,
  fusionVariantToModelFields,
} from '@app/forms/utilities/fusion-variant-to-model-fields'

@UntilDestroy()
@Component({
  selector: 'cvc-fusion-variant-revise-form',
  templateUrl: './fusion-variant-revise.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFusionVariantReviseForm implements OnInit, AfterViewInit {
  @Input() variantId!: number
  model?: FusionVariantReviseModel
  form: UntypedFormGroup
  fields?: FormlyFieldConfig[]

  reviseVariantMutator: MutatorWithState<
    SuggestFusionVariantRevisionGQL,
    SuggestFusionVariantRevisionMutation,
    SuggestFusionVariantRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: FusionVariantRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestFusionVariantRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.reviseVariantMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    this.url = `/variants/${this.variantId}/revisions`
  }

  ngAfterViewInit(): void {
    this.revisableFieldsGQL
      .fetch({ variantId: this.variantId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { variant } }) => {
          if (
            variant &&
            variant.__typename == 'FusionVariant' &&
            variant.feature.featureInstance.__typename == 'Fusion'
          ) {
            const fivePrimeDisabled =
              variant.feature.featureInstance.fivePrimePartnerStatus !=
              FusionPartnerStatus.Known
            const threePrimeDisabled =
              variant.feature.featureInstance.threePrimePartnerStatus !=
              FusionPartnerStatus.Known
            this.fields = fusionVariantReviseFields(
              fivePrimeDisabled,
              threePrimeDisabled
            )
            this.model = {
              id: variant.id,
              fields: fusionVariantToModelFields(variant),
            }
            this.cdr.detectChanges()
          }
        },
        error: (error) => {
          console.error('Error retrieving Variant.')
          console.error(error)
        },
        complete: () => {},
      })
  }

  onSubmit(model: FusionVariantReviseModel) {
    if (!this.variantId) {
      return
    }
    let input = fusionVariantFormModelToReviseInput(this.variantId, model)
    if (input) {
      this.mutationState = this.reviseVariantMutator.mutate(
        this.submitRevisionsGQL,
        { input: input }
      )
    }
  }
}

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
import { RegionVariantReviseModel } from '@app/forms/models/region-variant-revise.model'
import {
  RegionVariantRevisableFieldsGQL,
  SuggestRegionVariantRevisionGQL,
  SuggestRegionVariantRevisionMutation,
  SuggestRegionVariantRevisionMutationVariables,
} from '@app/generated/civic.apollo'
import { regionVariantReviseFields } from './region-variant-revise.form.config'
import {
  regionVariantFormModelToReviseInput,
  regionVariantToModelFields,
} from '@app/forms/utilities/region-variant-to-model-fields'

@UntilDestroy()
@Component({
    selector: 'cvc-region-variant-revise-form',
    templateUrl: './region-variant-revise.form.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcRegionVariantReviseForm implements OnInit, AfterViewInit {
  @Input() variantId!: number
  model?: RegionVariantReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  reviseVariantMutator: MutatorWithState<
    SuggestRegionVariantRevisionGQL,
    SuggestRegionVariantRevisionMutation,
    SuggestRegionVariantRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: RegionVariantRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestRegionVariantRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = regionVariantReviseFields
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
          if (variant && variant.__typename == 'RegionVariant') {
            this.model = {
              id: variant.id,
              fields: regionVariantToModelFields(variant),
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

  onSubmit(model: RegionVariantReviseModel) {
    if (!this.variantId) {
      return
    }
    let input = regionVariantFormModelToReviseInput(this.variantId, model)
    if (input) {
      this.mutationState = this.reviseVariantMutator.mutate(
        this.submitRevisionsGQL,
        { input: input }
      )
    }
  }
}

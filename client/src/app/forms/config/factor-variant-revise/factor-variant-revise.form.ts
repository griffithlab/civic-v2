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
import { FactorVariantReviseModel } from '@app/forms/models/factor-variant-revise.model'
import {
  FactorVariantRevisableFieldsGQL,
  SuggestFactorVariantRevisionGQL,
  SuggestFactorVariantRevisionMutation,
  SuggestFactorVariantRevisionMutationVariables,
} from '@app/generated/civic.apollo'
import { factorVariantReviseFields } from './factor-variant-revise.form.config'
import {
  factorVariantFormModelToReviseInput,
  factorVariantToModelFields,
} from '@app/forms/utilities/factor-variant-to-model-fields'

@UntilDestroy()
@Component({
    selector: 'cvc-factor-variant-revise-form',
    templateUrl: './factor-variant-revise.form.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcFactorVariantReviseForm implements OnInit, AfterViewInit {
  @Input() variantId!: number
  model?: FactorVariantReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  reviseVariantMutator: MutatorWithState<
    SuggestFactorVariantRevisionGQL,
    SuggestFactorVariantRevisionMutation,
    SuggestFactorVariantRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: FactorVariantRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestFactorVariantRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = factorVariantReviseFields
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
          if (variant && variant.__typename == 'FactorVariant') {
            this.model = {
              id: variant.id,
              fields: factorVariantToModelFields(variant),
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

  onSubmit(model: FactorVariantReviseModel) {
    if (!this.variantId) {
      return
    }
    let input = factorVariantFormModelToReviseInput(this.variantId, model)
    if (input) {
      this.mutationState = this.reviseVariantMutator.mutate(
        this.submitRevisionsGQL,
        { input: input }
      )
    }
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { SuggestVariantRevisionGQL, SuggestVariantRevisionMutation, SuggestVariantRevisionMutationVariables, VariantRevisableFieldsGQL } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { MutationState, MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { VariantReviseModel } from '@app/forms/models/variant-revise.model'
import { variantReviseFields } from './variant-revise.form.config'
import { variantFormModelToReviseInput, variantToModelFields } from '@app/forms/utilities/variant-to-model-fields'

@UntilDestroy()
@Component({
  selector: 'cvc-variant-revise-form',
  templateUrl: './variant-revise.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcVariantReviseForm implements OnInit, AfterViewInit {
  @Input() variantId!: number
  model?: VariantReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  reviseVariantMutator: MutatorWithState<
    SuggestVariantRevisionGQL,
    SuggestVariantRevisionMutation,
    SuggestVariantRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: VariantRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestVariantRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = variantReviseFields
    this.reviseVariantMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    this.url = `/variants/${this.variantId }/revisions`
  }

  ngAfterViewInit(): void {
    this.revisableFieldsGQL
      .fetch({ variantId: this.variantId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { variant } }) => {
          if (variant) {
            this.model = {
              id: variant.id,
              fields: variantToModelFields(variant),
            }
            this.cdr.detectChanges()
          }
        },
        error: (error) => {
          console.error('Error retrieving Variant.')
          console.error(error)
        },
        complete: () => { },
      })
  }

  onSubmit(model: VariantReviseModel) {
    if(!this.variantId) {return}
    let input = variantFormModelToReviseInput(this.variantId, model)
    if (input) {
      this.mutationState = this.reviseVariantMutator.mutate(this.submitRevisionsGQL, { input: input})
    }
  }
}

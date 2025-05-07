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
  GeneVariantRevisableFieldsGQL,
  SuggestGeneVariantRevisionGQL,
  SuggestGeneVariantRevisionMutation,
  SuggestGeneVariantRevisionMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { GeneVariantReviseModel } from '@app/forms/models/gene-variant-revise.model'
import { geneVariantReviseFields } from './gene-variant-revise.form.config'
import {
  geneVariantFormModelToReviseInput,
  geneVariantToModelFields,
} from '@app/forms/utilities/gene-variant-to-model-fields'

@UntilDestroy()
@Component({
    selector: 'cvc-gene-variant-revise-form',
    templateUrl: './gene-variant-revise.form.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcGeneVariantReviseForm implements OnInit, AfterViewInit {
  @Input() variantId!: number
  model?: GeneVariantReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  reviseVariantMutator: MutatorWithState<
    SuggestGeneVariantRevisionGQL,
    SuggestGeneVariantRevisionMutation,
    SuggestGeneVariantRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: GeneVariantRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestGeneVariantRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = geneVariantReviseFields
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
          if (variant && variant.__typename == 'GeneVariant') {
            this.model = {
              id: variant.id,
              fields: geneVariantToModelFields(variant),
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

  onSubmit(model: GeneVariantReviseModel) {
    if (!this.variantId) {
      return
    }
    let input = geneVariantFormModelToReviseInput(this.variantId, model)
    if (input) {
      this.mutationState = this.reviseVariantMutator.mutate(
        this.submitRevisionsGQL,
        { input: input }
      )
    }
  }
}

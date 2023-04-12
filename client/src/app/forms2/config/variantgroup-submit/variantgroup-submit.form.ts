import {
  ChangeDetectorRef,
  Component,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { VariantGroupSubmitModel } from '@app/forms2/models/variant-group-submit.model'
import {
  variantGroupFormModelToInput,
} from '@app/forms2/utilities/variant-group-to-model-fields'
import {
  Maybe,
  SubmitVariantGroupGQL,
  SubmitVariantGroupMutation,
  SubmitVariantGroupMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { variantgroupSuggestFields } from './variantgroup-submit.form.config'

@UntilDestroy()
@Component({
  selector: 'cvc-variantgroup-submit-form',
  templateUrl: './variantgroup-submit.form.html',
  styleUrls: ['./variantgroup-submit.form.less'],
})
export class CvcVariantgroupSubmitForm {
  model: VariantGroupSubmitModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  submitVariantGroupMutator: MutatorWithState<
    SubmitVariantGroupGQL,
    SubmitVariantGroupMutation,
    SubmitVariantGroupMutationVariables
  >

  mutationState?: MutationState
  newVariantGroupId: Maybe<number>

  constructor(
    private submitVariantGroupGQL: SubmitVariantGroupGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.model = { fields: {} }
    this.fields = variantgroupSuggestFields

    this.submitVariantGroupMutator = new MutatorWithState(networkErrorService)
  }

  onSubmit(model: VariantGroupSubmitModel) {
    const input = variantGroupFormModelToInput(model)
    if (input) {
      this.mutationState = this.submitVariantGroupMutator.mutate(
        this.submitVariantGroupGQL,
        { input: input },
        undefined,
        (data) => {
          this.newVariantGroupId = data.submitVariantGroup?.variantGroup.id
        }
      )
    }
  }
}

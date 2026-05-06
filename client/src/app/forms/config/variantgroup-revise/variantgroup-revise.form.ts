import {
  AfterViewInit,
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
import { AssertionSubmitModel } from '@app/forms/models/assertion-submit.model'
import { VariantGroupReviseModel } from '@app/forms/models/variant-group-revise.model'
import {
  variantGroupFormModelToReviseInput,
  variantGroupToModelFields,
} from '@app/forms/utilities/variant-group-to-model-fields'
import {
  SuggestEvidenceItemRevisionGQL,
  SuggestVariantGroupRevisionGQL,
  SuggestVariantGroupRevisionMutation,
  SuggestVariantGroupRevisionMutationVariables,
  VariantGroupRevisableFieldsGQL,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { BehaviorSubject, Subject } from 'rxjs'
import { variantgroupSuggestFields } from './variantgroup-revise.form.config'

@UntilDestroy()
@Component({
    selector: 'cvc-variantgroup-revise-form',
    templateUrl: './variantgroup-revise.form.html',
    styleUrls: ['./variantgroup-revise.form.less'],
    standalone: false
})
export class CvcVariantgroupReviseForm
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() variantGroupId!: number
  model?: VariantGroupReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  state: { formReady$: Subject<boolean> }
  options: FormlyFormOptions

  reviseAssertionMutator: MutatorWithState<
    SuggestVariantGroupRevisionGQL,
    SuggestVariantGroupRevisionMutation,
    SuggestVariantGroupRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: VariantGroupRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestVariantGroupRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = variantgroupSuggestFields
    this.state = { formReady$: new Subject() }
    this.options = { formState: this.state }
    this.reviseAssertionMutator = new MutatorWithState(this.networkErrorService)
  }

  onSubmit(model: any) {
    console.log('------ Variant Group Suggestion Added ------')
    console.log(model)
    if (!this.variantGroupId) {
      return
    }
    let input = variantGroupFormModelToReviseInput(this.variantGroupId, model)
    if (input) {
      this.mutationState = this.reviseAssertionMutator.mutate(
        this.submitRevisionsGQL,
        { input: input }
      )
    }
  }

  ngOnInit() {
    this.url = `/variant-groups/${this.variantGroupId}/revisions`
  }

  ngOnDestroy(): void {
    // this.options.formState.onDestroy()
  }
  ngAfterViewInit(): void {
    this.revisableFieldsGQL
      .fetch({ variantGroupId: this.variantGroupId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { variantGroup } }) => {
          if (variantGroup) {
            this.model = {
              id: variantGroup.id,
              fields: variantGroupToModelFields(variantGroup),
            }
            // TODO: figure out if model can be assigned w/o detectChanges() here,
            // like with a model$ BehaviorSubject?
            this.cdr.detectChanges()
          }
        },
        error: (error) => {
          console.error('Error retrieving variantgroupItem.')
          console.error(error)
        },
        complete: () => {
          this.state.formReady$.next(true)
        },
      })
  }
}

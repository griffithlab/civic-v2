import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { AssertionSubmitModel } from '@app/forms2/models/assertion-submit.model'
import { VariantGroupReviseModel } from '@app/forms2/models/variant-group-revise.model'
import { variantGroupToModelFields } from '@app/forms2/utilities/variant-group-to-model-fields'
import { SuggestEvidenceItemRevision2GQL, SuggestVariantGroupRevision2GQL, VariantGroupRevisableFields2GQL } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { variantgroupSuggestFields } from './variantgroup-revise.form.config'

@UntilDestroy()
@Component({
  selector: 'cvc-variantgroup-revise-form',
  templateUrl: './variantgroup-revise.form.html',
  styleUrls: ['./variantgroup-revise.form.less'],
})
export class CvcVariantgroupReviseForm implements AfterViewInit, OnDestroy {
  @Input() variantGroupId!: number
  model: VariantGroupReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  // state: AssertionState
  // options: FormlyFormOptions

  constructor(
    private revisableFieldsGQL: VariantGroupRevisableFields2GQL,
    private submitRevisionsGQL: SuggestVariantGroupRevision2GQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.model = { fields: {} }
    this.fields = variantgroupSuggestFields
    // this.state = new AssertionState()
    // this.options = { formState: this.state}
  }

  onSubmit(model: any) {
    console.log('------ Variant Group Suggestion Added ------')
    console.log(model)
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
          // this.state.formReady$.next(true)
          console.log('variantgroup item retrieved.')
        },
      })

  }
}

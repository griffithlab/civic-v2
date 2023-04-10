import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { AssertionSubmitModel } from '@app/forms2/models/assertion-submit.model'
import { SuggestEvidenceItemRevision2GQL, VariantGroupRevisableFields2GQL } from '@app/generated/civic.apollo'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { variantgroupSuggestFields } from './variantgroup-revise.form.config'

@Component({
  selector: 'cvc-variantgroup-revise-form',
  templateUrl: './variantgroup-revise.form.html',
  styleUrls: ['./variantgroup-revise.form.less'],
})
export class CvcVariantgroupReviseForm implements AfterViewInit, OnDestroy {
  model: AssertionSubmitModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  // state: AssertionState
  // options: FormlyFormOptions

  constructor(
    private revisableFieldsGQL: VariantGroupRevisableFields2GQL,
    private submiteRevisionsGQL: SuggestEvidenceItemRevision2GQL,
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
  ngAfterViewInit(): void {}
}

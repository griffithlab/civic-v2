import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { SpecificationDetailConfigFieldsFragment, SpecificationFormConfigGQL } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { MutationState, MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { GeneReviseModel } from '@app/forms/models/gene-revise.model'
import assignFieldConfigDefaultValues from '@app/forms/utilities/assign-field-default-values'

@UntilDestroy()
@Component({
  selector: 'cvc-specification-submit-form',
  templateUrl: './specification-submit.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class CvcSpecificationSubmitForm implements OnInit, AfterViewInit {
  @Input() specificationId!: number
  // todo: make a type for this
  model = {}
  form: UntypedFormGroup
  fields?: FormlyFieldConfig[]
  specificationInfo?: SpecificationDetailConfigFieldsFragment

// reviseEvidenceMutator: MutatorWithState<
//   SuggestGeneRevisionGQL,
//   SuggestGeneRevisionMutation,
//   SuggestGeneRevisionMutationVariables
// >

mutationState?: MutationState
url?: string

constructor(
  private specificationConfigGQL: SpecificationFormConfigGQL,
  //private submitRevisionsGQL: SuggestGeneRevisionGQL,
  private networkErrorService: NetworkErrorsService,
  private cdr: ChangeDetectorRef
) {
  this.form = new UntypedFormGroup({})
  this.fields = undefined
  // this.reviseEvidenceMutator = new MutatorWithState(networkErrorService)
}

ngOnInit() {
  //this.url = `/features/${this.featureId}/revisions`
}

ngAfterViewInit(): void {
  this.specificationConfigGQL
  .fetch({ specificationId: this.specificationId})
  .pipe(untilDestroyed(this))
  .subscribe({
    next: ({ data: { specificationFormConfig  }}) => {
      if (specificationFormConfig) {
        this.specificationInfo = specificationFormConfig.specification

        this.fields = [
          {
          type: "cvc-field-stepper",
          wrappers: ['form-layout'],
          props: {
            showDevPanel: true,
          },
          fieldGroup: [
            {
              key: 'fields',
              wrappers: ['form-card'],
              props: {
                formCardOptions: { title: 'Curate Specification' },
                stepLabel: this.specificationInfo.name
              },
              fieldGroup: [
                {
                  key: 'name',
                  type: 'base-textarea',
                  wrappers: ['form-field'],
                  props: {
                    placeholder: 'Enter a Gene Summary',
                    label: 'Specification Name',
                    required: false,
                  },
                },

              ]
            },
            {
              key: 'fields2',
              wrappers: ['form-card'],
              props: {
                formCardOptions: { title: 'Curate Specification' },
              },
              fieldGroup: [
                {
                  key: 'name',
                  type: 'base-textarea',
                  wrappers: ['form-field'],
                  props: {
                    placeholder: 'Enter a Gene Summary',
                    label: 'Specification Name',
                    required: false,
                  },
                },

              ]
            }
          ]
        }
        ]
        this.model = {
          fields: {
            name: specificationFormConfig.specification.name
          }
        }
        this.cdr.detectChanges()
      }
    },
    error: (error) => {
      console.error('Error retrieving Config.')
      console.error(error)
    },
    complete: () => {
    },
  })
}

onSubmit() {
  // if(!this.featureId) {return}
  // let input = geneFormModelToReviseInput(this.featureId, model)
  // if (input) {
  //   this.mutationState = this.reviseEvidenceMutator.mutate(this.submitRevisionsGQL, { input: input})
  // }
}
}

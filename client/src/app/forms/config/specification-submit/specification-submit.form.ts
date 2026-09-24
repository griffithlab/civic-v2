import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  signal,
  effect,
  WritableSignal
} from '@angular/core'
import {
  KeyValue
} from '@angular/common'
import { UntypedFormGroup } from '@angular/forms'
import { Maybe, SpecificationDetailConfigFieldsFragment, SpecificationEvaluationStatus, SpecificationFormConfigGQL, ValidSpecificationsGQL } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { MutationState, MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { GeneReviseModel } from '@app/forms/models/gene-revise.model'
import assignFieldConfigDefaultValues from '@app/forms/utilities/assign-field-default-values'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'

@UntilDestroy()
@Component({
  selector: 'cvc-specification-submit-form',
  templateUrl: './specification-submit.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class CvcSpecificationSubmitForm implements OnInit, AfterViewInit {
  @Input() specificationId!: number
  @Input() assertionId: Maybe<number>
  // todo: make a type for this
  specificationModel = { "specification_fields": { "specification": undefined } }
  specificationForm: UntypedFormGroup
  specificationFormFields?: FormlyFieldConfig[]
  selectedSpecificationId =  signal('')
  validSpecifications: SpecificationDetailConfigFieldsFragment[] = []
  specificationInfo?: SpecificationDetailConfigFieldsFragment

  codesModel = {}
  codesForm: UntypedFormGroup
  codesFields?: FormlyFieldConfig[]

  evaluationStatuses = Object.values(SpecificationEvaluationStatus).map((v) => { return {label: v.replace("_", " ").toLowerCase(), value: v} })

// reviseEvidenceMutator: MutatorWithState<
//   SuggestGeneRevisionGQL,
//   SuggestGeneRevisionMutation,
//   SuggestGeneRevisionMutationVariables
// >

  mutationState?: MutationState
  url?: string

  constructor(
    private validSpecificationsGQL: ValidSpecificationsGQL,
    private specificationConfigGQL: SpecificationFormConfigGQL,
    //private submitRevisionsGQL: SuggestGeneRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.specificationForm = new UntypedFormGroup({})
    this.specificationFormFields = undefined
    this.codesForm = new UntypedFormGroup({})
    this.codesFields = undefined
    // this.reviseEvidenceMutator = new MutatorWithState(networkErrorService)

    effect(() => {
      const currentSpecificationId = +this.selectedSpecificationId()
      if (currentSpecificationId) {
        this.specificationConfigGQL
        .fetch({ specificationId: currentSpecificationId})
        .pipe(untilDestroyed(this))
        .subscribe({
          next: ({ data: { specificationFormConfig  }}) => {
            if (specificationFormConfig) {
              this.specificationInfo = specificationFormConfig.specification
              this.codesFields = [
                {
                  type: "cvc-field-stepper",
                  wrappers: ['form-layout'],
                  props: {
                    showDevPanel: true,
                  },
                  fieldGroup: specificationFormConfig.assessmentGroups.map((group) => {
                    return {
                      key: group.name,
                      wrappers: ['form-card'],
                      props: {
                        stepLabel: group.name,
                        formCardOptions: {
                          title: group.name,
                          infoString: group.description
                        },
                      },
                      fieldGroup: group.specificationCriterium.map((code) => {
                        return {
                          key: code.criterium,
                          wrappers: ['form-card'],
                          props: {
                            formCardOptions: {
                              title: code.criterium,
                              infoString: code.description
                            }
                          },
                          fieldGroup: [
                            {
                              wrappers: ['form-row'],
                              props: <CvcFormRowWrapperProps>{
                                formRowOptions: {
                                  span: 24,
                                },
                              },
                              fieldGroup: [
                                {
                                  key: "evaluation",
                                  wrappers: ['form-field'],
                                  type: "select",
                                  defaultValue: "NOT_EVALUATED",
                                  props: {
                                    label: "Evaluation",
                                    options: this.evaluationStatuses,
                                    required: true,
                                    change: (field, event) => {
                                      const sourceValue = field.formControl?.value;
                                      const criterium = field.parent?.parent?.key

                                      //set codes in the same assessment group to excluded
                                      if (sourceValue == 'MET') {
                                        const otherCodesInGroup = field.parent?.parent?.parent?.fieldGroup?.filter((c) => c.key != criterium)
                                        if (otherCodesInGroup) {
                                          otherCodesInGroup.map((c) => {
                                            if (c.fieldGroup) {
                                              const field = c.fieldGroup[0].fieldGroup?.find((field) => field.key == 'evaluation')
                                              if (field) {
                                                field.formControl?.setValue("EXCLUDED")
                                              }
                                            }
                                          })
                                        }
                                        //set mutual exclusive codes to excluded
                                        const mutuallyExclusiveCodes = code.mutuallyExclusiveCodes
                                        const allCodes = field.parent?.parent?.parent?.parent?.fieldGroup?.flatMap((c) => c.fieldGroup)
                                        if (allCodes) {
                                          for (const mutuallyExclusiveCode of mutuallyExclusiveCodes) {
                                            const exclusiveCode = allCodes.filter((c) => c && c.key == mutuallyExclusiveCode)
                                            if (exclusiveCode && exclusiveCode[0] && exclusiveCode[0].fieldGroup) {
                                              const field = exclusiveCode[0].fieldGroup[0].fieldGroup?.find((field) => field.key == 'evaluation')
                                              if (field) {
                                                field.formControl?.setValue("EXCLUDED")
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  key: "modifier",
                                  wrappers: ['form-field'],
                                  type: "select",
                                  props: {
                                    label: "Modifier",
                                    options: code.modifiers.map((m) => { return {label: m, value: m} }),
                                  },
                                  expressions: {
                                    'props.disabled': (field: FormlyFieldConfig) => {
                                      const evaluation = field.parent?.formControl?.get('evaluation')?.value
                                      return ['EXCLUDED', 'NOT_EVALUATED'].includes(evaluation)
                                    }
                                  },
                                },
                                {
                                  key: "justification",
                                  wrappers: ['form-field'],
                                  type: 'textarea',
                                  props: {
                                    label: "Justification",
                                  },
                                  expressions: {
                                    'props.disabled': (field: FormlyFieldConfig) => {
                                      const evaluation = field.parent?.formControl?.get('evaluation')?.value
                                      return ['EXCLUDED', 'NOT_EVALUATED'].includes(evaluation)
                                    }
                                  },
                                },
                                {
                                  key: 'evidenceItemIds',
                                  type: 'evidence-multi-select',
                                  props: {
                                    label: "Evidence Items",
                                    isMultiSelect: true,
                                  },
                                  expressions: {
                                    'props.disabled': (field: FormlyFieldConfig) => {
                                      const evaluation = field.parent?.formControl?.get('evaluation')?.value
                                      return ['EXCLUDED', 'NOT_EVALUATED'].includes(evaluation)
                                    }
                                  },
                                },
                              ],
                            },
                          ]
                        }
                      })
                    }
                  })
                }
              ]
              this.cdr.detectChanges()
            }
          }
        })
      }
    })
  }

  ngOnInit() {
    //this.url = `/features/${this.featureId}/revisions`
  }

  ngAfterViewInit(): void {
    if (this.assertionId) {
      this.validSpecificationsGQL
      .fetch({ assertionId: this.assertionId})
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { validSpecifications }}) => {
          if (validSpecifications) {
            this.validSpecifications = validSpecifications
            this.specificationFormFields = [
              {
                wrappers: ['form-layout'],
                props: {
                  showDevPanel: true,
                },
                fieldGroup: [
                  {
                    key: 'specification_fields',
                    wrappers: ['form-card'],
                    props: {
                      formCardOptions: { title: 'Curate Specification' },

                    },
                    fieldGroup: [
                      {
                        key: 'specification',
                        type: 'select',
                        wrappers: ['form-field'],
                        props: {
                          label: "Select Specification",
                          options: this.validSpecifications.map((s) => {return {label: s.name, value: s.id}})
                        }
                      },
                    ]
                  },
                ]
              }
            ]
            this.cdr.detectChanges()
          }
        }
      })
    }
  }

  onSubmit() {
    // if(!this.featureId) {return}
    // let input = geneFormModelToReviseInput(this.featureId, model)
    // if (input) {
    //   this.mutationState = this.reviseEvidenceMutator.mutate(this.submitRevisionsGQL, { input: input})
    // }
  }

  onSpecificationSelected(newModel: any) {
    this.selectedSpecificationId.set(newModel.specification_fields.specification)
  }

  preserveOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  }
}

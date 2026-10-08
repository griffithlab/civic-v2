import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  signal,
  effect,
  WritableSignal,
  Signal
} from '@angular/core'
import {
  KeyValue
} from '@angular/common'
import { UntypedFormGroup, FormGroup } from '@angular/forms'
import { toSignal } from '@angular/core/rxjs-interop'
import { QueryRef } from 'apollo-angular'
import { pluck, filter, tap } from 'rxjs/operators'
import { 
  Maybe,
  SpecificationDetailConfigFieldsFragment,
  SpecificationEvaluationStatus,
  SpecificationFormConfigGQL,
  ValidSpecificationsGQL,
  SubmitCriteriaEvaluationsGQL,
  SubmitCriteriaEvaluationsMutation,
  SubmitCriteriaEvaluationsMutationVariables,
  SubmitCriteriaEvaluationsInput,
  SpecificationEvaluationFields,
  CurrentAssertionSpecificationGQL,
  SpecificationEvaluationFieldsFragment,
  CurrentAssertionSpecificationQuery,
  CurrentAssertionSpecificationQueryVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { MutationState, MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import assignFieldConfigDefaultValues from '@app/forms/utilities/assign-field-default-values'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'
import { valueToObjectRepresentation } from '../../../../../node_modules/@apollo/client/utilities/index'

export interface SpecificationModel {
  specification_fields: {
    specification: Maybe<number>
  }
}

@UntilDestroy()
@Component({
  selector: 'cvc-specification-submit-form',
  templateUrl: './specification-submit.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class CvcSpecificationSubmitForm implements OnInit, AfterViewInit {
  @Input() assertionId!: number
  specificationModel: SpecificationModel = { "specification_fields": { "specification": undefined } }
  specificationForm: UntypedFormGroup
  specificationFormFields?: FormlyFieldConfig[]
  selectedSpecificationId = signal('')
  currentSpecificationId: WritableSignal<string> = signal("")
  currentEvaluations: WritableSignal<SpecificationEvaluationFieldsFragment[]> = signal([])

  validSpecifications: SpecificationDetailConfigFieldsFragment[] = []
  specificationInfo?: SpecificationDetailConfigFieldsFragment

  perGroupCodesModel: { 
    [key: string]: {
       [key: string]: {
         'evaluation': SpecificationEvaluationStatus,
         'modifier': Maybe<string>,
         'justification': Maybe<string>,
         'evidenceItemIds': number[]
       }
    }
  } = {}
  oneCodeModel: { 
    amp_category_fields?: {
      amp_category: string
      justification: Maybe<string>,
    }
  } = {}
  codesForm: UntypedFormGroup
  codesOptions: FormlyFormOptions = {};
  codesFields?: FormlyFieldConfig[]

  submitModel: { organizationId?: number } = {}
  submitForm = new UntypedFormGroup({})
  submitFields: FormlyFieldConfig[] = [
    {
      key: 'organizationId',
      type: 'org-submit-button',
      props: {
        submitLabel: 'Submit Evaluations',
        align: 'right',
      },
    },
  ]

  readonly evaluationSummaryDisplayMode = signal<string>('group');
  evaluationStatuses = Object.values(SpecificationEvaluationStatus).map((v) => { return {label: v.replace("_", " ").toLowerCase(), value: v} })

  submitCriteriaEvaluationsMutator: MutatorWithState<
    SubmitCriteriaEvaluationsGQL,
    SubmitCriteriaEvaluationsMutation,
    SubmitCriteriaEvaluationsMutationVariables
  >

  mutationState?: MutationState
  url?: string
  mode: 'create'|'revise' = 'create'

  constructor(
    private validSpecificationsGQL: ValidSpecificationsGQL,
    private currentAssertionSpecificationGQL: CurrentAssertionSpecificationGQL,
    private specificationConfigGQL: SpecificationFormConfigGQL,
    private submitCriteriaEvaluationsGQL: SubmitCriteriaEvaluationsGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.specificationForm = new UntypedFormGroup({})
    this.specificationFormFields = undefined
    this.codesForm = new UntypedFormGroup({})
    this.codesFields = undefined

    this.submitCriteriaEvaluationsMutator = new MutatorWithState(networkErrorService)

    effect(() => {
      const currentSpecificationId = +this.selectedSpecificationId()
      if (currentSpecificationId) {
        this.mode = 'revise'
        this.submitFields = [
          {
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Revise Evaluations',
              align: 'right',
            },
          },
        ]
        this.specificationConfigGQL
        .fetch({ specificationId: currentSpecificationId})
        .pipe(untilDestroyed(this))
        .subscribe({
          next: ({ data: { specificationFormConfig  }}) => {
            if (specificationFormConfig) {
              this.specificationInfo = specificationFormConfig.specification
              if (this.specificationInfo && this.specificationInfo.evaluationMethod == "ONE") {
                this.codesFields = [
                  {
                    wrappers: ['form-layout'],
                    props: {
                      showDevPanel: true,
                    },
                    fieldGroup: [
                      {
                        key: 'amp_category_fields',
                        wrappers: ['form-card'],
                        props: {
                          formCardOptions: { title: `Evaluate ${this.specificationInfo.name}` },

                        },
                        fieldGroup: [
                          {
                            wrappers: ['form-row'],
                            props: <CvcFormRowWrapperProps>{
                              formRowOptions: {
                              spanIndexed: [8, 16],
                              },
                            },
                            fieldGroup: [
                              {
                                key: 'amp_category',
                                type: 'select',
                                wrappers: ['form-field'],
                                props: {
                                  label: `Select ${this.specificationInfo.name}`,
                                  options: this.specificationInfo.specificationCriterium.map((c) => {return {label: c.criterium, value: c.criterium}}),
                                  required: true,
                                }
                              },
                              {
                                key: "justification",
                                wrappers: ['form-field'],
                                type: 'textarea',
                                props: {
                                  label: "Justification",
                                  attributes: {
                                    rows: 1
                                  }
                                },
                              },
                            ]
                          },
                        ],
                      },
                    ]
                  }
                  
                ]

              } else {
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
                        props: {
                          stepLabel: group.name,
                          infoString: group.description
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
                                  spanIndexed: [4, 4, 16, 24],
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
                                      extraInfo: {
                                        mutuallyExclusiveCodes: code.mutuallyExclusiveCodes,
                                      }
                                    },
                                    validators: {
                                      validation: [
                                        'evaluationConflictingCodes',
                                        'evaluationCrossGroupConflictingCodes'
                                      ]
                                    },
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
                                        const shouldDisable = ['EXCLUDED', 'NOT_EVALUATED', 'NOT_MET'].includes(evaluation)
                                        if (shouldDisable && field.formControl?.value !== null) {
                                          setTimeout(() => {
                                            field.formControl?.setValue(null) // Clears the form control value
                                          });
                                        }
                                        return shouldDisable
                                      }
                                    },
                                  },
                                  {
                                    key: "justification",
                                    wrappers: ['form-field'],
                                    type: 'textarea',
                                    props: {
                                      label: "Justification",
                                      attributes: {
                                        rows: 1
                                      }
                                    },
                                    expressions: {
                                      'props.disabled': (field: FormlyFieldConfig) => {
                                        const evaluation = field.parent?.formControl?.get('evaluation')?.value
                                        const shouldDisable =  ['NOT_EVALUATED'].includes(evaluation)
                                        if (shouldDisable && field.formControl?.value !== null) {
                                          setTimeout(() => {
                                            field.formControl?.setValue(null) // Clears the form control value
                                          });
                                        }
                                        return shouldDisable
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
                                        const shouldDisable = ['EXCLUDED', 'NOT_EVALUATED'].includes(evaluation)
                                        if (shouldDisable && field.formControl?.value !== null) {
                                          setTimeout(() => {
                                            field.formControl?.setValue(null) // Clears the form control value
                                          });
                                        }
                                        return shouldDisable
                                      }
                                    },
                                  },
                                ],
                              },
                            ]
                          }
                        })
                      }
                    }),
                    expressions: {
                      'hooks.onChanges': (field: FormlyFieldConfig) => {
                        this.validateAllFields(this.codesForm);
                      }
                    }
                  }
                ]
              }
              this.cdr.detectChanges()
            }
          }
        })
      }
    })
  }

  ngOnInit() {
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
                  //showDevPanel: true,
                },
                fieldGroup: [
                  {
                    key: 'specification_fields',
                    wrappers: ['form-card'],
                    props: {
                      formCardOptions: { title: 'Select Specification' },

                    },
                    fieldGroup: [
                      {
                        key: 'specification',
                        type: 'select',
                        wrappers: ['form-field'],
                        props: {
                          label: "Select Specification",
                          options: this.validSpecifications.map((s) => {return {label: `${s.name} (Version ${s.version})`, value: s.id}}),
                          required: true,
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

      this.currentAssertionSpecificationGQL
      .fetch({ assertionId: this.assertionId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { assertion }}) => {
          if (assertion) {
            if (assertion.latestSpecification) {
              this.currentSpecificationId.set(String(assertion.latestSpecification.id))
              this.selectedSpecificationId.set(String(assertion.latestSpecification.id))
              this.specificationModel = { "specification_fields": { "specification":  assertion.latestSpecification.id} }
            }
            if (assertion.latestSpecificationEvaluations){
              this.currentEvaluations.set(assertion.latestSpecificationEvaluations)
              if (assertion.latestSpecification && assertion.latestSpecification.evaluationMethod == "ONE") {
                let met_category = this.currentEvaluations().find(e => e.evaluation == SpecificationEvaluationStatus.Met)
                if (met_category) {
                  this.oneCodeModel = {
                    'amp_category_fields': {
                      'amp_category': met_category.code,
                      'justification': met_category.justification,
                    }
                  }
                }
              } else {
                assertion.latestSpecificationEvaluations.forEach((evaluation: SpecificationEvaluationFieldsFragment) => {
                  let group = evaluation.specificationCriterium.assessmentGroup
                  if (group) {
                    if (group in this.perGroupCodesModel) {
                      this.perGroupCodesModel[group][evaluation.code] = {
                          'evaluation': evaluation.evaluation,
                          'modifier': evaluation.modifier,
                          'justification': evaluation.justification,
                          'evidenceItemIds': evaluation.evidenceItems.map((eid) => eid.id)
                      }
                    } else {
                      this.perGroupCodesModel[group] = {}
                      this.perGroupCodesModel[group][evaluation.code] = {
                          'evaluation': evaluation.evaluation,
                          'modifier': evaluation.modifier,
                          'justification': evaluation.justification,
                          'evidenceItemIds': evaluation.evidenceItems.map((eid) => eid.id)
                      }
                    }
                  }
                })
              }
            }
            this.cdr.detectChanges()
          }
        }
      })
    }
  }

  validateAllFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFields(control);
      } else if (control) {
        // updates value & re-runs all validators for this specific field
        control.updateValueAndValidity({ emitEvent: false }); 
      }
    });
  }

  onSubmit() {
    if (!this.assertionId) {return}
    if (!this.codesFields) {return}
    if (!this.codesForm.valid) {return}
    if (this.specificationInfo && this.specificationInfo.evaluationMethod == "ONE" && this.oneCodeModel.amp_category_fields) {
      let input: SubmitCriteriaEvaluationsInput = {
        fields: {
          assertionId: this.assertionId,
          specificationId: +this.selectedSpecificationId(),
          evaluations: [{
            specificationCriterium: this.oneCodeModel.amp_category_fields.amp_category,
            evaluation: SpecificationEvaluationStatus.Met,
            modifier: undefined,
            justification: this.oneCodeModel.amp_category_fields.justification ? this.oneCodeModel.amp_category_fields.justification : undefined,
            evidenceItemIds: []
          }],
        },
        organizationId: this.submitModel.organizationId,
      }
      this.mutationState = this.submitCriteriaEvaluationsMutator.mutate(this.submitCriteriaEvaluationsGQL, { input: input })
      if (this.mode == 'create') {
        this.url = `/assertions/${this.assertionId}/summary`
      } else if (this.mode == 'revise') {
        this.url = `/assertions/${this.assertionId}/revisions`
      }
    } else {
      let evaluations: SpecificationEvaluationFields[] = Object.entries(Object.assign({}, ...Object.values(this.perGroupCodesModel))).map(([key, value]: [string, any]) => { 
        return {
          specificationCriterium: key,
          evaluation: value.evaluation,
          modifier: value.modifier,
          justification: value.justification ? value.justification : undefined,
          evidenceItemIds: value.evidenceItemIds ? value.evidenceItemIds : [],
        }
      })
      let input: SubmitCriteriaEvaluationsInput = {
        fields: {
          assertionId: this.assertionId,
          specificationId: +this.selectedSpecificationId(),
          evaluations: evaluations,
        },
        organizationId: this.submitModel.organizationId,
      }
      this.mutationState = this.submitCriteriaEvaluationsMutator.mutate(this.submitCriteriaEvaluationsGQL, { input: input })
      if (this.mode == 'create') {
        this.url = `/assertions/${this.assertionId}/codes`
      } else if (this.mode == 'revise') {
        this.url = `/assertions/${this.assertionId}/revisions`
      }
    }
  }

  onSpecificationSelected(newModel: any) {
    this.selectedSpecificationId.set(newModel.specification_fields.specification)
    this.perGroupCodesModel = {}
    if (this.selectedSpecificationId() == this.currentSpecificationId()){
      if (this.specificationInfo && this.specificationInfo.evaluationMethod == "ONE") {
        let met_category = this.currentEvaluations().find(e => e.evaluation == SpecificationEvaluationStatus.Met)
        if (met_category) {
          this.oneCodeModel = {
            'amp_category_fields': {
              'amp_category': met_category.code,
              'justification': met_category.justification,
            }
          }
        }
      } else {
        this.currentEvaluations().forEach((evaluation: SpecificationEvaluationFieldsFragment) => {
          let group = evaluation.specificationCriterium.assessmentGroup
          if (group) {
            if (group in this.perGroupCodesModel) {
              this.perGroupCodesModel[group][evaluation.code] = {
                  'evaluation': evaluation.evaluation,
                  'modifier': evaluation.modifier,
                  'justification': evaluation.justification,
                  'evidenceItemIds': evaluation.evidenceItems.map((eid) => eid.id)
              }
            } else {
              this.perGroupCodesModel[group] = {}
              this.perGroupCodesModel[group][evaluation.code] = {
                  'evaluation': evaluation.evaluation,
                  'modifier': evaluation.modifier,
                  'justification': evaluation.justification,
                  'evidenceItemIds': evaluation.evidenceItems.map((eid) => eid.id)
              }
            }
          }
        })
      }
    }
    this.codesFields = []
  }

  preserveOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  }

  sortByStrength(model: {}) {
    const codes = Object.assign({}, ...Object.values(model))
    const sortOrder = ["OVS1", "OS1", "OS2", "OS3", "OM1", "OM2", "OM3", "OM4", "OP1", "OP2", "OP3", "OP4", "SBVS1", "SBS1", "SBS2", "SBP1", "SBP2", "N/A"]
    const sortedCodes = sortOrder.reduce<Record<string, any>>((accumulator, key) => {
      if (key in codes) {
        accumulator[key] = codes[key];
      }
      return accumulator;
    }, {});
    if (Object.keys(sortedCodes).length === 0) {
      return codes
    } else {
      return sortedCodes
    }
  }
  
  descriptionForCode(code: string): string {
    let criterium = this.specificationInfo?.specificationCriterium.find((c) => c.criterium == code)
    if (criterium) {
      return criterium.description
    }
    return ''
  }
}

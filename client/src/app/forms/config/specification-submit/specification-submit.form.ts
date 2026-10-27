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
} from '@angular/core'
import {
  KeyValue
} from '@angular/common'
import { UntypedFormGroup, FormGroup } from '@angular/forms'
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
  SpecificationEvaluation,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { MutationState, MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'

export interface SpecificationModel {
  specification_fields: {
    specification: Maybe<number>
  }
}

export interface EvaluationModelField {
  'evaluation': SpecificationEvaluationStatus,
  'modifier': Maybe<string>,
  'justification': Maybe<string>,
  'evidenceItemIds': number[]
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
  latestSpecificationId: WritableSignal<number> = signal(0)
  allSpecificationIds: WritableSignal<number[]> = signal([])
  allEvaluations: WritableSignal<SpecificationEvaluationFieldsFragment[]> = signal([])

  validSpecifications: SpecificationDetailConfigFieldsFragment[] = []
  specificationInfo?: SpecificationDetailConfigFieldsFragment

  perGroupCodesModel: { 
    [key: string]: {
       [key: string]: EvaluationModelField
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
      const specId = +this.selectedSpecificationId()
      if (specId) {
        this.mode = 'revise'
        this.submitFields = [
          {
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: this.allEvaluations().length > 0 ? 'Revise Evaluations' : 'Submit Evaluations',
              align: 'right',
            },
          },
        ]
        this.specificationConfigGQL
        .fetch({ specificationId: specId})
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
                      showDevPanel: false,
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
                                  options: this.specificationInfo.specificationCriteria.map((c) => {return {label: c.criterion, value: c.criterion}}),
                                  required: true,
                                }
                              },
                              {
                                key: "justification",
                                wrappers: ['form-field'],
                                type: 'textarea',
                                props: {
                                  label: "Justification",
                                  placeholder: "Provide a justification for the chosen evaluation.",
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
                if (this.allSpecificationIds().includes(specId)){
                  let met_category = this.allEvaluations().find(e => e.evaluation === SpecificationEvaluationStatus.Met && e.specificationCriterion.specification.id === specId)
                  if (met_category) {
                    this.oneCodeModel = {
                      'amp_category_fields': {
                        'amp_category': met_category.code,
                        'justification': met_category.justification,
                      }
                    }
                  }
                } else {
                  this.oneCodeModel = {}
                }
              } else if (this.specificationInfo && this.specificationInfo.evaluationMethod != "ONE") {
                this.codesFields = [
                  {
                    type: "cvc-field-stepper",
                    wrappers: ['form-layout'],
                    props: {
                      showDevPanel: false,
                    },
                    fieldGroup: specificationFormConfig.assessmentGroups.map((group) => {
                      return {
                        key: group.name,
                        props: {
                          stepLabel: group.name,
                          infoString: group.description
                        },
                        fieldGroup: group.specificationCriteria.map((code) => {
                          return {
                            key: code.criterion,
                            wrappers: ['form-card'],
                            props: {
                              formCardOptions: {
                                title: code.criterion,
                                infoString: code.description
                              }
                            },
                            fieldGroup: [
                              {
                                wrappers: ['form-row'],
                                props: <CvcFormRowWrapperProps>{
                                  formRowOptions: {
                                  spanIndexed: [4, 6, 14, 24],
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
                                    validation: { show: true },
                                  },
                                  <FormlyFieldConfig>{
                                    key: "modifier",
                                    wrappers: ['form-field'],
                                    type: "select",
                                    props: {
                                      label: "Modifier",
                                      options: code.modifiers.map((m) => { return {label: m, value: m} }),
                                      extraInfo: {
                                        optionsLength: code.modifiers.length
                                      },
                                      description: code.modifiers.length > 0 ? "" : "No modifiers available for this code"
                                    },
                                    expressions: {
                                      'props.disabled': (field: FormlyFieldConfig) => {
                                        const evaluation = field.parent?.formControl?.get('evaluation')?.value
                                        const hasModifiers = code.modifiers.length > 0
                                        const shouldDisable = ['EXCLUDED', 'NOT_EVALUATED', 'NOT_MET'].includes(evaluation) || !hasModifiers
                                        if (shouldDisable && field.formControl?.value !== null) {
                                          setTimeout(() => {
                                            field.formControl?.setValue(null) // Clears the form control value
                                          });
                                        }
                                        return shouldDisable
                                      },
                                      'props.description': (field: FormlyFieldConfig) => {
                                        const evaluation = field.parent?.formControl?.get('evaluation')?.value
                                        const isMet = evaluation === 'MET'
                                        const hasModifiers = code.modifiers.length > 0
                                        if (!isMet) {
                                          return "Modifier selection unavailable unless code is met."
                                        } else if (!hasModifiers) {
                                          return "No modifiers available for this code."
                                        } else {
                                          return ''
                                        }
                                      }
                                    },
                                  },
                                  <FormlyFieldConfig>{
                                    key: "justification",
                                    wrappers: ['form-field'],
                                    type: 'textarea',
                                    props: {
                                      label: "Justification",
                                      placeholder: "Provide a justification for the chosen evaluation.",
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
                                      },
                                      'props.description': (field: FormlyFieldConfig) => {
                                        const evaluation = field.parent?.formControl?.get('evaluation')?.value
                                        if (evaluation == 'NOT_EVALUATED') {
                                          return 'Justification unavailable for "not met" evaluations'
                                        } else {
                                          return ''
                                        }
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
                if (this.allSpecificationIds().includes(specId)) {
                  this.perGroupCodesModel = {}
                  this.allEvaluations().filter((e) => e.specificationCriterion.specification.id === specId).forEach((evaluation: SpecificationEvaluationFieldsFragment) => {
                    let group = evaluation.specificationCriterion.assessmentGroup
                    if (group) {
                      this.perGroupCodesModel = {
                        ...this.perGroupCodesModel,
                        [group]: {
                          ...this.perGroupCodesModel[group],
                          [evaluation.code]: {
                            'evaluation': evaluation.evaluation,
                            'modifier': evaluation.modifier,
                            'justification': evaluation.justification,
                            'evidenceItemIds': evaluation.evidenceItems.map((eid) => eid.id)
                          }
                        }
                      }
                    }
                  })
                } else {
                  this.perGroupCodesModel = {}
                  const parentSpecId = this.specificationInfo.parentSpecification?.id
                  specificationFormConfig.assessmentGroups.forEach((group) => {
                    group.specificationCriteria.forEach((criterion) => {
                      let portedEvaluation: EvaluationModelField = {
                        'evaluation': SpecificationEvaluationStatus.NotEvaluated,
                        'modifier': undefined,
                        'justification': undefined,
                        'evidenceItemIds': [],
                      }
                      if (parentSpecId) {
                        const parentEvaluation = this.allEvaluations().find(evaluation => evaluation.code === criterion.criterion && evaluation.specificationCriterion.specification.id === parentSpecId)
                        const parentModifier = parentEvaluation?.modifier && criterion.modifiers.includes(parentEvaluation.modifier) ? parentEvaluation.modifier : undefined
                        if (parentEvaluation) {
                          portedEvaluation = {
                            'evaluation': parentEvaluation.evaluation,
                            'modifier': parentModifier,
                            'justification': parentEvaluation.justification,
                            'evidenceItemIds': parentEvaluation.evidenceItems.map((evidence) => evidence.id),
                          }
                        }
                      }
                      this.perGroupCodesModel = {
                        ...this.perGroupCodesModel,
                        [group.name]: {
                          ...this.perGroupCodesModel[group.name],
                          [criterion.criterion]: portedEvaluation
                        }
                      }
                      
                    })
                  })
                }
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
                  showDevPanel: false,
                },
                fieldGroup: [
                  {
                    key: 'specification_fields',
                    fieldGroup: [
                      {
                        key: 'specification',
                        type: 'select',
                        wrappers: ['form-field'],
                        props: {
                          label: "Select Specification",
                          options: this.validSpecifications.map((s) => {return {label: `${s.name} (v${s.version})`, value: s.id}}),
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
              this.latestSpecificationId.set(assertion.latestSpecification.id)
              this.selectedSpecificationId.set(String(assertion.latestSpecification.id))
              this.specificationModel = { "specification_fields": { "specification":  assertion.latestSpecification.id} }
            }
            if (assertion.specificationEvaluations){
              this.allEvaluations.set(assertion.specificationEvaluations)
            }
            if (assertion.specifications) {
              this.allSpecificationIds.set(assertion.specifications.map(spec => spec.id))
            }
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
            specificationCriterion: this.oneCodeModel.amp_category_fields.amp_category,
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
          specificationCriterion: key,
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
  }

  preserveOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  }

  groupsForStrength(model: {}, strength: string): {} | undefined {
    let values = Object.values(model)
    let results = Object.fromEntries(Object.entries(Object.assign({}, ...values)).filter(([key]) => key.startsWith(strength)))
    if (Object.keys(results).length > 0) {
      return results
    } else {
      return undefined
    }
  }

  otherCriteria(model: {}, opGroups: {}, bGroups: {}): {} | undefined {
    let values = Object.values(model)
    let opKeys = Object.keys(opGroups)
    let bKeys = Object.keys(bGroups)
    let results = Object.fromEntries(Object.entries(Object.assign({}, ...values)).filter(([key]) => opKeys.every(prefix => !key.startsWith(prefix)) && bKeys.every(prefix => !key.startsWith(prefix))))
    if (Object.keys(results).length > 0) {
      return results
    } else {
      return undefined
    }
  }
  
  descriptionForCode(code: string): string {
    let criterion = this.specificationInfo?.specificationCriteria.find((c) => c.criterion == code)
    if (criterion) {
      return criterion.description
    }
    return ''
  }
}

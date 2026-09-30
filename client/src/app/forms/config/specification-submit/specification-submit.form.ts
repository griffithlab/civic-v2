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
import { UntypedFormGroup, FormGroup } from '@angular/forms'
import { filter, tap } from 'rxjs/operators'
import { Maybe, SpecificationDetailConfigFieldsFragment, SpecificationEvaluationStatus, SpecificationFormConfigGQL, ValidSpecificationsGQL, SubmitCriteriaEvaluationsGQL, SubmitCriteriaEvaluationsMutation, SubmitCriteriaEvaluationsMutationVariables, SubmitCriteriaEvaluationsInput, SpecificationEvaluationFields } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { MutationState, MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import assignFieldConfigDefaultValues from '@app/forms/utilities/assign-field-default-values'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'
import { valueToObjectRepresentation } from '../../../../../node_modules/@apollo/client/utilities/index'

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
  codesOptions: FormlyFormOptions = {};
  codesFields?: FormlyFieldConfig[]

  readonly evaluationSummaryDisplayMode = signal<string>('group');
  evaluationStatuses = Object.values(SpecificationEvaluationStatus).map((v) => { return {label: v.replace("_", " ").toLowerCase(), value: v} })

  submitCriteriaEvaluationsMutator: MutatorWithState<
    SubmitCriteriaEvaluationsGQL,
    SubmitCriteriaEvaluationsMutation,
    SubmitCriteriaEvaluationsMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private validSpecificationsGQL: ValidSpecificationsGQL,
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
                                      return ['EXCLUDED', 'NOT_EVALUATED', 'NOT_MET'].includes(evaluation)
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
                                      return ['NOT_EVALUATED'].includes(evaluation)
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
                  }),
                  expressions: {
                    'hooks.onChanges': (field: FormlyFieldConfig) => {
                      this.validateAllFields(this.codesForm);
                    }
                  }
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
    let evaluations: SpecificationEvaluationFields[] = Object.entries(Object.assign({}, ...Object.values(this.codesModel))).map(([key, value]: [string, any]) => { 
      return {
        specificationCriterium: key,
        evaluation: value.evaluation,
        modifier: value.modifier,
        justification: value.justification,
        evidenceItemIds: value.evidenceItemIds ? value.evidenceItemIds : [],
      }
    })
    let input: SubmitCriteriaEvaluationsInput = {
      fields: {
        assertionId: this.assertionId,
        specificationId: +this.selectedSpecificationId(),
        evaluations: evaluations,
      },
      organizationId: 1
      //organizationId: this.codesModel.organizationId,
      //comment: this.codesModel.comment!,
    }
    this.mutationState = this.submitCriteriaEvaluationsMutator.mutate(this.submitCriteriaEvaluationsGQL, { input: input })
  }

  onSpecificationSelected(newModel: any) {
    this.selectedSpecificationId.set(newModel.specification_fields.specification)
  }

  preserveOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  }

  sortByStrength(model: {}) {
    const codes = Object.assign({}, ...Object.values(model))
    const sortOrder = ["OVS1", "OS1", "OS2", "OS3", "OM1", "OM2", "OM3", "OM4", "OP1", "OP2", "OP3", "OP4", "SBVS1", "SBS1", "SBS2", "SBP1", "SBP2"]
    const sortedCodes = sortOrder.reduce<Record<string, any>>((accumulator, key) => {
      if (key in codes) {
        accumulator[key] = codes[key];
      }
      return accumulator;
    }, {});
    return sortedCodes
  }
}

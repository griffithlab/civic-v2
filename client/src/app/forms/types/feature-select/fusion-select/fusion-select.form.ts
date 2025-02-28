import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core'
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms'
import {
  FeatureInstanceTypes,
  FusionPartnerStatus,
  Maybe,
  RegulatoryFusionType,
  SelectOrCreateFusionGQL,
  SelectOrCreateFusionMutation,
  SelectOrCreateFusionMutationVariables,
} from '@app/generated/civic.apollo'
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyModule,
} from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { CommonModule } from '@angular/common'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { RouterModule } from '@angular/router'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { UntilDestroy } from '@ngneat/until-destroy'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { NZ_MODAL_DATA, NzModalModule, NzModalRef } from 'ng-zorro-antd/modal'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzSpaceModule } from 'ng-zorro-antd/space'

type FusionSelectModel = {
  fivePrimeGeneId?: number
  fivePrimePartnerStatus: FusionPartnerStatus
  fivePrimeRegulatoryFusionType?: RegulatoryFusionType
  threePrimeGeneId?: number
  threePrimePartnerStatus: FusionPartnerStatus
  threePrimeRegulatoryFusionType?: RegulatoryFusionType
}

export interface FusionSelectModalData {
  featureId?: number
}

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'cvc-fusion-select-form',
  templateUrl: './fusion-select.form.html',
  styleUrls: ['./fusion-select.form.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzAlertModule,
    NzModalModule,
    NzRadioModule,
    NzSpaceModule,
    RouterModule,
    FormlyModule,
  ],
})
export class CvcFusionSelectForm {
  @Output() onFusionSelected = new EventEmitter<number>()

  readonly #modal = inject(NzModalRef)
  readonly nzModalData: FusionSelectModalData = inject(NZ_MODAL_DATA)

  transcriptForm: UntypedFormGroup
  regulatoryForm: UntypedFormGroup
  layout: NzFormLayoutType = 'vertical'

  transcriptConfig: FormlyFieldConfig[]
  regulatoryConfig: FormlyFieldConfig[]

  transcriptModel: FusionSelectModel = {
    fivePrimeGeneId: undefined,
    threePrimeGeneId: undefined,
    fivePrimePartnerStatus: FusionPartnerStatus.Known,
    threePrimePartnerStatus: FusionPartnerStatus.Known,
    fivePrimeRegulatoryFusionType: undefined,
    threePrimeRegulatoryFusionType: undefined,
  }

  regulatoryModel: FusionSelectModel = {
    fivePrimeGeneId: undefined,
    threePrimeGeneId: undefined,
    fivePrimePartnerStatus: FusionPartnerStatus.Regulatory,
    threePrimePartnerStatus: FusionPartnerStatus.Known,
    fivePrimeRegulatoryFusionType: undefined,
    threePrimeRegulatoryFusionType: undefined,
  }

  options: FormlyFormOptions

  selectOrCreateFusionMutator: MutatorWithState<
    SelectOrCreateFusionGQL,
    SelectOrCreateFusionMutation,
    SelectOrCreateFusionMutationVariables
  >

  mutationState?: MutationState

  fusionType: 'transcript' | 'regulatory' = 'transcript'

  constructor(
    private query: SelectOrCreateFusionGQL,
    errors: NetworkErrorsService
  ) {
    this.selectOrCreateFusionMutator = new MutatorWithState(errors)

    this.transcriptForm = new UntypedFormGroup({})
    this.regulatoryForm = new UntypedFormGroup({})

    this.options = {}

    const selectOptions = [
      {
        label: 'Known',
        value: FusionPartnerStatus.Known,
      },
      {
        label: 'Unknown',
        value: FusionPartnerStatus.Unknown,
      },
      {
        label: 'Multiple',
        value: FusionPartnerStatus.Multiple,
      },
    ]

    const regulatoryOptions = Object.keys(RegulatoryFusionType)
      .map((x) => {
        const val = RegulatoryFusionType[x as keyof typeof RegulatoryFusionType]
        return { label: val, value: val }
      })
      .sort((a, b) => {
        if (a.label == 'enhancer') {
          return -1
        } else if (a.label == 'promoter') {
          return -1
        } else {
          return a.label.localeCompare(b.label)
        }
      })

    this.transcriptConfig = [
      {
        wrappers: ['form-layout'],
        props: {
          showDevPanel: false,
        },
        validators: {
          partnerStatus: {
            message: "At least one of 5' or 3' partner status must be Known",
            expression: (x: AbstractControl) => {
              const model = x.value
              if (model) {
                if (
                  model.fivePrimePartnerStatus == FusionPartnerStatus.Known ||
                  model.threePrimePartnerStatus == FusionPartnerStatus.Known
                ) {
                  return true
                }
              }
              return false
            },
            errorPath: 'fivePrimePartnerStatus',
          },
          sameGene: {
            message: "5' and 3' Genes must be different",
            expression: (x: AbstractControl) => {
              const model = x.value
              if (model && model.fivePrimeGeneId && model.threePrimeGeneId) {
                if (model.fivePrimeGeneId == model.threePrimeGeneId) {
                  return false
                }
              }
              return true
            },
            errorPath: 'fivePrimeGeneId',
          },
        },
        fieldGroup: [
          {
            wrappers: ['form-card'],
            props: {},
            fieldGroup: [
              {
                wrappers: ['form-row'],
                props: {
                  formRowOptions: {
                    span: 12,
                  },
                },
                fieldGroup: [
                  {
                    key: 'fivePrimePartnerStatus',
                    type: 'base-select',
                    props: {
                      label: "5' Partner Status",
                      tooltip:
                        "Select Known if the specific 5' Gene partner is known, Unknown if not. Select Multiple if there are multiple potential 5' Gene partners.",
                      required: true,
                      placeholder: "5' Partner Status",
                      options: selectOptions,
                      multiple: false,
                    },
                  },
                  {
                    key: 'threePrimePartnerStatus',
                    type: 'base-select',
                    props: {
                      required: true,
                      placeholder: "3' Partner Status",
                      label: "3' Partner Status",
                      tooltip:
                        "Select Known if the specific 3' Gene partner is known, Unknown if not. Select Multiple if there are multiple potential 3' Gene partners.",
                      options: selectOptions,
                      multiple: false,
                    },
                  },
                ],
              },
              {
                wrappers: ['form-row'],
                props: {
                  formRowOptions: {
                    span: 12,
                  },
                },
                fieldGroup: [
                  {
                    key: 'fivePrimeGeneId',
                    type: 'feature-select',
                    props: {
                      label: "5' Fusion Partner",
                      placeholder: 'Select Gene',
                      tooltip: "Select the 5' Gene partner in the Fusion",
                      canChangeFeatureType: false,
                      hideFeatureTypeSelect: true,
                      featureType: FeatureInstanceTypes.Gene,
                    },
                    expressions: {
                      'props.disabled': (field) =>
                        field.model.fivePrimePartnerStatus !=
                        FusionPartnerStatus.Known,
                      'props.required': (field) =>
                        field.model.fivePrimePartnerStatus ==
                        FusionPartnerStatus.Known,
                    },
                  },
                  {
                    key: 'threePrimeGeneId',
                    type: 'feature-select',
                    props: {
                      label: "3' Fusion Partner",
                      placeholder: 'Select Gene',
                      tooltip: "Select the 3' Gene partner in the Fusion",
                      canChangeFeatureType: false,
                      hideFeatureTypeSelect: true,
                      featureType: FeatureInstanceTypes.Gene,
                    },
                    expressions: {
                      'props.disabled': (field) =>
                        field.model.threePrimePartnerStatus !=
                        FusionPartnerStatus.Known,
                      'props.required': (field) =>
                        field.model.threePrimePartnerStatus ==
                        FusionPartnerStatus.Known,
                    },
                  },
                ],
              },
              {
                wrappers: ['form-row'],
                props: {
                  formRowOptions: {
                    span: 24,
                  },
                },
                fieldGroup: [
                  {
                    key: 'organizationId',
                    type: 'org-submit-button',
                    props: {
                      submitLabel: 'Create Fusion',
                      align: 'right',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ]

    this.regulatoryConfig = [
      {
        wrappers: ['form-layout'],
        props: {
          showDevPanel: false,
        },
        validators: {
          sameGene: {
            message: "5' and 3' Genes must be different",
            expression: (x: AbstractControl) => {
              const model = x.value
              if (model && model.fivePrimeGeneId && model.threePrimeGeneId) {
                if (model.fivePrimeGeneId == model.threePrimeGeneId) {
                  return false
                }
              }
              return true
            },
            errorPath: 'fivePrimeGeneId',
          },
        },
        fieldGroup: [
          {
            wrappers: ['form-card'],
            props: {},
            fieldGroup: [
              {
                wrappers: ['form-row'],
                props: {
                  formRowOptions: {
                    span: 12,
                  },
                },
                fieldGroup: [
                  {
                    key: 'fivePrimeRegulatoryFusionType',
                    type: 'base-select',
                    props: {
                      label: 'Regulatory Element Type',
                      tooltip: '',
                      required: true,
                      placeholder: 'Regulatory Element',
                      options: regulatoryOptions,
                      multiple: false,
                    },
                  },
                  {
                    key: 'threePrimePartnerStatus',
                    type: 'base-select',
                    props: {
                      required: true,
                      placeholder: "3' Partner Status",
                      label: "3' Partner Status",
                      tooltip:
                        "Select Known if the specific 3' Gene partner is known, Unknown if not. Select Multiple if there are multiple potential 3' Gene partners.",
                      options: selectOptions,
                      multiple: false,
                    },
                  },
                ],
              },
              {
                wrappers: ['form-row'],
                props: {
                  formRowOptions: {
                    span: 12,
                  },
                },
                fieldGroup: [
                  {
                    key: 'fivePrimeGeneId',
                    type: 'feature-select',
                    props: {
                      label: 'Regulatory Partner',
                      placeholder: 'Select Gene',
                      tooltip:
                        'Select the Regulatory Gene partner in the Fusion',
                      canChangeFeatureType: false,
                      hideFeatureTypeSelect: true,
                      featureType: FeatureInstanceTypes.Gene,
                      required: true,
                    },
                  },
                  {
                    key: 'threePrimeGeneId',
                    type: 'feature-select',
                    props: {
                      label: "3' Fusion Partner",
                      placeholder: 'Select Gene',
                      tooltip: "Select the 3' Gene partner in the Fusion",
                      canChangeFeatureType: false,
                      hideFeatureTypeSelect: true,
                      featureType: FeatureInstanceTypes.Gene,
                    },
                    expressions: {
                      'props.disabled': (field) =>
                        field.model.threePrimePartnerStatus !=
                        FusionPartnerStatus.Known,
                      'props.required': (field) =>
                        field.model.threePrimePartnerStatus ==
                        FusionPartnerStatus.Known,
                    },
                  },
                ],
              },
              {
                wrappers: ['form-row'],
                props: {
                  formRowOptions: {
                    span: 24,
                  },
                },
                fieldGroup: [
                  {
                    key: 'organizationId',
                    type: 'org-submit-button',
                    props: {
                      submitLabel: 'Create Fusion',
                      align: 'right',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ]
  }

  modelChange(model: Maybe<FusionSelectModel>) {
    if (model) {
      //if (
      //  this.model.fivePrimePartnerStatus != FusionPartnerStatus.Known &&
      //  this.model.fivePrimePartnerStatus != FusionPartnerStatus.Regulatory
      //) {
      //  this.model = {
      //    ...this.model,
      //    fivePrimeGeneId: undefined,
      //  }
      //}
      //if (
      //  this.model.threePrimePartnerStatus != FusionPartnerStatus.Known &&
      //  this.model.threePrimePartnerStatus != FusionPartnerStatus.Regulatory
      //) {
      //  this.model = {
      //    ...this.model,
      //    threePrimeGeneId: undefined,
      //  }
      //}

      //mark form as invalid here?
      if (
        model.threePrimeGeneId &&
        model.threePrimePartnerStatus != FusionPartnerStatus.Known
      ) {
        return
      }
      if (
        model.fivePrimeGeneId &&
        model.fivePrimePartnerStatus != FusionPartnerStatus.Known
      ) {
        return
      }
      if (
        !model.fivePrimeGeneId &&
        model.fivePrimePartnerStatus == FusionPartnerStatus.Known
      ) {
        return
      }
      if (
        !model.threePrimeGeneId &&
        model.threePrimePartnerStatus == FusionPartnerStatus.Known
      ) {
        return
      }

      if (model.threePrimeGeneId == model.fivePrimeGeneId) {
        return
      }
    }
  }

  toggleForm(mode: 'regulatory' | 'transcript') {
    if (mode == 'regulatory') {
    } else {
    }
  }

  submitFusion(model: FusionSelectModel): void {
    this.mutationState = this.selectOrCreateFusionMutator.mutate(
      this.query,
      model,
      {},
      (data) => {
        if (data.createFusionFeature?.feature.id) {
          const featureId = data.createFusionFeature.feature.id
          this.onFusionSelected.next(featureId)
          if (this.#modal) {
            this.#modal.destroy({ featureId: featureId })
          }
        }
      }
    )
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core'
import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms'
import {
  FeatureSelectTypeaheadFieldsFragment,
  FusionOffsetDirection,
  FusionPartnerStatus,
  Maybe,
  ReferenceBuild,
  SelectOrCreateFusionVariantGQL,
  SelectOrCreateFusionVariantMutation,
  SelectOrCreateFusionVariantMutationVariables,
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
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { UntilDestroy } from '@ngneat/until-destroy'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { NZ_MODAL_DATA, NzModalModule, NzModalRef } from 'ng-zorro-antd/modal'
import { LinkableFeature } from '@app/components/features/feature-tag/feature-tag.component'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'

type FusionVariantSelectModel = {
  fivePrimeTranscript?: string
  fivePrimeExonEnd?: string
  fivePrimeOffset?: string
  fivePrimeOffsetDirection?: FusionOffsetDirection
  threePrimeTranscript?: string
  threePrimeExonStart?: string
  threePrimeOffset?: string
  threePrimeOffsetDirection?: FusionOffsetDirection
  referenceBuild?: ReferenceBuild
  ensemblVersion?: number
  organizationId?: number
}

export interface FusionVariantSelectModalData {
  feature?: FeatureSelectTypeaheadFieldsFragment
}

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'cvc-fusion-variant-select-form',
  templateUrl: './fusion-variant-select.form.html',
  styleUrls: ['./fusion-variant-select.form.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PushPipe,
    ReactiveFormsModule,
    LetDirective,
    NzFormModule,
    NzButtonModule,
    NzAlertModule,
    NzModalModule,
    RouterModule,
    FormlyModule,
    CvcFeatureTagModule,
  ],
})
export class CvcFusionVariantSelectForm {
  @Output() onVariantSelected = new EventEmitter<number>()

  readonly #modal = inject(NzModalRef)
  readonly nzModalData: FusionVariantSelectModalData = inject(NZ_MODAL_DATA)

  model: FusionVariantSelectModel
  form: UntypedFormGroup
  config: FormlyFieldConfig[]
  layout: NzFormLayoutType = 'vertical'

  options: FormlyFormOptions

  selectOrCreateFusionMutator: MutatorWithState<
    SelectOrCreateFusionVariantGQL,
    SelectOrCreateFusionVariantMutation,
    SelectOrCreateFusionVariantMutationVariables
  >

  mutationState?: MutationState

  constructor(
    private query: SelectOrCreateFusionVariantGQL,
    errors: NetworkErrorsService
  ) {
    this.selectOrCreateFusionMutator = new MutatorWithState(errors)

    this.form = new UntypedFormGroup({})

    this.model = {
      fivePrimeTranscript: undefined,
      fivePrimeExonEnd: undefined,
      fivePrimeOffset: undefined,
      fivePrimeOffsetDirection: undefined,
      threePrimeTranscript: undefined,
      threePrimeExonStart: undefined,
      threePrimeOffsetDirection: undefined,
      ensemblVersion: undefined,
      referenceBuild: undefined,
      organizationId: undefined,
    }
    this.options = {}

    const isNumeric = (c: AbstractControl) =>
      c.value ? /^\d+$/.test(c.value) : true

    const selectOptions = [
      {
        label: '+',
        value: FusionOffsetDirection.Positive,
      },
      {
        label: '-',
        value: FusionOffsetDirection.Negative,
      },
    ]

    let fivePrimeDisabled = false
    let threePrimeDisabled = false

    if (this.nzModalData.feature?.featureInstance.__typename == 'Fusion') {
      const feature = this.nzModalData.feature.featureInstance
      fivePrimeDisabled =
        feature.fivePrimePartnerStatus != FusionPartnerStatus.Known
      threePrimeDisabled =
        feature.threePrimePartnerStatus != FusionPartnerStatus.Known
    }

    this.config = [
      {
        wrappers: ['form-layout'],
        props: {
          showDevPanel: false,
        },
        fieldGroup: [
          {
            wrappers: ['form-card'],
            props: {
              formCardOptions: {
                title: `New Fusion Variant for ${this.nzModalData.feature?.name}`,
              },
            },
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
                    key: 'referenceBuild',
                    type: 'reference-build-select',
                    props: {
                      required: true,
                    },
                  },
                  {
                    key: 'ensemblVersion',
                    type: 'base-input',
                    validators: {
                      nccnVersionNumber: {
                        expression: (c: AbstractControl) =>
                          c.value ? /^\d{2,3}$/.test(c.value) : true,
                        message: (_: any, field: FormlyFieldConfig) =>
                          `"${field.formControl?.value}" does not appear to be an Ensembl version number`,
                      },
                    },
                    props: {
                      label: 'Ensembl Version',
                      description:
                        'Enter a valid Ensembl database version (e.g. 75)',
                      required: true,
                    },
                  },
                ],
              },
              {
                wrappers: ['form-row'],
                props: {
                  formRowOptions: {
                    span: 6,
                  },
                },
                fieldGroup: [
                  {
                    key: 'fivePrimeTranscript',
                    type: 'base-input',
                    props: {
                      label: "5' Transcript",
                      required: !fivePrimeDisabled,
                      disabled: fivePrimeDisabled,
                      tooltip:
                        "Specify a transcript ID, including version number (e.g. ENST00000348159.4) for the 5' exon you have selected",
                    },
                  },
                  {
                    key: 'fivePrimeExonEnd',
                    type: 'base-input',
                    validators: {
                      isNumeric: {
                        expression: isNumeric,
                        message: "5' exon must be numeric",
                      },
                    },
                    props: {
                      label: "5' Exon End",
                      required: !fivePrimeDisabled,
                      disabled: fivePrimeDisabled,
                      tooltip:
                        'The exon number counted from the 5’ end of the transcript.',
                    },
                  },
                  {
                    key: 'fivePrimeOffset',
                    type: 'base-input',
                    validators: {
                      isNumeric: {
                        expression: isNumeric,
                        message: "5' exon offset must be numeric",
                      },
                    },
                    props: {
                      label: "5' Exon Offset",
                      tooltip:
                        'A value representing the offset from the segment boundary.',
                      required: false,
                      disabled: fivePrimeDisabled,
                    },
                  },
                  {
                    key: 'fivePrimeOffsetDirection',
                    type: 'base-select',
                    props: {
                      label: "5' Exon Offset Direction",
                      tooltip:
                        'Negative values offset towards the 5’ end of the transcript and positive values offset towards the 3’ end of the transcript.',
                      required: true,
                      placeholder: "5' Offset Direction",
                      options: selectOptions,
                      multiple: false,
                    },
                    expressions: {
                      'props.disabled': (field) =>
                        Boolean(!field.model.fivePrimeOffset),
                      'props.required': (field) =>
                        Boolean(field.model.fivePrimeOffset),
                    },
                  },
                ],
              },
              {
                wrappers: ['form-row'],
                props: {
                  formRowOptions: {
                    span: 6,
                  },
                },
                fieldGroup: [
                  {
                    key: 'threePrimeTranscript',
                    type: 'base-input',
                    props: {
                      required: !threePrimeDisabled,
                      disabled: threePrimeDisabled,
                      label: "3' Transcript",
                      tooltip:
                        "Specify a transcript ID, including version number (e.g. ENST00000348159.4) for the 3' exon you have selected",
                    },
                  },
                  {
                    key: 'threePrimeExonStart',
                    type: 'base-input',
                    validators: {
                      isNumeric: {
                        expression: isNumeric,
                        message: "3' exon must be numeric",
                      },
                    },
                    props: {
                      label: "3' Exon Start",
                      tooltip:
                        'The exon number counted from the 5’ end of the transcript.',
                      required: !threePrimeDisabled,
                      disabled: threePrimeDisabled,
                    },
                  },
                  {
                    key: 'threePrimeOffset',
                    type: 'base-input',
                    validators: {
                      isNumeric: {
                        expression: isNumeric,
                        message: "3' exon must be numeric",
                      },
                    },
                    props: {
                      label: "3' Exon Offset",
                      disabled: threePrimeDisabled,
                      required: false,
                      tooltip:
                        'A value representing the offset from the segment boundary.',
                    },
                  },
                  {
                    key: 'threePrimeOffsetDirection',
                    type: 'base-select',
                    props: {
                      label: "3' Exon Offset Direction",
                      tooltip:
                        'Negative values offset towards the 5’ end of the transcript and positive values offset towards the 3’ end of the transcript.',
                      required: true,
                      placeholder: "3' Offset Direction",
                      options: selectOptions,
                      multiple: false,
                    },
                    expressions: {
                      'props.disabled': (field) =>
                        Boolean(!field.model.threePrimeOffset),
                      'props.required': (field) =>
                        Boolean(field.model.threePrimeOffset),
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
                      submitLabel: 'Create Fusion Variant',
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

  modelChange(model: Maybe<FusionVariantSelectModel>) {
    if (model) {
      if (!this.model.fivePrimeOffset) {
        this.model = {
          ...this.model,
          fivePrimeOffsetDirection: undefined,
        }
      }
      if (!this.model.threePrimeOffset) {
        this.model = {
          ...this.model,
          threePrimeOffsetDirection: undefined,
        }
      }
    }
  }

  submitFusion(model: FusionVariantSelectModel): void {
    const numOrUndefined = (x?: string) => {
      if (x) {
        return +x
      } else {
        return undefined
      }
    }

    const featureId = this.nzModalData.feature?.id

    if (model && featureId) {
      const coords = {
        fivePrimeTranscript: model.fivePrimeTranscript!,
        fivePrimeExonEnd: numOrUndefined(model.fivePrimeExonEnd),
        fivePrimeOffset: numOrUndefined(model.fivePrimeOffset),
        fivePrimeOffsetDirection: model.fivePrimeOffsetDirection,
        threePrimeTranscript: model.threePrimeTranscript!,
        threePrimeExonStart: numOrUndefined(model.threePrimeExonStart),
        threePrimeOffset: numOrUndefined(model.threePrimeOffset),
        threePrimeOffsetDirection: model.threePrimeOffsetDirection,
        referenceBuild: model.referenceBuild!,
        ensemblVersion: +model.ensemblVersion!,
      }

      this.mutationState = this.selectOrCreateFusionMutator.mutate(
        this.query,
        {
          organizationId: model.organizationId,
          featureId: featureId,
          coordinates: coords,
        },
        {},
        (data) => {
          if (data.createFusionVariant?.variant.id) {
            const variantId = data.createFusionVariant.variant.id
            this.onVariantSelected.next(variantId)
            if (this.#modal) {
              this.#modal.destroy({ variantId: variantId })
            }
          }
        }
      )
    }
  }
}

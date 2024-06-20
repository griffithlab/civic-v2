import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'
import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms'
import {
  FeatureInstanceTypes,
  FusionPartnerStatus,
  Maybe,
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
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'
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

type FusionSelectModel = {
  fivePrimeGeneId?: number
  fivePrimePartnerStatus: FusionPartnerStatus
  threePrimeGeneId?: number
  threePrimePartnerStatus: FusionPartnerStatus
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
    PushPipe,
    ReactiveFormsModule,
    LetDirective,
    NzFormModule,
    NzButtonModule,
    NzAlertModule,
    RouterModule,
    FormlyModule,
  ],
})
export class CvcFusionSelectForm {
  @Output() onFusionSelected = new EventEmitter<number>()

  model: FusionSelectModel
  form: UntypedFormGroup
  config: FormlyFieldConfig[]
  layout: NzFormLayoutType = 'horizontal'

  options: FormlyFormOptions

  selectOrCreateFusionMutator: MutatorWithState<
    SelectOrCreateFusionGQL,
    SelectOrCreateFusionMutation,
    SelectOrCreateFusionMutationVariables
  >

  mutationState?: MutationState

  constructor(
    private query: SelectOrCreateFusionGQL,
    private errors: NetworkErrorsService
  ) {
    this.selectOrCreateFusionMutator = new MutatorWithState(errors)

    this.form = new UntypedFormGroup({})
    this.model = {
      fivePrimeGeneId: undefined,
      threePrimeGeneId: undefined,
      fivePrimePartnerStatus: FusionPartnerStatus.Known,
      threePrimePartnerStatus: FusionPartnerStatus.Known,
    }
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

    // if they change the five prime value
    let fivePrimeMatchesThreePrime = (c: AbstractControl) => {
      let model = c?.parent?.value
      if (model) {
        if (
          c.value == FusionPartnerStatus.Known ||
          model.threePrimePartnerStatus == FusionPartnerStatus.Known
        ) {
          return true
        }
      }
      return false
    }

    // if they change the three prime value
    let threePrimeMatchesFivePrime = (c: AbstractControl) => {
      let model = c?.parent?.value
      if (model) {
        if (
          model.fivePrimePartnerStatus == FusionPartnerStatus.Known ||
          c.value == FusionPartnerStatus.Known
        ) {
          return true
        }
      }
      return false
    }

    this.config = [
      {
        wrappers: ['form-row'],
        props: <CvcFormRowWrapperProps>{
          formRowOptions: {
            span: 12,
          },
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
            key: 'fivePrimePartnerStatus',
            type: 'base-select',
            props: {
              required: true,
              placeholder: "5' Partner Status",
              options: selectOptions,
              multiple: false,
            },
          },
          {
            key: 'fivePrimeGeneId',
            type: 'feature-select',
            props: {
              placeholder: "5' Fusion Partner",
              canChangeFeatureType: false,
              hideFeatureTypeSelect: true,
              featureType: FeatureInstanceTypes.Gene,
              layout: {
                showExtra: false,
              },
              hideLabel: true,
            },
            expressions: {
              'props.disabled': (field) =>
                field.model.fivePrimePartnerStatus != FusionPartnerStatus.Known,
              'props.required': (field) =>
                field.model.fivePrimePartnerStatus == FusionPartnerStatus.Known,
            },
          },
          {
            key: 'threePrimePartnerStatus',
            type: 'base-select',
            props: {
              required: true,
              placeholder: "3' Partner Status",
              options: selectOptions,
              multiple: false,
            },
          },
          {
            key: 'threePrimeGeneId',
            type: 'feature-select',
            props: {
              placeholder: "3' Fusion Partner",
              canChangeFeatureType: false,
              hideFeatureTypeSelect: true,
              featureType: FeatureInstanceTypes.Gene,
              layout: {
                showExtra: false,
              },
              hideLabel: true,
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
          {
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Select',
            },
          },
        ],
      },
    ]
  }

  modelChange(model: Maybe<FusionSelectModel>) {
    if (model) {
      if (this.model.fivePrimePartnerStatus != FusionPartnerStatus.Known) {
        this.model = {
          ...this.model,
          fivePrimeGeneId: undefined,
        }
      }
      if (this.model.threePrimePartnerStatus != FusionPartnerStatus.Known) {
        this.model = {
          ...this.model,
          threePrimeGeneId: undefined,
        }
      }

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

  submitFusion(model: FusionSelectModel): void {
    this.mutationState = this.selectOrCreateFusionMutator.mutate(
      this.query,
      model,
      {},
      (data) => {
        if (data.createFusionFeature?.feature.id) {
          this.onFusionSelected.next(data.createFusionFeature.feature.id)
        }
      }
    )
  }
}

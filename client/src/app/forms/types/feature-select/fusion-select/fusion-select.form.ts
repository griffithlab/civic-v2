import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms'
import { FusionPartnerStatus, Maybe } from '@app/generated/civic.apollo'
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyModule,
} from '@ngx-formly/core'
import { BehaviorSubject } from 'rxjs'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { CvcFormRowWrapperProps } from '@app/forms/wrappers/form-row/form-row.wrapper'
import { CommonModule } from '@angular/common'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { Apollo } from 'apollo-angular'
import { UntilDestroy } from '@ngneat/until-destroy'

type FusionSelectModel = {
  fivePrimeGeneId?: number
  fivePrimePartnerStatus?: FusionPartnerStatus
  threePrimeGeneId?: number
  threePrimePartnerStatus?: FusionPartnerStatus
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

  modelChange$ = new BehaviorSubject<Maybe<FusionSelectModel>>(undefined)
  model: FusionSelectModel
  form: UntypedFormGroup
  config: FormlyFieldConfig[]
  layout: NzFormLayoutType = 'horizontal'

  options: FormlyFormOptions

  constructor(private apollo: Apollo) {
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

    this.config = [
      {
        wrappers: ['form-row'],
        props: <CvcFormRowWrapperProps>{
          rows: 2,
          formRowOptions: {
            span: 12,
          },
        },
        fieldGroup: [
          {
            key: 'fivePrimePartnerStatus',
            type: 'select',
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
            type: 'select',
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
        ],
      },
    ]
  }

  modelChange(model: Maybe<FusionSelectModel>) {
    console.log(model)
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

      this.onFusionSelected.next(this.getSelectedFusion(model))
    }
  }

  getSelectedFusion(model: FusionSelectModel): number {
    console.log(model)
    // take in the model, query backend to get or create a fusion and return the id
    return 1
  }
}

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
  SelectOrCreateRegionVariantGQL,
  SelectOrCreateRegionVariantMutation,
  SelectOrCreateRegionVariantMutationVariables,
  RegionVariantName,
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
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcRegionVariantNameSelectModule } from '../../region-variant-name-select/region-variant-name-select.module'

type RegionVariantSelectModel = {
  name?: RegionVariantName
  organizationId?: number
}

export interface RegionVariantSelectModalData {
  feature?: FeatureSelectTypeaheadFieldsFragment
}

@UntilDestroy()
@Component({
  selector: 'cvc-region-variant-select-form',
  templateUrl: './region-variant-select.form.html',
  styleUrls: ['./region-variant-select.form.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzAlertModule,
    NzModalModule,
    RouterModule,
    FormlyModule,
    CvcFeatureTagModule,
    CvcRegionVariantNameSelectModule,
  ],
})
export class CvcRegionVariantSelectForm {
  @Output() onVariantSelected = new EventEmitter<number>()

  readonly #modal = inject(NzModalRef)
  readonly nzModalData: RegionVariantSelectModalData = inject(NZ_MODAL_DATA)

  model: RegionVariantSelectModel
  form: UntypedFormGroup
  config: FormlyFieldConfig[]
  layout: NzFormLayoutType = 'vertical'

  options: FormlyFormOptions

  selectOrCreateRegionMutator: MutatorWithState<
    SelectOrCreateRegionVariantGQL,
    SelectOrCreateRegionVariantMutation,
    SelectOrCreateRegionVariantMutationVariables
  >

  mutationState?: MutationState

  constructor(
    private query: SelectOrCreateRegionVariantGQL,
    errors: NetworkErrorsService
  ) {
    this.selectOrCreateRegionMutator = new MutatorWithState(errors)

    this.form = new UntypedFormGroup({})

    this.model = {
      name: undefined,
    }
    this.options = {}

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
                title: `New Region Variant for ${this.nzModalData.feature?.name}`,
              },
            },
            fieldGroup: [
              {
                wrappers: ['form-row'],
                props: {
                  formRowOptions: {
                    span: 24,
                  },
                },
                fieldGroup: [
                  {
                    key: 'name',
                    type: 'region-variant-name-select',
                    props: {
                      required: true,
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
                      submitLabel: 'Create Region Variant',
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

  submitRegion(model: RegionVariantSelectModel): void {
    const featureId = this.nzModalData.feature?.id

    if (model && featureId) {
      this.mutationState = this.selectOrCreateRegionMutator.mutate(
        this.query,
        {
          organizationId: model.organizationId,
          featureId: featureId,
          name: model.name!,
        },
        {},
        (data) => {
          if (data.createRegionVariant?.variant.id) {
            const variantId = data.createRegionVariant.variant.id
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

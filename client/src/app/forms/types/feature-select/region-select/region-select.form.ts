import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core'
import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms'
import {
  SelectOrCreateRegionGQL,
  SelectOrCreateRegionMutation,
  SelectOrCreateRegionMutationVariables,
} from './region-add.query.gql.generated'
import { FeatureInstanceTypes } from '@app/generated/civic.apollo.types'
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyModule,
} from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'

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
import { CvcOrgSubmitButtonTypeModule } from '@app/forms/types/org-submit-button/org-submit-button.type.module'
import { CvcRegionSelectFieldsModule } from './region-select-fields.module'

type RegionSelectModel = {
  cytogeneticRegionId?: number
  organizationId?: number
}

export interface RegionSelectModalData {
  featureId?: number
}

@UntilDestroy()
@Component({
  selector: 'cvc-region-select-form',
  templateUrl: './region-select.form.html',
  styleUrls: ['./region-select.form.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzAlertModule,
    NzModalModule,
    RouterModule,
    FormlyModule,
    CvcOrgSubmitButtonTypeModule,
    CvcRegionSelectFieldsModule,
  ],
})
export class CvcRegionSelectForm {
  readonly #modal = inject(NzModalRef)
  readonly nzModalData: RegionSelectModalData = inject(NZ_MODAL_DATA)

  model: RegionSelectModel
  form: UntypedFormGroup
  config: FormlyFieldConfig[]
  layout: NzFormLayoutType = 'vertical'

  options: FormlyFormOptions

  selectOrCreateRegionMutator: MutatorWithState<
    SelectOrCreateRegionGQL,
    SelectOrCreateRegionMutation,
    SelectOrCreateRegionMutationVariables
  >

  mutationState?: MutationState

  constructor(
    private query: SelectOrCreateRegionGQL,
    private errors: NetworkErrorsService
  ) {
    this.selectOrCreateRegionMutator = new MutatorWithState(errors)

    this.form = new UntypedFormGroup({})

    this.model = {
      cytogeneticRegionId: undefined,
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
                title: 'New Region Feature',
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
                    key: 'cytogeneticRegionId',
                    type: 'cytogenetic-region-select',
                    props: {
                      label: 'Region',
                      placeholder: 'Select Region',
                      tooltip: 'Select Region',
                    },
                    expressions: {
                      'props.required': (field) => true,
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
                      submitLabel: 'Create Region',
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

  submitRegion(model: RegionSelectModel): void {
    if (!model.cytogeneticRegionId) {
      console.error(
        `region-select form submitRegion requires model with cytogeneticRegionId.`
      )
      return
    }
    this.mutationState = this.selectOrCreateRegionMutator.mutate(
      this.query,
      {
        cytogeneticRegionId: model.cytogeneticRegionId,
        organizationId: model.organizationId,
      },
      {},
      (data) => {
        // destroying the modal with the id IS the result channel: this is
        // modal-only content, so an @Output would have nothing bound to it
        if (data.createRegionFeature?.feature.id) {
          this.#modal.destroy({ featureId: data.createRegionFeature.feature.id })
        }
      }
    )
  }
}
